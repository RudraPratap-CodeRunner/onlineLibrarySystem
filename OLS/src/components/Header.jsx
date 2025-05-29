import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Browse Books', path: '/browsebooks' },
    { name: 'Add Book', path: '/addbooks' },
  ];

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-3">
        <ul className="flex flex-wrap justify-center items-center gap-8 text-gray-600 font-semibold text-lg">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`hover:text-blue-600 transition duration-200 ${
                  location.pathname === item.path ? 'text-blue-600 underline underline-offset-4' : ''
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
