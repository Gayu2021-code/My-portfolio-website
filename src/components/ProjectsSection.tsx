import { useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";

const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    description:
      "A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations and a clean design.",
    image: "/portfolio.png",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    category: "React",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Tic-Tac-Toe",
    description:
      "A weather application that fetches real-time weather data using a public API. Displays current conditions and forecasts.",
    image: "/tic-tac-toe.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "JavaScript",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Stone Paper Scissors",
    description:
      "Built a web application for online paper sessions using HTML, CSS, and JavaScript, featuring dynamic user interaction and responsive layout.",
    image: "/stonepaperscissors.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "JavaScript",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Student Mgnt System",
    description:
      "Built a Student Management System using PHP, MySQL, and XAMPP, performing CRUD operations (Create, Read, Update, Delete) to manage student data efficiently.",
    image: "/student.png",
    technologies: ["HTML", "Php" , "JavaScript"],
    category: "Php",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Calculator",
    description:
      "A functional calculator with a sleek design, supporting basic arithmetic operations.",
    image: "/placeholder.svg",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "JavaScript",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "CSS Art Gallery",
    description:
      "Creative CSS illustrations and animations showcasing advanced styling techniques.",
    image: "/placeholder.svg",
    technologies: ["HTML", "CSS"],
    category: "CSS",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const filters = ["All", "HTML", "CSS", "JavaScript", "React","Php"];

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  liveUrl: string;
  githubUrl: string;
}

const ProjectCard = ({
  project,
  onClick,
  index,
  isVisible,
}: {
  project: Project;
  onClick: () => void;
  index: number;
  isVisible: boolean;
}) => (
  <div
    className={`group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 card-glow cursor-pointer ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
    style={{ transitionDelay: `${index * 100}ms` }}
    onClick={onClick}
  >
    {/* Project Image */}
    <div className="relative h-48 overflow-hidden bg-secondary">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>

    {/* Project Content */}
    <div className="p-5">
      <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2">
        {project.technologies.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 3 && (
          <span className="px-2 py-1 text-xs rounded-full bg-secondary text-muted-foreground">
            +{project.technologies.length - 3}
          </span>
        )}
      </div>
    </div>
  </div>
);

const ProjectModal = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
    onClick={onClose}
  >
    <div
      className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-border animate-scale-in"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Modal Header */}
      <div className="relative h-64 overflow-hidden rounded-t-2xl">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>
      </div>

      {/* Modal Content */}
      <div className="p-6">
        <h3 className="font-display font-bold text-2xl mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-6">{project.description}</p>

        {/* Technologies */}
        <div className="mb-6">
          <h4 className="font-semibold mb-3">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-sm rounded-full bg-primary/10 text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button asChild className="flex-1">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={16} className="mr-2" />
              Live Demo
            </a>
          </Button>
          <Button asChild variant="outline" className="flex-1">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={16} className="mr-2" />
              View Code
            </a>
          </Button>
        </div>
      </div>
    </div>
  </div>
);

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">What I've Built</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-8">
            My <span className="gradient-text">Projects</span>
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter)}
                className={
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "border-border hover:border-primary/50 hover:text-primary"
                }
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
              index={index}
              isVisible={isInView}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No projects found for this category.
            </p>
          </div>
        )}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default ProjectsSection;
