import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

export const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Initialize EmailJS
    useEffect(() => {
        emailjs.init('JZwclWRn-sYwoRetm'); // Your public key
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            // EmailJS configuration
            const serviceId = 'service_7ujyu0i';
            const templateId = 'template_oogomov';
            
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message,
                time: new Date().toLocaleString(),
                to_email: 'anjanaw2001@gmail.com'
            };
            
            const result = await emailjs.send(serviceId, templateId, templateParams);
            console.log('Email sent successfully:', result);
            
            setIsSubmitting(false);
            setFormData({ name: "", email: "", subject: "", message: "" });
            
            // Show success toast
            toast.success('Message sent successfully! I will get back to you soon.', {
                duration: 4000,
                position: 'top-center',
            });
        } catch (error) {
            console.error('EmailJS Error:', error);
            setIsSubmitting(false);
            
            // Show error toast
            toast.error('Failed to send message. Please try again later.', {
                duration: 4000,
                position: 'top-center',
            });
        }
    };

    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "anjanaw2001@gmail.com",
            href: "mailto:anjanaw2001@gmail.com"
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+94 71 234 5678",
            href: "tel:+94712345678"
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Colombo, Sri Lanka",
            href: null
        }
    ];

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
        }
    ];

    return (
        <section id="contact" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    I am always excited to connect with fellow developers, potential collaborators, or anyone interested in my work.
                    Whether you have a project in mind, want to discuss ideas, or just want to say hello, feel free to reach out!
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info Side */}
                    <div className="space-y-8">
                        <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg">
                            <h3 className="text-xl font-semibold mb-6 text-center">Contact Information</h3>
                            
                            <div className="space-y-6">
                                {contactInfo.map((item, index) => (
                                    <div key={index} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center sm:text-left">
                                        <div className="p-3 rounded-full bg-primary/10">
                                            <item.icon className="h-5 w-5 text-primary" />
                                        </div>
                                        <div className="text-center sm:text-left">
                                            <p className="text-sm text-muted-foreground">{item.label}</p>
                                            {item.href ? (
                                                <a 
                                                    href={item.href}
                                                    className="text-foreground hover:text-primary transition-colors font-medium"
                                                >
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p className="text-foreground font-medium">{item.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            {/* Social Links */}
                            <div className="mt-8 pt-8 border-t border-border/50">
                                <h4 className="text-sm font-semibold text-muted-foreground mb-4 text-center">Follow Me</h4>
                                <div className="flex gap-4 justify-center">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
                                            aria-label={social.label}
                                        >
                                            <social.icon className="h-5 w-5" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Contact Form Side */}
                    <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg">
                        <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
                        
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-muted border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 placeholder:text-center sm:placeholder:text-left"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-muted border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 placeholder:text-center sm:placeholder:text-left"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 placeholder:text-center sm:placeholder:text-left"
                                    placeholder="Project Inquiry"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 resize-none placeholder:text-center sm:placeholder:text-left"
                                    placeholder="Tell me about your project or just say hello..."
                                />
                            </div>
                            
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={cn(
                                    "w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300",
                                    "bg-primary text-primary-foreground hover:opacity-90 hover:scale-[1.02]",
                                    isSubmitting && "opacity-70 cursor-not-allowed"
                                )}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="h-5 w-5" />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
