import { useState } from 'react'
import Searchbar from '../components/Searchbar'
import Dropdown from '../components/Dropdown'
import Card from '../components/Card'

const sortOptions = [
  { id: 0, name: 'Default', value: '' },
  { id: 1, name: 'Year: Newest First', value: 'year-desc' },
  { id: 2, name: 'Year: Oldest First', value: 'year-asc' },
]

// this is hardcoded data for the demo, API will be called when implemented
const carList = [
    { id: 1, brand: 'Toyota', model: 'Camry', year: 2026, image: '/car1.jpg' },
    { id: 2, brand: 'Telsa', model: 'Model 3', year: 2025, image: '/car2.jpg' },
    { id: 3, brand: 'Toyota', model: 'Camry', year: 2026, image: '/car1.jpg' },
    { id: 4, brand: 'Telsa', model: 'Model 3', year: 2025, image: '/car2.jpg' },
    { id: 5, brand: 'Toyota', model: 'Camry', year: 2026, image: '/car1.jpg' },
    { id: 6, brand: 'Telsa', model: 'Model 3', year: 2025, image: '/car2.jpg' },
]

function Home() {
  // this is hardcoded data for the demo, will come from carList later
  const brandList = [
    { id: 0, name: 'All Brands', value: '' },
    { id: 1, name: 'Toyota', value: 'Toyota' },
    { id: 2, name: 'Telsa', value: 'Telsa' },
  ]
  
  const [filteredCarList, setFilteredCarList] = useState(carList);

  // handles brand selection
  const handleBrandSelect = (selectedBrand) => {
    if (selectedBrand === '') {
      setFilteredCarList(carList);
    } else {
      const filtered = carList.filter((car) => car.brand === selectedBrand);
      setFilteredCarList(filtered);
    }
  };

  // handles sort selection
  const handleSortSelect = (selectedSort) => {
    let sortedList = [...filteredCarList];
    
    if (selectedSort === 'year-desc') {
      sortedList.sort((a, b) => b.year - a.year);
    } else if (selectedSort === 'year-asc') {
      sortedList.sort((a, b) => a.year - b.year);
    } else if (selectedSort === '') {
      sortedList = [...carList];
    }
    
    setFilteredCarList(sortedList);
  };

  return (
    <>
      <Searchbar />
        
        {/* Facets */}
        <div className="flex flex-wrap items-center justify-between box-border w-full space-y-8 sm:space-y-0">
          <div className="flex items-center space-x-4"> 
            <Dropdown label="Brand" options={brandList} onOptionSelect={handleBrandSelect} />
            <p className="text-gray-500 text-md leading-none">Showing {filteredCarList.length} results</p>
          </div>

          <Dropdown label="Sort By" options={sortOptions} onOptionSelect={handleSortSelect} />
        </div>

        {/* Car List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCarList.map((car) => (
            <Card key={car.id} car={car} />
          ))}
        </div>

        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="flex-shrink mx-4 text-gray-500 text-sm">
            End of results...
          </span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>
    </>
  )
}

export default Home;