'use client'
import { login } from '@/lib/action/auth';
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
        <Link href="/auth/sign-up">Sign Up</Link>
        <button onClick={()=> login()}>sign in with github</button>
      </div>
    </div>
  </nav>
);

export default Navbar;
