'use client';

import { useDarkMode } from '@/context/DarkModeContext';
import { BsMoon, BsSun } from 'react-icons/bs';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2"
    >
      {isDarkMode ? <BsSun /> : <BsMoon />}
    </button>
  );
};

export default DarkModeToggle;
