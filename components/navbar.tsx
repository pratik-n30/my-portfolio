import Link from 'next/link';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Timeline', path: '/timeline' },
  { name: 'Blog', path: '/blog' },
];

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center py-6 border-b border-gray-800">
      <div className="flex gap-8">
        {navItems.map((item) => (
          <Link 
            key={item.path} 
            href={item.path}
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}