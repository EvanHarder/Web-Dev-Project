function Searchbar({searchTerm, onSearchChange}) {
    return (
        <div className="relative w-full max-w-md mx-auto">
            <input 
              type="search" 
              id="search-input" 
              value = {searchTerm}
              onChange = {(e) => onSearchChange(e.target.value)}
              className="block w-full p-3 text-sm border border-gray-200 rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white focus:outline-none transition-all duration-200 ease-in-out shadow-sm placeholder-gray-400" 
              placeholder="Search any model, make, or year..." 
              required
            />
        </div>
    )
}

export default Searchbar;