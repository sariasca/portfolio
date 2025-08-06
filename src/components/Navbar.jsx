import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Skills", path: "#skills" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={cn("fixed w-full z-40 transition-all duration-300",
     isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5")}
    >
      <div className="container flex items-center justify-between">
        <a href="#home" className="text-xl font-bold text-primary flex items-center">
          <span className="relative z-10">
            <span className="text-glow text-foreground"> Sariasca </span> 
            Portafolio
          </span>
        </a>

        {/* Desktop navbar */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a key={key} href={item.path} className="text-foreground/80 hover:text-primary transition-colors
            duration-300">
              {item.name}
            </a>
          ))}
        </div>
        {/* Mobile navbar */}
        <div className="md:hidden">
          {navItems.map((item) => (
            <a key={item.name} href={item.path} className="block text-lg font-medium text-primary py-2">
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
