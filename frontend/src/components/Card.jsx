import { Link } from 'react-router-dom'
import Button from '../components/Button'

// Card component, 2 different types of cards
function Card({ car={}, type = null }) {
  const title = type === 'home' ? car.make : car.model;
  const image = type === 'home' ? car.brand_logo_url : car.image_urls?.split(',')[0];
  const modelSpoiler = type === 'home' ? car.models : null;
  const link = type === 'home' ? `/${car.make}` : `/detail/${car.model}`;

  if (type === 'home') {
    return (
      <Link 
        to={link} 
        state={{ data: car }} 
        id={`${car.make?.charAt(0).toUpperCase()}`}
        className="bg-neutral-950 w-full h-36 rounded-lg border border-transparent px-8 py-4 flex flex-row focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none hover:text-(--accent) hover:scale-102 transition-all duration-300 overflow-hidden" 
      >
          <img 
            src={car.brand_logo_url} 
            alt={`${title} logo`} 
            className="w-24 h-24 object-contain" 
            loading="lazy"
          />
          <div className="flex flex-col justify-center ml-4 gap-2">
            <div className="font-thin text-2xl">{title}</div>
            <div className="flex flex-wrap gap-2">
              {modelSpoiler && (
                <>
                  {modelSpoiler.slice(0, 3).map((model, index) => (
                    <p key={index} className="text-neutral-200 text-base leading-none">{model}</p>
                  ))}
                  {modelSpoiler.length > 3 && (
                    <p className="text-neutral-600 text-sm leading-none">+{modelSpoiler.length - 3}...</p>
                  )}
                </>
              )}
            </div>
            <p className="text-neutral-600 text-sm">click to view models</p>
          </div>
      </Link>
    );
  }

  if (type === 'model') {
    return (
      <div
        className="bg-neutral-950 w-full min-h-96 h-96 rounded-lg shadow-md flex flex-col items-center overflow-hidden"
      >
        <img
          src={image}
          alt={`${title} image`}
          id={`${car.modelName?.charAt(0).toUpperCase()}`}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        <div className="p-4 w-full flex flex-col flex-1 gap-2">
          <div className="font-thin text-2xl">{title}</div>
          <p className="text-neutral-700 text-base">{car.description?.slice(0, 100)}...</p>
          <Button text="View Details &rarr;" to={link} data={car} className="mt-auto text-center"/>
        </div>
      </div>
    );
  }

  return null;
}

export default Card