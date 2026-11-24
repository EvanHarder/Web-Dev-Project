import csv
from contextlib import asynccontextmanager
from pathlib import Path
from typing import Any, Optional
from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
import time

CSV_FILE = Path("cars.csv")

FIELDNAMES = [
    "brand", "model", "production_years", "from_year", "to_year", "body_style",
    "segment", "title", "description", "engine_specs_title", "cylinders",
    "displacement", "power", "torque", "fuel_system", "fuel", "fuel_capacity",
    "top_speed", "drive_type", "gearbox", "front", "rear", "tire_size", "length",
    "width", "height", "front_rear_track", "wheelbase", "cargo_volume",
    "unladen_weight", "highway", "combined", "acceleration", "aerodynamics",
    "city", "ground_clearance", "gross_weight_limit", "brand_url",
    "brand_logo_url", "model_url", "image_urls", "image_file_names",
    "dir_path", "total_images"
]

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

vehicles_db: list[dict[str, Any]] = []

def load_csv_data() -> list[dict[str, Any]]:
    if not CSV_FILE.exists():
        raise FileNotFoundError(f"{CSV_FILE} does not exist.")

    with open(CSV_FILE, mode="r", encoding="utf-8") as csvfile:
        reader = csv.DictReader(csvfile, fieldnames=FIELDNAMES)
        next(reader) 
        return [row for row in reader]

@asynccontextmanager
async def lifespan(app: FastAPI):
    vehicles_db.extend(load_csv_data())
    yield

app = FastAPI(title="Vehicle API", version="1.0.0", lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# routes
@app.get("/")
def read_root():
    return {"message": "Welcome to the Vehicle API!"}

# get all makes in DB, + image url for each make + first 3 models for each make
@app.get("/api/makes")
def read_makes():
    makes_info = {}

    for car in vehicles_db:
        make = car["brand"]
        if make not in makes_info:
            makes_info[make] = {
                "make": make,
                "brand_logo_url": car["brand_logo_url"],
                "models": []
            }

        model = car["model"]
        if (model.count(" ") > 1):
            model = model.replace(" ", "", 1)

        model = model.split(" ")[-1]

        if model and model not in makes_info[make]["models"]:
            makes_info[make]["models"].append(model)

    return {"makes": list(makes_info.values())}

# get all models + information for a specific make, ignore already existing models
@app.get("/api/{make}/models")
def read_models(make: str):
    car_models = set()

    models_info = [
        car for car in vehicles_db
        if car["brand"].lower() == make.lower() and car["model"] not in car_models and not car_models.add(car["model"])
    ]

    if not models_info:
        raise HTTPException(status_code=404, detail=f"No models found for make '{make}'")

    return models_info

# get all information for a specific make and model
@app.get("/api/{make}/{model}")
@app.get("/api/{make}/{model}/{year}")
def read_vehicle_info(make: str, model: str, year: Optional[int] = None):
    search_query = make + ' ' + model

    vehicle_info = [
        car for car in vehicles_db
        if car["model"].lower() == search_query.lower()
    ]

    if year:
        vehicle_info = [
            car for car in vehicle_info
            if str(year) in car["production_years"]
        ]

    if not vehicle_info:
        raise HTTPException(status_code=404, detail=f"No information found for vehicle '{search_query}'")
    return vehicle_info