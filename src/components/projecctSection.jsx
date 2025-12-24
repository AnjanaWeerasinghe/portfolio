import { useState, useEffect } from "react";
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
    {
        id: 1,
        title: "Onlien Elections",
        description: "A secure digital election platform featuring role-based authentication, real-time dashboards, and reusable UI components built with Next.js and Shadcn/UI for transparent and efficient voting processes.",
        detailedDescription: `This project is a comprehensive digital voting system designed for secure and transparent elections.

Key Features:
• Role-based authentication system for voters, candidates, and administrators
• Real-time election dashboards with live vote counting
• Secure ballot submission with encryption
• Reusable UI components built with Shadcn/UI
• PostgreSQL database for reliable data storage
• Supabase for backend services and authentication

The platform ensures election integrity through multiple verification layers while maintaining a user-friendly interface for all stakeholders.`,
        imageUrl: "/projects/Election.jpg",
        tags: [ "Ballerina", "Next.js", "TypeScript", "Supabase", "PostgreSQL", "Shadcn/UI"],
        githubUrl: "https://github.com/Online-Election-System/e-voting-backend"
    },
     {
        id: 2,
        title: "Laravel Education Platform",
        description: "A full-stack web application built with Laravel (backend) and React (frontend) that streamlines the process of managing doctor appointments.",
        detailedDescription: `A comprehensive healthcare management system that connects patients with doctors seamlessly.

Key Features:
• Doctor profile management with specializations and availability
• Patient appointment scheduling with calendar integration
• Real-time booking status updates
• Admin dashboard for managing users and appointments
• Firebase integration for real-time notifications
• Responsive design with Bootstrap

The platform simplifies healthcare access by allowing patients to browse doctors, check availability, and book appointments with just a few clicks.`,
        imageUrl: "/projects/Hospital.jpg",
        tags: ["Laravel", "PHP", "Firebase", "HTML", "CSS", "Bootstrap"],
        githubUrl: "https://github.com/Online-Election-System/e-voting-backend"
    },
    {
        id: 3,
        title: "Air Gurd — Air Quality Monitoring Device",
        description: "Developed an IoT-based air quality monitoring device featuring integrated gas, temperature, oxygen, and dust sensors.",
        detailedDescription: `An innovative IoT solution for real-time environmental monitoring and air quality analysis.

Key Features:
• Multiple integrated sensors (gas, temperature, oxygen, dust)
• Real-time data tracking and visualization via Firebase
• GSM failover alerts for continuous monitoring
• React dashboard for intuitive data visualization
• Historical data analysis and trends
• Raspberry Pi Pico W for efficient processing

This device helps users monitor air quality in their environment, providing alerts when conditions become unhealthy and historical data for trend analysis.`,
        imageUrl: "/projects/unnamed.jpg",
        tags: ["C/C++", "Firebase", "React", "Node.js", "Raspberry Pi Pico W"],
        githubUrl: "https://github.com/Online-Election-System/e-voting-backend"
    },
    {
        id: 4,
        title: "UOM-Course-Finder",
        description: "A full-featured mobile learning management system built with React Native and Firebase",
        detailedDescription: `A mobile application designed to help University of Moratuwa students find and manage their courses effectively.

Key Features:
• Course search and filtering by department
• Detailed course information and prerequisites
• User authentication with Firebase
• Personalized course recommendations
• Offline access to saved courses
• Cross-platform support (iOS & Android)

This app streamlines the course selection process for students, making it easier to plan their academic journey.`,
        imageUrl: "/projects/Uom-Course-Finder.jpg",
        tags: ["React-Native", "Firebase"],
        githubUrl: "https://github.com/AnjanaWeerasinghe/uom-cource-finder"
    },
];

// Helper function to truncate description
const truncateText = (text, maxLength = 100) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + "...";
};

