'use client';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-gray-900 text-white p-4 shadow-md sticky top-0 z-50">
      <ul className="flex gap-4 text-sm uppercase font-semibold">
        <Link href="/"><li>Home</li></Link>
        <Link href="/men"><li>Mens Wear</li></Link>
        <Link href="/women"><li>Womens Wear</li></Link>
        <Link href="/children"><li>Children Wear</li></Link>
        <Link href="/shoes"><li>Shoes</li></Link>
      </ul>
      <Link href="/cart" className="relative">
        <ShoppingCart className="w-6 h-6 text-pink-400" />
        {/* Quantity badge will be added later */}
      </Link>
    </nav>
  );
}