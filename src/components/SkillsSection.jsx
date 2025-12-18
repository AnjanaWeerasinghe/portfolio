import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

const skillsData = {
    frontend: [
        { name: "HTML/CSS", level: "90" },
        { name: "JavaScript", level: "85" },
        { name: "TypeScript", level: "80" },
        { name: "React", level: "85" },
        { name: "Next.js", level: "80" },
        { name: "TailwindCSS", level: "90" },
        { name: "Bootstrap", level: "85" },
        { name: "Shadcn UI", level: "75" },
        { name: "Flutter", level: "70" },
    ],
    backend: [
        { name: "Node.js", level: "80" },
        { name: "PHP", level: "65" },
        { name: "Java", level: "80" },
        { name: "Python", level: "75" },
        { name: "C", level: "70" },
        { name: "Ballerina", level: "70" },
        { name: "MySQL", level: "80" },
        { name: "PostgreSQL", level: "80" },
        { name: "Firebase", level: "85" },
        { name: "Supabase", level: "65" },
        { name: "REST APIs", level: "75" },
    ],
    tools: [
        { name: "Git/GitHub", level: "85" },
        { name: "VS Code", level: "90" },
        { name: "Postman", level: "80" },
        { name: "Docker", level: "70" },
        { name: "Figma", level: "75" },
        { name: "Photoshop", level: "70" },
    ]
};

const categories = [
    { 
        id: "frontend", 
        label: "Frontend Development",
        description: "Building modern user interfaces",
        icon: "🎨"
    },
    { 
        id: "backend", 
        label: "Backend Development",
        description: "Server-side development & databases",
        icon: "⚙️"
    },
    { 
        id: "tools", 
        label: "Tools & Software",
        description: "Development tools & design software",
        icon: "🛠️"
    }
];

function CategoryMenuItem({ id, label, description, icon }) {
    const itemRef = useRef(null);
    const marqueeRef = useRef(null);
    const marqueeInnerRef = useRef(null);

    const animationDefaults = { duration: 1.2, ease: 'power2.out' };
    const categorySkills = skillsData[id] || [];

    const findClosestEdge = (mouseX, mouseY, width, height) => {
        const topEdgeDist = (mouseX - width / 2) ** 2 + mouseY ** 2;
        const bottomEdgeDist = (mouseX - width / 2) ** 2 + (mouseY - height) ** 2;
        return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
    };

    const handleMouseEnter = (ev) => {
        if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
        const rect = itemRef.current.getBoundingClientRect();
        const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);

        gsap
            .timeline({ defaults: animationDefaults })
            .set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' })
            .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' })
            .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' });
    };

    const handleMouseLeave = (ev) => {
        if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
        const rect = itemRef.current.getBoundingClientRect();
        const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);

        gsap
            .timeline({ defaults: animationDefaults })
            .to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' })
            .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' });
    };

    const repeatedMarqueeContent = Array.from({ length: 2 }).map((_, idx) => (
        <div key={idx} className="flex items-center whitespace-nowrap">
            {categorySkills.map((skill, skillIdx) => (
                <React.Fragment key={`${skill.name}-${skillIdx}`}>
                    <div className="mx-4 flex items-center bg-primary/90 rounded-full px-6 py-3 shadow-lg border border-primary/20">
                        <span className="text-primary-foreground font-semibold text-base leading-tight mr-3">
                            {skill.name}
                        </span>
                        <div className="w-10 h-10 bg-primary-foreground/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-primary-foreground/30">
                            <span className="text-primary-foreground text-xs font-bold">{skill.level}%</span>
                        </div>
                    </div>
                    <div className="w-2 h-2 bg-primary/60 rounded-full mx-3"></div>
                </React.Fragment>
            ))}
        </div>
    ));

    return (
        <div 
            className="flex-1 relative overflow-hidden text-center border-t border-border/20 min-h-[120px] bg-card/80 backdrop-blur-sm" 
            ref={itemRef}
        >
            <div
                className="flex items-center justify-center h-full relative cursor-pointer no-underline text-foreground transition-all duration-500 px-8 py-6 hover:bg-primary/5"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="flex items-center gap-6">
                    <div className="text-4xl filter drop-shadow-lg animate-float">{icon}</div>
                    <div className="text-left">
                        <h3 className="text-2xl font-bold text-foreground uppercase tracking-wide">{label}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{description}</p>
                        <div className="flex items-center gap-2 mt-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <p className="text-xs text-primary font-semibold">
                                {categorySkills.length} skills
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-primary/95 backdrop-blur-md translate-y-full"
                ref={marqueeRef}
            >
                <div className="h-full w-[400%] flex" ref={marqueeInnerRef}>
                    <div className="flex items-center relative h-full w-[400%] will-change-transform" style={{ animation: 'marquee 25s linear infinite' }}>
                        {repeatedMarqueeContent}
                    </div>
                </div>
            </div>
        </div>
    );
}

export const SkillsSection = () => {
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/20">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                    Explore my technical expertise across different domains. Hover over each category to see the skills floating in bubbles.
                </p>
                
                {/* Flowing Categories Menu */}
                <div className="w-full max-w-4xl mx-auto bg-card/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-border/30">
                    <div className="flex flex-col">
                        {categories.map((category, idx) => (
                            <CategoryMenuItem key={`${category.id}-${idx}`} {...category} />
                        ))}
                    </div>
                </div>
                
                {/* Skills Summary */}
                <div className="text-center mt-8">
                    <p className="text-muted-foreground text-sm">
                        Total of <span className="text-primary font-bold text-lg">
                            {Object.values(skillsData).flat().length}
                        </span> skills across <span className="text-primary font-semibold">{categories.length}</span> categories
                    </p>
                </div>
            </div>
        </section>
    );
};