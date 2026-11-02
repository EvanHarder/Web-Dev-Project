import { Link } from 'react-router-dom'

function Card({ car, onRemove }) {
  return (
    <div className="relative">
      <Link to="/detail" state={{ data: car }} className="block max-w-lg rounded-lg border border-gray-200 overflow-hidden bg-gray-50 shadow-md hover:shadow-lg hover:scale-101 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white focus:outline-none transition-all duration-200 ease-in-out">
        <img className="w-full h-48 object-cover" src={car.image} alt={car.model}/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{car.brand} {car.model} - {car.year}</div>
          <p className="text-sm text-gray-500">Click to view details</p>
        </div>
      </Link>

      {onRemove && (
        <button
          type="button"
          onClick={() => onRemove(car.id)}
          aria-label={`Remove ${car.brand} ${car.model}`}
          className="absolute top-2 right-2 rounded-lg border border-gray-200 bg-white/90 px-3 py-1 text-sm hover:bg-white focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
        >
          Remove
        </button>
      )}
    </div>
  )
}

export default Card