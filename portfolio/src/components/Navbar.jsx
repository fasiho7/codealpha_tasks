import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handlescroll = () => {
            setIsScrolled(window.scrollY > 10);
        }

        window.addEventListener("scroll", handlescroll);
        return () => window.removeEventListener("scroll", handlescroll);
    }, [])

    return (
        <nav className={cn("fixed top-0 w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}>
            <div className="container flex items-center justify-between">
                <a href="#" className="text-xl font-bold text-primary flex items-center">
                    <span className="relative z-10" href="#hero">
                        <span className="text-glow">Fasih </span> Zeeshan
                    </span>
                </a>

                {/* Desktop menu */}
                <div className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                        >
                            {item.name}
                        </a>
                    ))}
 
                    {/* Add Theme Toggle from Home */}
                    <div className="ml-2 pl-4 border-l border-white/10 dark:border-white/20">
                        <ThemeToggle />
                       
                    </div>
                </div>

                {/* Mobile placeholder */}
                <div className="md:hidden flex items-center gap-2">
                    <ThemeToggle />
                    <button 
                        className="p-2 text-foreground/80 hover:text-primary transition-colors bg-secondary/20 rounded-lg"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
                        {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-border shadow-lg py-4 px-6 flex flex-col gap-4 animate-fade-in origin-top">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2 border-b border-border/50"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}