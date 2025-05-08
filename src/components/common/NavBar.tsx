
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: "الرئيسية", path: "/" },
    { name: "اللغات", path: "/languages" },
    { name: "الأساتذة", path: "/professors" },
    { name: "التسجيل", path: "/register" },
    { name: "تواصل معنا", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 space-x-reverse">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-lg font-medium rtl ${
                location.pathname === item.path
                  ? "text-academy-green border-b-2 border-academy-green"
                  : "text-gray-700 hover:text-academy-green"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Button 
            asChild
            className="bg-academy-green hover:bg-opacity-90"
          >
            <Link to="/whatsapp">
              تواصل عبر الواتساب
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-gray-700 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t py-4 px-4 absolute w-full right-0 top-full shadow-md">
          <div className="flex flex-col space-y-4 rtl">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-lg font-medium ${
                  location.pathname === item.path
                    ? "text-academy-green"
                    : "text-gray-700"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              asChild
              className="bg-academy-green hover:bg-opacity-90 w-full"
            >
              <Link to="/whatsapp" onClick={() => setIsOpen(false)}>
                تواصل عبر الواتساب
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
