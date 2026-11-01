import { Link, useLocation } from 'react-router-dom'

function Compare() {
  const { state } = useLocation()
  const car = state?.data

  return (
    <section>
      <h1 className="text-3xl font-bold text-gray-900">Comparison Page</h1>
      {car ? (
        <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">
            {car.brand} {car.model}
          </h2>
          <p className="mt-2 text-gray-600">Year: {car.year}</p>
          {/* <p className="mt-4 text-gray-500"></p> */}
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
