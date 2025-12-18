import { Briefcase, Code, User  } from "lucide-react";
export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative" >
            {""}
            
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">
                   About<span className="text-primary"> Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Web Developer & Tech Enthusiast</h3>

                        <p className="text-muted-foreground">
                            I'm passionate about building innovative digital solutions that make a real impact.
                              With a strong foundation in both frontend and backend technologies.
                               I specialize in creating scalable, 
                               user-centric web applications that solve real-world problems.
                        </p>
                        <p className="text-muted-foreground">
                            My journey in software development has been driven by curiosity and a commitment to continuous learning, 
                            allowing me to work with diverse technologies from React and Next.js to Laravel Ballerina and Supabase.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Get in Touch
                            </a>
                            <a href="/cv/AnjanaWeerasinghe.pdf" download="AnjanaWeerasinghe_CV.pdf" className="px-5 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 ">
                                {" "}
                                Download CV 
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">Creating user-friendly and responsive websites using modern technologies.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                    <p className="text-muted-foreground">Designing intuitive interfaces with focus on user experience and accessibility.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Professional Work</h4>
                                    <p className="text-muted-foreground">Delivering high-quality solutions for clients and projects.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