export const ProjectsSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const [isMobile, setIsMobile] = useState(false);
    
    // Check if device is mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 640);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    
    // Mobile: horizontal scroll, Desktop: pagination
    const getProjectsPerPage = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth < 640) return projects.length; // Mobile - show all in one row
            if (window.innerWidth < 1024) return 2; // Tablet
        }
        return 3; // Desktop
    };
    
    const [projectsPerPage, setProjectsPerPage] = useState(getProjectsPerPage());
    const totalPages = Math.ceil(projects.length / projectsPerPage);
    
    const nextSlide = () => {
        if (isMobile) {
            setCurrentIndex((prev) => Math.min(prev + 1, projects.length - 1));
        } else {
            setCurrentIndex((prev) => (prev + 1) % totalPages);
        }
    };
    
    const prevSlide = () => {
        if (isMobile) {
            setCurrentIndex((prev) => Math.max(prev - 1, 0));
        } else {
            setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
        }
    };
    
    // Update projects per page on window resize
    useEffect(() => {
        const handleResize = () => {
            const newProjectsPerPage = getProjectsPerPage();
            if (newProjectsPerPage !== projectsPerPage) {
                setProjectsPerPage(newProjectsPerPage);
                setCurrentIndex(0); // Reset to first page
            }
        };
        
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [projectsPerPage]);

    return (
        <section id="projects" className="py-12 sm:py-16 md:py-24 px-4 relative">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
                    Here are some of the projects I've worked on recently. Click on a project to learn more.
                </p>
                
                {/* Slider Container */}
                <div className="relative">
                    {/* Navigation Buttons - Only for desktop/tablet */}
                    {!isMobile && projects.length > projectsPerPage && (
                        <>
                            <button 
                                onClick={prevSlide}
                                className="absolute -left-2 sm:left-0 lg:-left-14 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-card shadow-lg hover:bg-primary/10 transition-all duration-300 hover:scale-110 border border-border touch-manipulation"
                            >
                                <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
                            </button>
                            <button 
                                onClick={nextSlide}
                                className="absolute -right-2 sm:right-0 lg:-right-14 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-card shadow-lg hover:bg-primary/10 transition-all duration-300 hover:scale-110 border border-border touch-manipulation"
                            >
                                <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
                            </button>
                        </>
                    )}
                    
                    {/* Projects Slider */}
                    <div className={cn(
                        "overflow-x-auto overflow-y-hidden",
                        isMobile ? "mx-2" : "mx-4 sm:mx-8 lg:mx-0"
                    )}>
                        {isMobile ? (
                            /* Mobile: Horizontal scrollable row - all projects visible */
                            <div className="flex gap-4 pb-4 min-w-max">
                                {projects.map((project) => (
                                    <div 
                                        key={project.id} 
                                        className="flex-shrink-0 w-72 bg-card shadow-sm rounded-xl overflow-hidden card-hover cursor-pointer border border-border/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 touch-manipulation"
                                        onClick={() => setSelectedProject(project)}
                                    >      
                                        <div className="h-40 overflow-hidden">
                                            <img 
                                                src={project.imageUrl} 
                                                alt={project.title} 
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="text-base font-semibold mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-1">
                                                {project.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                                                {truncateText(project.description, 80)}
                                            </p>
                                            <div className="flex flex-wrap gap-1.5">
                                                {project.tags.slice(0, 2).map((tag, index) => (
                                                    <span 
                                                        key={index} 
                                                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md font-medium"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                                {project.tags.length > 2 && (
                                                    <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md">
                                                        +{project.tags.length - 2}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            /* Desktop/Tablet: Grid slider */
                            <div 
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                {Array.from({ length: totalPages }).map((_, pageIndex) => (
                                    <div 
                                        key={pageIndex}
                                        className={cn(
                                            "grid gap-4 sm:gap-6 min-w-full px-1",
                                            projectsPerPage === 1 && "grid-cols-1",
                                            projectsPerPage === 2 && "grid-cols-1 sm:grid-cols-2",
                                            projectsPerPage === 3 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                                        )}
                                    >
                                        {projects
                                            .slice(pageIndex * projectsPerPage, pageIndex * projectsPerPage + projectsPerPage)
                                            .map((project) => (
                                            <div 
                                                key={project.id} 
                                                className="group bg-card shadow-sm rounded-xl overflow-hidden card-hover cursor-pointer border border-border/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 touch-manipulation"
                                                onClick={() => setSelectedProject(project)}
                                            >      
                                                <div className="h-40 sm:h-48 overflow-hidden">
                                                    <img 
                                                        src={project.imageUrl} 
                                                        alt={project.title} 
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                </div>
                                                <div className="p-4 sm:p-5">
                                                    <h3 className="text-base sm:text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                                                        {project.title}
                                                    </h3>
                                                    <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                                                        {truncateText(project.description, 100)}
                                                    </p>
                                                    <div className="flex flex-wrap gap-1.5">
                                                        {project.tags.slice(0, 3).map((tag, index) => (
                                                            <span 
                                                                key={index} 
                                                                className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md font-medium"
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                        {project.tags.length > 3 && (
                                                            <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md">
                                                                +{project.tags.length - 3}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                    
                    {/* Pagination Dots - Only for desktop/tablet */}
                    {!isMobile && totalPages > 1 && (
                        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
                            {Array.from({ length: totalPages }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={cn(
                                        "w-2.5 h-2.5 rounded-full transition-all duration-300 touch-manipulation",
                                        currentIndex === index 
                                            ? "bg-primary w-6 sm:w-8" 
                                            : "bg-muted hover:bg-primary/50"
                                    )}
                                />
                            ))}
                        </div>
                    )}
                    
                    {/* View All Projects Button */}
                    <div className="flex justify-center mt-8 sm:mt-12">
                        <a
                            href="https://github.com/AnjanaWeerasinghe"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-card border border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 text-sm sm:text-base touch-manipulation"
                        >
                            <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                            <span className="hidden sm:inline">View All Projects on GitHub</span>
                            <span className="sm:hidden">View All Projects</span>
                        </a>
                    </div>
                </div>
            
            {/* Project Popup Modal */}
            {selectedProject && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm"
                    onClick={() => setSelectedProject(null)}
                >
                    <div 
                        className="bg-card rounded-xl sm:rounded-2xl max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden shadow-2xl animate-fade-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header Image */}
                        <div className="relative h-48 sm:h-64 overflow-hidden">
                            <img 
                                src={selectedProject.imageUrl} 
                                alt={selectedProject.title}
                                className="w-full h-full object-cover"
                            />
                            <button 
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-3 sm:top-4 right-3 sm:right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors touch-manipulation"
                            >
                                <X className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                            </button>
                        </div>
                        
                        {/* Scrollable Content with Custom Scrollbar */}
                        <div className="max-h-[calc(95vh-12rem)] sm:max-h-[calc(90vh-16rem)] overflow-y-auto scrollbar-thin">
                            <div className="p-4 sm:p-6">
                                <h3 className="text-xl sm:text-2xl font-bold mb-3">{selectedProject.title}</h3>
                                
                                {/* Short Description */}
                                <p className="text-muted-foreground mb-4 leading-relaxed text-sm sm:text-base">
                                    {selectedProject.description}
                                </p>
                                
                                {/* Detailed Description */}
                                {selectedProject.detailedDescription && (
                                    <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-muted/30 rounded-lg border border-border/50">
                                        <h4 className="text-sm font-semibold text-foreground mb-2 sm:mb-3">Project Details</h4>
                                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                                            {selectedProject.detailedDescription}
                                        </p>
                                    </div>
                                )}
                            
                                {/* Tags */}
                                <div className="mb-4 sm:mb-6">
                                    <h4 className="text-sm font-semibold text-foreground mb-2 sm:mb-3">Technologies Used</h4>
                                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                        {selectedProject.tags.map((tag, index) => (
                                            <span 
                                                key={index} 
                                                className="text-xs sm:text-sm bg-primary/10 text-primary px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-medium"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            
                                {/* Action Buttons */}
                                <div className="flex gap-3 sm:gap-4">
                                    <a 
                                        href={selectedProject.githubUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity text-sm sm:text-base touch-manipulation"
                                    >
                                        <Github className="h-4 w-4" />
                                        View Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}  
    </section>
    );
};