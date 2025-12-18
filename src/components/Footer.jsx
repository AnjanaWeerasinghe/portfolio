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
        <footer className="bg-card border-t border-border/50 py-12 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-gradient">Anjana Weerasinghe</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Full Stack Developer passionate about creating innovative solutions 
                            and bringing ideas to life through code.
                        </p>
                        <div className="flex gap-4 justify-start">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
                                    aria-label={social.label}
                                >
                                    <social.icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Quick Links</h4>
                        <nav className="flex flex-col space-y-2">
                            {quickLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm text-left"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Get In Touch</h4>
                        <div className="space-y-2">
                            <p className="text-muted-foreground text-sm text-left">
                                <strong>Email:</strong> anjanaw2001@gmail.com
                            </p>
                            <p className="text-muted-foreground text-sm text-left">
                                <strong>Location:</strong> Colombo, Sri Lanka
                            </p>
                        </div>
                        <div className="pt-2">
                            <a 
                                href="#contact" 
                                className="inline-flex items-center gap-2 text-sm cosmic-button"
                            >
                                <Mail className="h-4 w-4" />
                                Send Message
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 pt-8 border-t border-border/50">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-muted-foreground">
                            © {currentYear} Anjana Weerasinghe. All rights reserved.
                        </p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                            Made with <Heart className="h-4 w-4 text-red-500 fill-current" /> using React & Tailwind CSS
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};