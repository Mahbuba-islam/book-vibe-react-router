import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-base-100 mt-4">
      {/* Unified Header Row */}
      <div className="flex items-center justify-between px-4 py-2 lg:px-8">
        {/* Left: Hamburger (mobile only) */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="btn btn-ghost btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Center: Title */}
        <div className="text-xl font-bold text-primary">
          BookShelf 📚
        </div>

        {/* Center: Nav Links (desktop only) */}
        <nav className="hidden lg:flex gap-6 text-sm font-medium">
         <NavLink to='/' className="hover:text-primary">Home</NavLink>
          <NavLink to='listedBooks' className="hover:text-primary">Listed Books</NavLink>
          <NavLink to='/' className="hover:text-primary">Pages to Read</NavLink>
        </nav>

        {/* Right: Buttons */}
        <div className="flex items-center gap-2">
          <button className="btn bg-[#23BE0A] text-white rounded-xl px-4 py-2 text-sm">
            Sign In
          </button>
          <button className="btn bg-[#59C6D2] text-white rounded-xl px-4 py-2 text-sm">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile: Dropdown Menu */}
      {isOpen && (
        <ul className="lg:hidden menu menu-sm px-4 py-2 space-y-2 text-sm font-medium bg-base-100 flex flex-col">
           <NavLink to='/' className="hover:text-primary">Home</NavLink>
          <NavLink to='listedBooks' className="hover:text-primary">Listed Books</NavLink>
          <NavLink to='/' className="hover:text-primary">Pages to Read</NavLink>
        
        </ul>
      )}
    </header>
  );
};

export default Header;