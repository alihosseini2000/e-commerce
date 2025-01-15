import { Product } from '@/store/productsSlice';
import Image from 'next/image';
import Link from 'next/link';

const ProductSinglePage = ({ product }: { product: Product }) => (
  <div className="border rounded-lg p-4 shadow">
    <Image src={product.image} alt={product.title} width={240} height={144} className="w-full object-cover mb-4" />
    <h3 className="text-lg font-bold">{product.title}</h3>
    <p className="text-gray-600">${product.price}</p>
    <Link href={`/products/${product.id}`} className="text-blue-600 mt-2 inline-block">
      View Details
    </Link>
  </div>
);

export default ProductSinglePage;
