import { Link, useLocation } from 'react-router-dom'

function Compare() {
  const { state } = useLocation()
  const car = state?.data

  //Added second car for comparison
  const tesla = {
    brand: 'Tesla',
    model: 'Model 3',
    year: 2025,
    image: '/car2.jpg',
    vin: '109389393',
    engineSize: 'N/A (Electric)',
    transmission: '1 Speed Direct Drive',
    bodyStyle: 'Sedan',
  }

  return (
    <section>
      <h1 className="text-3xl font-bold text-gray-900">Comparison Page</h1>
      {car ? (
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
  {/* Selected Car */}
  <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm">
    <h2 className="text-xl font-semibold text-gray-900">
      {car.brand} {car.model}
    </h2>

    <p className="mt-2 text-gray-600">Year: {car.year}</p>
    <p className="text-gray-600">VIN: {car.vin}</p>
    <p className="text-gray-600">Engine: {car.engineSize}</p>
    <p className="text-gray-600">Transmission: {car.transmission}</p>
    <p className="text-gray-600">Body Style: {car.bodyStyle}</p>
  </div>

  {/* Tesla */}
  <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm">
    <h2 className="text-xl font-semibold text-gray-900">
      {tesla.brand} {tesla.model}
    </h2>

    <p className="mt-2 text-gray-600">Year: {tesla.year}</p>
    <p className="text-gray-600">VIN: {tesla.vin}</p>
    <p className="text-gray-600">Engine: {tesla.engineSize}</p>
    <p className="text-gray-600">Transmission: {tesla.transmission}</p>
    <p className="text-gray-600">Body Style: {tesla.bodyStyle}</p>
  </div>
</div>
      ) : (
        <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm">
          <p className="text-gray-600">Choose a vehicle from the home page to start comparing.</p>
          <Link to="/" className="mt-4 inline-block text-blue-700 underline">Browse vehicles</Link>
        </div>
      )}
    </section>
  )
}

export default Compare
