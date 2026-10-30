function Dropdown({ label, options, selectedOption, onOptionSelect }) {
    return (
        <div className="dropdown relative">
            {label && (
                <p className="absolute -top-6 left-0 text-sm font-medium text-gray-700 mb-1">
                    {label}
                </p>
            )}

            <select
                value={selectedOption}
                onChange={(e) => onOptionSelect(e.target.value)}
                className="p-3 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white focus:outline-none transition-all duration-200 ease-in-out shadow-sm"
                name={label}
            >
                {options.map((option) => (
                    <option key={option.id} value={option.value}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Dropdown;