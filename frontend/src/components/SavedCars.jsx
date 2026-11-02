import { Link } from 'react-router-dom'
import Card from './Card'

function SavedCars({ cars, onRemove }) {
  return (
    <section aria-labelledby="saved-cars-heading">
      <div className="flex items-center justify-between mb-4">
        <h2 id="saved-cars-heading" className="text-2xl font-bold">Saved cars</h2>
        {/* "Add a car" sends the user to the browse page */}
        <Link to="/" className="rounded-lg border border-gray-200 px-4 py-2 text-sm hover:bg-gray-50">
          Add a car
        </Link>
      </div>

      {cars.length === 0 ? (
        <p className="text-gray-500">No saved cars yet. Browse the collection to add some.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cars.map((car) => (
            <Card key={car.id} car={car} onRemove={onRemove} />
          ))}
        </div>
      )}
    </section>
  )
}

export default SavedCars