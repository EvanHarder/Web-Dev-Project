// loading skeleton for card component
function CardSkeleton({ type = null }) {
  if (type === 'home') {
    return (
      <div className="bg-neutral-950 w-full border-t border-neutral-800 px-8 py-4 flex flex-row overflow-hidden animate-pulse">
        <div className="w-24 h-24 bg-neutral-800"></div>
        <div className="flex flex-col justify-center ml-4 w-1/2">
          <div className="h-6 bg-neutral-800 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-neutral-800 rounded w-full mb-1"></div>
          <div className="h-4 bg-neutral-800 rounded w-full mb-1"></div>
        </div>
      </div>
    );
  }

  if (type === 'model') {
    return (
      <div className="bg-neutral-950 w-full h-96 rounded-lg flex flex-col items-center overflow-hidden animate-pulse">
        <div className="w-full h-48 bg-neutral-800"></div>
        <div className="p-4 w-full flex flex-col flex-1 gap-2">
          <div className="h-8 bg-neutral-800 rounded w-3/4"></div>
          <div className="h-4 bg-neutral-800 rounded w-full"></div>
          <div className="h-4 bg-neutral-800 rounded w-full"></div>
          <div className="h-4 bg-neutral-800 rounded w-full"></div>
          <div className="h-10 bg-neutral-800 rounded w-full mt-auto"></div>
        </div>
      </div>
    );
  }

  return null;
}

export default CardSkeleton;