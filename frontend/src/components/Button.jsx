import { Link } from 'react-router-dom';

function Button({ text, to, data={}, className = '' }) {
    return (
        <Link
            to={to}   
            state={{ data }}             
            className={`rounded-md border border-neutral-800 bg-neutral-900 px-4 py-2 font-regular text-neutral-200 hover:scale-102 hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/40 hover:text-(--accent) ${className}`}
        >
            {text}
        </Link>
  );
}

export default Button;