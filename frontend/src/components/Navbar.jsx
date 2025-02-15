import React from "react";
import { Link } from "react-router-dom"; 

const Navbar = () => {
  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        {/* left side */}
        <div>
            <Link to="/">Logo </Link>
        </div>

        {/* right side */}
        <div>Nav Items</div>
      </nav>
    </header>
  );
};

export default Navbar;
