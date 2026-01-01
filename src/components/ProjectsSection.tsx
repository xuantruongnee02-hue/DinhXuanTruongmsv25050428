import { FolderOpen } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/data/projects";
import { useScrollAnimation, AnimationType } from "@/hooks/use-scroll-animation";

const ProjectsSection = () => {
  const { ref, isVisible, getAnimationClasses } = useScrollAnimation(0.1, 'fade-up');

  const getProjectAnimation = (index: number): AnimationType => {
    const animations: AnimationType[] = ['fade-left', 'fade-right', 'zoom-in', 'blur', 'fade-up', 'fade-down'];
    return animations[index % animations.length];
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-accent/30">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <div 
          className={`text-center mb-16 ${getAnimationClasses(isVisible, 'zoom-in', 0).className}`}
          style={getAnimationClasses(isVisible, 'zoom-in', 0).style}
        >
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
              className={`hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ${getAnimationClasses(isVisible, getProjectAnimation(index), (index + 1) * 150).className}`}
              style={getAnimationClasses(isVisible, getProjectAnimation(index), (index + 1) * 150).style}
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
