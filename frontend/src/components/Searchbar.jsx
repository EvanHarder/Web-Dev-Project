function Searchbar() {
    return (
        <div className="relative w-1/2 mx-auto">
            <input 
              type="search" 
              id="search-input" 
              className="absolute -top-12 w-full p-4 text-sm rounded-xl bg-neutral-800 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:outline-none transition-all duration-200 ease-in-out shadow-sm placeholder-neutral-400 text-white" 
              placeholder="Search any model, make, or year..." 
              required
            />
        </div>
    )
}

export default Searchbar;