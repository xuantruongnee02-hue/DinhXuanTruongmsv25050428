import { FolderOpen } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/data/projects";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-accent/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4 animate-fade-in">
            <FolderOpen className="w-4 h-4" />
            <span className="text-sm font-medium">Dự án học tập</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">
            Các bài tập
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
            Mỗi bài tập là một hành trình học hỏi. Click vào từng bài để xem chi tiết quá trình thực hiện, 
            phân tích và cam kết liêm chính học thuật của tôi.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 max-w-4xl mx-auto">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
