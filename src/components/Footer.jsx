import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    const socialLinks = [
        {
            icon: Github,
            label: "GitHub",
            href: "https://github.com/AnjanaWeerasinghe"
        },
        {
            icon: Linkedin,
            label: "LinkedIn", 
            href: "https://linkedin.com/in/anjanaweerasinghe"
        },
        {
            icon: Twitter,
            label: "Twitter",
            href: "https://twitter.com/anjanaweerasinghe"
        },
        {
            icon: Mail,
            label: "Email",
            href: "mailto:anjanaw2001@gmail.com"
        }
    ];

    const quickLinks = [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" }
    ];

    return (
        <footer className="bg-card border-t border-border/50 py-8 sm:py-12 px-4 sm:px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
                    {/* Brand Section */}
                    <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
                        <h3 className="text-lg sm:text-xl font-bold text-gradient">Anjana Weerasinghe</h3>
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed max-w-md">
                            Full Stack Developer passionate about creating innovative solutions 
                            and bringing ideas to life through code.
                        </p>
                        <div className="flex gap-3 sm:gap-4 justify-start flex-wrap">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 sm:p-2.5 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110 touch-manipulation"
                                    aria-label={social.label}
                                >
                                    <social.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-3 sm:space-y-4">
                        <h4 className="text-base sm:text-lg font-semibold">Quick Links</h4>
                        <nav className="flex flex-col space-y-1.5 sm:space-y-2">
                            {quickLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-xs sm:text-sm text-left py-1 touch-manipulation"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-3 sm:space-y-4">
                        <h4 className="text-base sm:text-lg font-semibold">Get In Touch</h4>
                        <div className="space-y-2">
                            <p className="text-muted-foreground text-xs sm:text-sm text-left break-words">
                                <strong className="text-foreground">Email:</strong><br className="sm:hidden" />
                                <span className="sm:ml-1">anjanaw2001@gmail.com</span>
                            </p>
                            <p className="text-muted-foreground text-xs sm:text-sm text-left">
                                <strong className="text-foreground">Location:</strong><br className="sm:hidden" />
                                <span className="sm:ml-1">Colombo, Sri Lanka</span>
                            </p>
                        </div>
                        <div className="pt-2">
                            <a 
                                href="#contact" 
                                className="inline-flex items-center gap-2 text-xs sm:text-sm cosmic-button w-full sm:w-auto justify-center sm:justify-start py-2 px-4 sm:py-1 sm:px-2 touch-manipulation"
                            >
                                <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                Send Message
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border/50">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
                        <p className="text-xs sm:text-sm text-muted-foreground order-2 sm:order-1">
                            © {currentYear} Anjana Weerasinghe. All rights reserved.
                        </p>
                        <p className="text-xs sm:text-sm text-muted-foreground flex items-center justify-center gap-1 order-1 sm:order-2">
                            Made with <Heart className="h-3 w-3 text-red-500 fill-current" /> using React & Tailwind CSS
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};