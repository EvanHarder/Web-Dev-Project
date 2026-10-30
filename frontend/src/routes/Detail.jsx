import { useLocation } from 'react-router-dom';

function Detail() {
    const location = useLocation();
    const car = location.state?.data; // gets car data passed from the home page

    return (
    <div>
        <h1>Detail Page</h1>
        {car ? (
            <div>
                <h2>{car.brand} {car.model}</h2>
                <p>Year: {car.year}</p>
                <img src={car.image} alt={car.model} />
            </div>
        ) : (
            <p>No car data available.</p>
        )}
    </div>
    );
}

export default Detail;