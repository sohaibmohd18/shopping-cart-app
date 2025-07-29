'use client';
import ProductCard from '../../components/ProductCard';

export default function MenPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      <ProductCard id="1" title="Stylish Shirt" image="/men1.jpg" price={29.99} />
      <ProductCard id="2" title="Casual Jacket" image="/men2.jpg" price={49.99} />
    </div>
  );
}