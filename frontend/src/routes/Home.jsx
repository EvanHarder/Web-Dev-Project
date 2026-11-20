import { useState, useEffect } from 'react'
import { getCarBrands, getCarModels } from '../lib/api'
import Searchbar from '../components/Searchbar'
import Dropdown from '../components/Dropdown'
import Card from '../components/Card'
import CardSkeleton from '../components/CardSkeleton'

const alphabet = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

const alphaSort = [
  { id: -1, name: 'Alphabetical', value: 'none' },
  { id: 0, name: 'Ascending: A-Z', value: 'asc' },
  { id: 1, name: 'Descending: Z-A', value: 'desc' },
];

const modelCountSort = [
  { id: -1, name: 'Car Models Count', value: 'none' },
  { id: 0, name: 'Low to High', value: 'low' },
  { id: 1, name: 'High to Low', value: 'high' },
]

function Home({ type = 'home' }) {  
  const [filteredList, setFilteredList] = useState([]);
  const [catalog, setCatalog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const make = window.location.pathname.split('/').pop();

  // used to scroll to alphabet letter when selected
  const scrollTo = (letter) => {
    const element = document.getElementById(`${letter}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // handle sorting of brands/makes. NOT WORKING FULLY
  const handleSort = (selectedOption) => {
    let sorted = [...filteredList];

    if (selectedOption === 'asc') {
      sorted.sort((a, b) => a.make?.localeCompare(b.make));
    } else if (selectedOption === 'desc') {
      sorted.sort((a, b) => b.make?.localeCompare(a.make));
    } else if (selectedOption === 'low') {
      sorted.sort((a, b) => a.models.length - b.models.length);
    } else if (selectedOption === 'high') {
      sorted.sort((a, b) => b.models.length - a.models.length);
    } else {
      sorted = [...catalog];
    }

    setFilteredList(sorted);
  }

  useEffect(() => {
    // scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const backgroundImage = document.getElementById('background-image');

    const fetchBrands = async () => {
      setLoading(true);
      try {
        const make = await getCarBrands();
        setCatalog(make.makes);
        setFilteredList(make.makes);

        if (backgroundImage) {
          backgroundImage.src = `./image.png`;
        }

      } catch (error) {
        setError('Error fetching car brands');
        console.error('Error fetching car brands:', error);
      } finally {
        setLoading(false);
      }
    };

    const fetchCars = async () => {
      setLoading(true);
        try {
            const response = await getCarModels(make)
            console.log('Fetched car models:', response);
            const updatedResponse = response.map(car => {
                const modelWithoutMake = car.model.replace(new RegExp(`^${make}\\s+`, 'i'), '');
                return { ...car, modelName: modelWithoutMake };
            })

            setCatalog(updatedResponse || []);
            setFilteredList(updatedResponse || []);

            if (backgroundImage) {
                backgroundImage.src = `${updatedResponse[0]?.image_urls?.split(',')[0]}`;
            }
        } catch (error) {
            console.error('Error fetching car data:', error);
        } finally {
            setLoading(false);
        }
    };
    if (!make) {
      fetchBrands();
    } else {
      fetchCars();
    }

  }, [make]);

  return (
    <>
      <Searchbar />

      <div className="flex flex-col items-center">
        <div className="flex flex-wrap items-center justify-between box-border w-full space-y-8 sm:space-y-0 pt-2">
          <h1 className="text-5xl">{make ? make.toUpperCase() : 'Car Automakers & Brands'}</h1>
          <p className="text-2xl font-semibold">{filteredList.length} 
            <span className="text-lg text-neutral-400 font-thin">
              {make ? ' MODELS' : ' MAKES'}
            </span>
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
          {/* alphabetical buttons */}
          {alphabet.map((letter) => (
            <button
              key={letter}
              className="px-3 py-1 rounded-md bg-neutral-800 text-white hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
              onClick={() => {
                scrollTo(letter);
              }}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>
      <hr className="border-neutral-800 m-0"/>
      
      {error && 
          <div className="box-border w-full flex flex-col items-center justify-center text-center m-0">
            <p className="text-red-500 text-lg">{error}, please try again later.</p>
          </div>
      }

      <div className="flex flex-col md:flex-row">
        {/* sidebar for sorting/filtering */}
        <div className="md:w-1/4 w-full flex flex-col p-4">
          <div className="sticky top-4 md:h-96 flex flex-col gap-4 p-4 rounded-xl">
            <p className="text-gray-500 text-sm leading-none">FILTER BY</p>
            <Dropdown options={alphaSort} onOptionSelect={handleSort} />
            <Dropdown options={modelCountSort} onOptionSelect={handleSort} />
          </div>
        </div>

        {/* car brands/models container */}
        <div className={`grid grid-cols-1 md:grid-cols-2 items-center justify-center w-full gap-2 ${type === 'model' ? 'mt-4' : ''}`}>
            {loading ? (
              Array.from({ length: 6 }).map((_, index) => (
                <CardSkeleton key={index} type={type} />
              ))
            ) : (
              filteredList.map((car, index) => (
                <Card key={index} car={car} type={type} />
              ))
            )}
        </div>
      </div>
    </>
  )
}

export default Home;