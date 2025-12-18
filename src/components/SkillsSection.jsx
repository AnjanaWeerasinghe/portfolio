import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
    // Frontend
    { name: "HTML/CSS", level: "90", category: "frontend" },
    { name: "JavaScript", level: "85", category: "frontend" },
    { name: "TypeScript", level: "80", category: "frontend" },
    { name: "React", level: "85", category: "frontend" },
    { name: "Next.js", level: "80", category: "frontend" },
    { name: "TailwindCSS", level: "90", category: "frontend" },
    { name: "Bootstrap", level: "85", category: "frontend" },
    { name: "Shadcn UI", level: "75", category: "frontend" },
    { name: "Flutter", level: "70", category: "frontend" },
    
    // Backend
    { name: "Node.js", level: "80", category: "backend" },
    { name: "PHP", level: "65", category: "backend" },
    { name: "Java", level: "80", category: "backend" },
    { name: "Python", level: "75", category: "backend" },
    { name: "C", level: "70", category: "backend" },
    { name: "Ballerina", level: "70", category: "backend" },
    { name: "MySQL", level: "80", category: "backend" },
    { name: "PostgreSQL", level: "80", category: "backend" },
    { name: "Firebase", level: "85", category: "backend" },
    { name: "Supabase", level: "65", category: "backend" },
    { name: "REST APIs", level: "75", category: "backend" },
    
    // Tools
    { name: "Git/GitHub", level: "85", category: "tools" },
    { name: "VS Code", level: "90", category: "tools" },
    { name: "Postman", level: "80", category: "tools" },
    { name: "Docker", level: "70", category: "tools" },
];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    
    const categories = [
        { id: "all", label: "All Skills" },
        { id: "frontend", label: "Frontend" },
        { id: "backend", label: "Backend" },
        { id: "tools", label: "Tools" }
    ];
    
    const filteredSkills = activeCategory === "all" 
        ? skills 
        : skills.filter(skill => skill.category === activeCategory);
    
    return (
        <section id="skills" className= "py-24 px-4 relative bg-secondary/0">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">
                My <span className="text-primary"> Skills</span>
            </h2>
            
            {/* Category Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={cn(
                            "px-6 py-2 rounded-full font-medium transition-all duration-300",
                            activeCategory === category.id
                                ? "bg-primary text-primary-foreground shadow-lg scale-105"
                                : "bg-card text-foreground hover:bg-primary/10 hover:scale-105"
                        )}
                    >
                        {category.label}
                    </button>
                ))}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-sm card-hover">
                        <h3 className="text-lg font-semibold mb-3">{skill.name}</h3>
                        <div className="w-full bg-muted rounded-full h-2">
                            <div 
                                className="bg-primary h-2 rounded-full transition-all duration-500"
                                style={{ width: `${skill.level}%` }}
                            />
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">{skill.level}%</p>
                    </div>
                ))}
            </div>
        </div>
        </section>
    )
};