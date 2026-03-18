const skills = [
    { name: "HTML/CSS/JS", level: "90%" },
    { name: "React-Frontend", level: "85%" },
    { name: "C/C++ (Problem-Solving)", level: "80%" },
    { name: "Version-Control (Git/GitHub)", level: "85%" },
    { name: "Open-Source", level: "70%" },
];

export const Skills = () => {
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <div key={index} className="bg-card p-6 rounded-lg shadow-xs card-hover gradient-border">
                            <div className='text-left mb-4 mix-blend-normal'>
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary bg-opacity-50 h-2 rounded-full overflow-hidden">
                                <div 
                                    className="bg-primary h-2 rounded-full origin-left transition-all duration-1000 ease-out"
                                    style={{ width: skill.level }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};