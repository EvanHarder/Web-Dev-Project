import { Link, useLocation } from 'react-router-dom'

function Detail() {
  const { state } = useLocation()
  const car = state?.data

  if (!car) {
    return (
      <section className="rounded-lg border border-gray-200 bg-gray-50 p-8 text-center shadow-sm">
        <h1 className="text-2xl font-bold">Vehicle details</h1>
        <p className="mt-2 text-gray-600">Choose a vehicle from the home page to see its details.</p>
        <Link to="/" className="mt-4 inline-block text-blue-700 underline">Browse vehicles</Link>
      </section>
    )
  }

  const details = [
  { label: 'VIN', value: car.vin },
  { label: 'Make', value: car.brand },
  { label: 'Model', value: car.model },
  { label: 'Year', value: car.year },
  { label: 'Engine Size', value: car.engineSize },
  { label: 'Transmission', value: car.transmission },
  { label: 'Body Style', value: car.bodyStyle },
]

  return (
    <section>
      <div className="mb-6 flex items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-gray-900">Vehicle Details</h1>
        <Link
          to="/compare"
          state={{ data: car }}
          className="rounded-md border border-gray-300 bg-gray-100 px-4 py-2 font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
        >
          Comparison
        </Link>
      </div>
      <article className="overflow-hidden rounded-lg border border-gray-200 bg-gray-50 shadow-md">
        <div className="flex h-64 items-center justify-center bg-white p-4 md:h-96">
          <img
            className="h-full w-full object-contain"
            src={car.image}
            alt={`${car.brand} ${car.model}`}
          />
        </div>

        <div className="p-5 md:p-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            {car.brand} {car.model}
          </h2>
          <dl className="space-y-3">
            {details.map(({ label, value }) => (
              <div key={label} className="grid grid-cols-[minmax(7rem,auto)_1fr] gap-3 rounded border border-gray-200 bg-white p-3">
                <dt className="font-semibold text-gray-700">{label}</dt>
                <dd className="text-gray-600">{value || 'Not provided'}</dd>
              </div>
            ))}
          </dl>
        </div>
      </article>
    </section>
  )
}

export default Detail