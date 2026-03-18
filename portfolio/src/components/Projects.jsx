import { ArrowRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Web-based Tic Tac Toe",
        description: "A sleek, responsive two-player game built with HTML5, CSS3, and JavaScript, featuring modern UI and smooth interactions.",
        image: "/projects/p1.png",
        code:""

    },
    {
        id: 2,
        title: "C-CLI Tic Tac Toe",
        description: "A robust terminal-based version of the classic game implemented in C, showcasing core logic and efficient command-line interaction.",
        image: "/projects/p2.png",
        code:"https://github.com/fasiho7/Tic-Tac-Toe-Game/blob/main/tic_tac_toe.c"

    }
]

export const Projects = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Projects</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="gradient-border card-hover bg-card overflow-hidden flex flex-col">
                            {/* Project Image */}
                            <div className="w-full h-48 bg-secondary/30 relative flex items-center justify-center border-b border-white/5 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-2 text-glow">{project.title}</h3>
                                <p className="text-muted-foreground flex-grow">{project.description}</p>

                                <div className="mt-6 flex gap-3">
                                    <button className="cosmic-button text-sm px-4 py-2">
                                        View Code
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2 " href="https://github.com/fasiho7">
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://www.linkedin.com/in/fasih-zeeshan-/">
                    Check My LinkedIn <ArrowRight size={16} />
                </a>

            </div>
        </section>
    );
}