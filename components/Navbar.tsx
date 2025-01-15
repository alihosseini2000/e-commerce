import Link from 'next/link';

const Navbar = () => (
  <nav className="bg-blue-600 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">
        Fake Store
      </Link>
      <div className="flex space-x-4">
        <Link href="/products">Products</Link>
        <Link href="/auth/sign-in">Sign In</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
