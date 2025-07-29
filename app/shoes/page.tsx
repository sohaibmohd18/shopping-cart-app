'use client';
import ProductCard from '../../components/ProductCard';

export default function ShoesPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      <ProductCard id="7" title="Running Shoes" image="/shoes1.jpg" price={59.99} />
      <ProductCard id="8" title="Formal Shoes" image="/shoes2.jpg" price={79.99} />
    </div>
  );
}