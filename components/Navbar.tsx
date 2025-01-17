'use client';
import Image from 'next/image';
import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';
import { RxHamburgerMenu } from 'react-icons/rx';

interface NavbarProps {
  onToggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar }) => {
  return (
    <nav className="text-xs max-container padding-container flexBetween sticky top-0 opacity-70 hover:opacity-95">
      <div className="flexCenter gap-2">
        <Image src="/ECommerce.svg" alt="logo" width={60} height={60} />
        <h1>ECommerce</h1>
      </div>
      <ul className="md:flex hidden gap-8 px-8 py-4">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/products">
          <li>Products</li>
        </Link>
        <Link href="/users">
          <li>Users</li>
        </Link>
      </ul>
      <div className="text-2xl flexCenter gap-4">
        <DarkModeToggle />
        <button onClick={onToggleSidebar} aria-label="Toggle Sidebar" className='md:hidden'>
          <RxHamburgerMenu />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
