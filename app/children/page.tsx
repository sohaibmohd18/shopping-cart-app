'use client';
import ProductCard from '../../components/ProductCard';

export default function ChildrenPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      <ProductCard id="5" title="Kids T-Shirt" image="/children1.jpg" price={19.99} />
      <ProductCard id="6" title="Kids Shorts" image="/children2.jpg" price={21.99} />
    </div>
  );
}