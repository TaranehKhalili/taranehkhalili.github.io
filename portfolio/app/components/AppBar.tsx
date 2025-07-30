'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AppBar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Experiences', href: '/experiences' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white bg-opacity-90 backdrop-blur-md shadow z-50 px-6 py-3 flex justify-between items-center">
  <Link href="/" className="font-semibold text-lg">Taraneh Khalili</Link>
  <div className="space-x-6 text-sm">
          
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
    </nav>
  );
} 