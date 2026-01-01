import { useState } from "react";
import { ChevronDown, ChevronUp, Target, Workflow, Image, BarChart3, Shield, BookOpen, FileText } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface Project {
  id: number;
  chapter: string;
  title: string;
  summary: string;
  objectives: string[];
  process: {
    steps: string[];
    tools: string[];
  };
  evidence?: string[];
  document?: {
    name: string;
    url: string;
  };
  documents?: {
    name: string;
    url: string;
  }[];
  analysis: {
    strengths: string[];
    improvements: string[];
    ifRedone: string;
    progress: string;
  };
  aiUsage: {
    howUsed: string[];
    commitment: string;
  };
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const sectionIcons = [
    { icon: Target, label: "Mục tiêu", color: "text-primary" },
    { icon: Workflow, label: "Quy trình", color: "text-chart-1" },
    { icon: Image, label: "Minh chứng", color: "text-chart-2" },
    { icon: BarChart3, label: "Phân tích", color: "text-chart-3" },
    { icon: Shield, label: "Liêm chính", color: "text-chart-4" },
  ];

  return (
    <Card
      className={`bg-card border-border shadow-lg hover:shadow-xl transition-all duration-500 animate-fade-in-up overflow-hidden`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <Badge variant="secondary" className="mb-3">
              {project.chapter}
            </Badge>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
              Bài {project.id}: {project.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.summary}
            </p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <BookOpen className="w-6 h-6 text-primary" />
          </div>
        </div>

        {/* Quick Section Icons */}
        <div className="flex flex-wrap gap-2 mt-4">
          {sectionIcons.map(({ icon: Icon, label, color }) => (
            <div
              key={label}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent text-sm"
            >
              <Icon className={`w-3.5 h-3.5 ${color}`} />
              <span className="text-accent-foreground">{label}</span>
            </div>
          ))}
        </div>
      </CardHeader>

      {/* Expandable Content */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          isExpanded ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <CardContent className="pt-0 space-y-8">
          {/* Objectives Section */}
          <div className="p-6 rounded-xl bg-primary/5 border border-primary/10">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-5 h-5 text-primary" />
              <h4 className="font-bold text-foreground">1. Mục tiêu bài tập</h4>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              {project.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Process Section */}
          <div className="p-6 rounded-xl bg-chart-1/5 border border-chart-1/10">
            <div className="flex items-center gap-3 mb-4">
              <Workflow className="w-5 h-5 text-chart-1" />
              <h4 className="font-bold text-foreground">2. Quy trình thực hiện</h4>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-foreground mb-2">Các bước thực hiện:</p>
                <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                  {project.process.steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>
              <div>
                <p className="font-medium text-foreground mb-2">Công cụ sử dụng:</p>
                <div className="flex flex-wrap gap-2">
                  {project.process.tools.map((tool, i) => (
                    <Badge key={i} variant="outline" className="bg-card">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Evidence Section */}
          <div className="p-6 rounded-xl bg-chart-2/5 border border-chart-2/10">
            <div className="flex items-center gap-3 mb-4">
              <Image className="w-5 h-5 text-chart-2" />
              <h4 className="font-bold text-foreground">3. Minh chứng học tập</h4>
            </div>
            
            {/* Images Grid - only show if there are images */}
            {project.evidence && project.evidence.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">
                {project.evidence.map((img, idx) => (
                  <div
                    key={idx}
                    className="aspect-square rounded-lg overflow-hidden border border-border"
                  >
                    <img
                      src={img}
                      alt={`Minh chứng ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Evidence Documents */}
            {project.documents && project.documents.length > 0 && (
              <div className="space-y-3 mb-4">
                <p className="font-medium text-foreground text-sm">📁 Tài liệu minh chứng:</p>
                {project.documents.map((doc, idx) => (
                  <a
                    key={idx}
                    href={doc.url}
                    download={doc.name}
                    className="p-4 rounded-lg bg-accent border border-border flex items-center gap-4 hover:bg-accent/80 transition-colors cursor-pointer group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {doc.name}
                      </p>
                      <p className="text-sm text-muted-foreground">Nhấn để tải xuống và mở bằng Word</p>
                    </div>
                  </a>
                ))}
              </div>
            )}

            {/* Main Document (Product) */}
            {project.document && (
              <div className="space-y-3">
                <p className="font-medium text-foreground text-sm">📄 Sản phẩm:</p>
                <a
                  href={project.document.url}
                  download={project.document.name}
                  className="p-4 rounded-lg bg-chart-2/10 border border-chart-2/20 flex items-center gap-4 hover:bg-chart-2/20 transition-colors cursor-pointer group"
                >
                  <div className="w-12 h-12 rounded-lg bg-chart-2/20 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-chart-2" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground group-hover:text-chart-2 transition-colors">
                      {project.document.name}
                    </p>
                    <p className="text-sm text-muted-foreground">Nhấn để tải xuống và mở bằng Word</p>
                  </div>
                </a>
              </div>
            )}

            {/* Empty state when no documents */}
            {!project.documents?.length && !project.document && !project.evidence?.length && (
              <div className="p-4 rounded-lg bg-accent border-2 border-dashed border-border flex items-center gap-4 hover:border-primary/50 transition-colors cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground">Tệp tài liệu (.docx)</p>
                  <p className="text-sm text-muted-foreground">Tải lên file Word để minh chứng</p>
                </div>
              </div>
            )}
          </div>

          {/* Analysis Section */}
          <div className="p-6 rounded-xl bg-chart-3/5 border border-chart-3/10">
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="w-5 h-5 text-chart-3" />
              <h4 className="font-bold text-foreground">4. Phân tích – Đánh giá</h4>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-foreground mb-2">✅ Điểm làm tốt:</p>
                <ul className="space-y-1 text-muted-foreground">
                  {project.analysis.strengths.map((s, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-chart-3">•</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-medium text-foreground mb-2">⚠️ Cần cải thiện:</p>
                <ul className="space-y-1 text-muted-foreground">
                  {project.analysis.improvements.map((s, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-destructive">•</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-medium text-foreground mb-2">🔄 Nếu làm lại:</p>
                <p className="text-muted-foreground">{project.analysis.ifRedone}</p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-2">📈 Sự tiến bộ:</p>
                <p className="text-muted-foreground">{project.analysis.progress}</p>
              </div>
            </div>
          </div>

          {/* AI Usage & Academic Integrity */}
          <div className="p-6 rounded-xl bg-chart-4/5 border border-chart-4/10">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-5 h-5 text-chart-4" />
              <h4 className="font-bold text-foreground">5. Liêm chính học thuật & Sử dụng AI</h4>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-foreground mb-2">🤖 Cách sử dụng AI:</p>
                <ul className="space-y-1 text-muted-foreground">
                  {project.aiUsage.howUsed.map((s, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-chart-4">•</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <p className="font-medium text-foreground mb-2">📜 Cam kết liêm chính:</p>
                <p className="text-muted-foreground italic">{project.aiUsage.commitment}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </div>

      {/* Expand/Collapse Button */}
      <div className="px-6 pb-6">
        <Button
          variant="outline"
          className="w-full group"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <>
              Thu gọn
              <ChevronUp className="w-4 h-4 ml-2 group-hover:-translate-y-0.5 transition-transform" />
            </>
          ) : (
            <>
              Xem chi tiết
              <ChevronDown className="w-4 h-4 ml-2 group-hover:translate-y-0.5 transition-transform" />
            </>
          )}
        </Button>
      </div>
    </Card>
  );
};

export default ProjectCard;
