import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { X, Menu, Moon, Sun } from "lucide-react";

const NavItems = [
    {name: "Home", href: "#home"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
]

// Theme Toggle Button Component
const ThemeToggleButton = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-primary/10 transition-colors duration-300"
            aria-label="Toggle theme"
        >
            {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-500" />
            ) : (
                <Moon className="h-5 w-5 text-blue-900" />
            )}
        </button>
    );
};

export const Navbar = () => {
    const[isScrolled, setIsScrolled] = useState(false);
    const[isMenuOpen, setIsMenuOpen] = useState(true);


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav 
        className={cn("fixed w-full z-40 transition duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-sm" : "py-5"
        )}
        >
            <div className="container flex items-center justify-between">
                <a className="text-xl font-bold text-primary flex items-center" href="#hero">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">Anjana Weerasinghe</span> Portfolio
                    </span>
                </a>
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {NavItems.map((item, key) => (
                        <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                            {item.name}</a>
                        ))}
                    
                    {/* Theme Toggle - Desktop */}
                    <ThemeToggleButton />
                </div>
                
                {/* Mobile Navigation */}
                <div className="flex items-center gap-4 md:hidden">
                    {/* Theme Toggle - Mobile */}
                    <ThemeToggleButton />
                    <button onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="p-2 text-foreground z-50"
                        >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
                    </button>
                </div>

                <div className={cn(
                    "fixed inset-0 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center space-y-8 transition-transform duration-300 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}>
                <div className="flex flex-col space-y-8 text-xl">
                    {NavItems.map((item, key) => (
                        <a key={key} href={item.href} 
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}</a>
                        ))}

                </div>
                </div>
                
            </div>
        </nav>
    );
};   