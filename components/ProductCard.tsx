import Image from 'next/image';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

type ProductCardProps = {
  id: string;
  title: string;
  image: string;
  price: number;
};

export default function ProductCard({ id, title, image, price }: ProductCardProps) {
  const [qty, setQty] = useState(0);
  const { addToCart } = useCart();

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
      <Image src={image} alt={title} width={300} height={300} className="rounded-md object-cover" />
      <h2 className="mt-2 font-bold text-lg text-pink-400">{title}</h2>
      <p className="text-sm text-gray-300">${price.toFixed(2)}</p>
      <div className="flex items-center mt-2 gap-2">
        <button onClick={() => setQty(Math.max(0, qty - 1))} className="px-2 bg-pink-500 rounded">-</button>
        <span>{qty}</span>
        <button onClick={() => setQty(qty + 1)} className="px-2 bg-pink-500 rounded">+</button>
      </div>
      <button
        className="mt-2 w-full bg-pink-600 text-white py-1 rounded hover:bg-pink-700"
        onClick={() => qty > 0 && addToCart({ id, title, quantity: qty, image, price })}
      >
        Add to Cart
      </button>
    </div>
  );
}