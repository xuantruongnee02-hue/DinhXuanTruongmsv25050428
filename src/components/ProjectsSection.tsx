import { FolderOpen } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/data/projects";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="projects" className="py-20 md:py-32 bg-accent/30">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <FolderOpen className="w-4 h-4" />
            <span className="text-sm font-medium">Dự án học tập</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Các bài tập
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mỗi bài tập là một hành trình học hỏi. Click vào từng bài để xem chi tiết quá trình thực hiện, 
            phân tích và cam kết liêm chính học thuật của tôi.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 max-w-4xl mx-auto">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
