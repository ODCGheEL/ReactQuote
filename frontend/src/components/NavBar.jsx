import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Quote } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-around items-center">
        
          <Link to="/" className="text-white text-2xl font-bold flex items-center gap-2 justify-center">
            <Quote size={32}/>
            ReactQuotes
          </Link>
        
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-400">
            Home
          </Link>
          <Link to="/favorites" className="text-white hover:text-gray-400">
            Favorites
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
