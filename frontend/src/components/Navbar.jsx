const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Vehicle Details', href: '/detail' },
  { name: 'Profile', href: '/profile' },
]

// apply consistent styling to nav links
const navLinkClasses = "rounded-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white focus:outline-none transition-all duration-200 ease-in-out hover:text-(--accent)" 

function Navbar() {
  return (
    <nav className="p-4 flex flex-wrap items-center justify-between box-border w-full bg-gray-50 border-b border-gray-200 shadow-sm">
        <div className="navbar-logo">
            <h1 className="logo-text text-xl font-bold ml-2">AutoVault</h1>
        </div>
        <ul className="inline-flex space-x-4">
            {navLinks.map((link) => (
                <li key={link.href}>
                    <a href={link.href} className={navLinkClasses}>
                        {link.name}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar;