'use client';
import ProductCard from '../../components/ProductCard';

export default function WomenPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      <ProductCard id="3" title="Red Dress" image="/women1.jpg" price={39.99} />
      <ProductCard id="4" title="Summer Top" image="/women2.jpg" price={24.99} />
    </div>
  );
}