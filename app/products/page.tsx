'use client';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '@/components/ProductCard';
import { fetchProducts, Product } from '@/store/productsSlice';
import { RootState } from '@/store/store';

export default function ProductsPage() {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  const status = useSelector((state: RootState) => state.products.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  return (
    <section className="max-container padding-container">
      <h2 className="text-2xl font-bold text-center mb-6">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
