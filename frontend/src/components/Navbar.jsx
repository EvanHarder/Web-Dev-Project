const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Vehicle Details', href: '/detail' },
  { name: 'Profile', href: '/profile' },
]

function Navbar() {
  return (
    <nav className="p-6 flex flex-wrap items-center justify-center w-full absolute top-0 left-0 z-10 bg-gradient-to-b from-neutral-900 to-transparent">
        <ul className="inline-flex space-x-4 text-white text-lg font-medium">
            {navLinks.map((link) => (
                <li key={link.href}>
                    <a href={link.href} className="focus:text-(--accent) focus:outline-none transition-all duration-200 ease-in-out hover:text-(--accent)">
                        {link.name}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar;