function Dropdown({ options, selectedOption, onOptionSelect }) {
    return (
        <div className="dropdown relative">
            <select
                value={selectedOption}
                onChange={(e) => onOptionSelect(e.target.value)}
                className="pb-1 border-b text-neutral-400 border-neutral-800 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none transition-all duration-200 ease-in-out w-full hover:text-(--accent) focus:text-(--accent)"
            >
                {options.map((option) => (
                    <option key={option.id} value={option.value} className="bg-neutral-800 text-white">
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Dropdown;