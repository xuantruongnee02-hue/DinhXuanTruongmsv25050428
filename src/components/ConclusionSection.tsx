import { Trophy, BookOpen, Mountain, Star, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ConclusionSection = () => {
  return (
    <section id="conclusion" className="py-20 md:py-32 bg-accent/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4 animate-fade-in">
            <Trophy className="w-4 h-4" />
            <span className="text-sm font-medium">Tổng kết</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">
            Kết luận
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
            Tổng kết quá trình học tập và xây dựng Digital Portfolio
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Experience Card */}
          <Card className="bg-card border-border shadow-lg animate-fade-in-up animation-delay-200">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Trải nghiệm xây dựng Portfolio</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Quá trình xây dựng Portfolio giúp tôi nhìn lại toàn bộ hành trình học tập của mình một cách hệ thống, thay vì chỉ hoàn thành từng bài tập rời rạc. Khi tổng hợp và trình bày lại các bài đã làm, tôi nhận ra mỗi bài đều góp phần hình thành kỹ năng số, tư duy học thuật và cách sử dụng AI có trách nhiệm. Việc sắp xếp, viết lại và phân tích các bài tập buộc tôi phải hiểu rõ mình đã học được gì, làm tốt ở đâu và còn thiếu sót điều gì. Nhờ đó, tôi nhìn nhận việc học không chỉ là hoàn thành yêu cầu môn học, mà là một quá trình tích lũy, phản tư và cải thiện liên tục. Tôi tiếp tục nỗ lực và hoàn thành bản thân, thành phiên bản khác hơn.
              </p>
            </CardContent>
          </Card>

          {/* Key Learnings */}
          <Card className="bg-card border-border shadow-lg animate-fade-in-up animation-delay-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-chart-1/10 flex items-center justify-center">
                  <Star className="w-6 h-6 text-chart-1" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Kiến thức và kỹ năng quan trọng nhất</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-accent">
                  <p className="font-medium text-foreground mb-2">Kiến thức</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Hiểu biết về cách viết câu prompt</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Hiểu biết về máy tính các thành phần quan trọng và chủ yếu</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Hiểu biết về liêm chính học thuật trong học tập và cuộc sống</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Hiểu biết những không gian dữ liệu kĩ thuật số</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Biết nhiều công cụ làm việc nhóm hơn, đa luồng hơn</span>
                    </li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg bg-accent">
                  <p className="font-medium text-foreground mb-2">Kỹ năng</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-chart-1 mt-1 flex-shrink-0" />
                      <span>Biết cách sử dụng AI làm việc có chọn lọc đúng cách</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-chart-1 mt-1 flex-shrink-0" />
                      <span>Biết cách sử dụng công cụ làm việc nhóm thành thạo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-chart-1 mt-1 flex-shrink-0" />
                      <span>Kỹ năng giao tiếp trực tuyến</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-chart-1 mt-1 flex-shrink-0" />
                      <span>Biết sử dụng thành thạo công cụ tạo video, hình ảnh và biết cách edit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-chart-1 mt-1 flex-shrink-0" />
                      <span>Biết cách sử dụng phối hợp các loại hình AI</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Challenges */}
          <Card className="bg-card border-border shadow-lg animate-fade-in-up animation-delay-400">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-chart-2/10 flex items-center justify-center">
                  <Mountain className="w-6 h-6 text-chart-2" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Khó khăn và cách vượt qua</h3>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <span className="font-medium text-foreground">Khó khăn gặp phải: </span>
                  [Mô tả những khó khăn bạn gặp trong quá trình học và làm bài. Ví dụ: Quản lý thời gian, 
                  hiểu kiến thức mới, sử dụng công cụ...]
                </p>
                <p>
                  <span className="font-medium text-foreground">Cách vượt qua: </span>
                  [Bạn đã làm gì để vượt qua những khó khăn đó? Bài học rút ra?]
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Pride */}
          <Card className="bg-gradient-to-br from-primary/5 to-chart-1/5 border-primary/20 shadow-lg animate-fade-in-up animation-delay-500">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Điều tôi tự hào nhất</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                [Chia sẻ điều bạn cảm thấy tự hào nhất trong portfolio này. Có thể là một bài tập cụ thể, 
                một kỹ năng đã phát triển, hoặc sự tiến bộ của bản thân qua toàn bộ quá trình học.]
              </p>
            </CardContent>
          </Card>

          {/* Final Commitment */}
          <div className="text-center p-8 rounded-2xl bg-secondary text-secondary-foreground animate-fade-in-up animation-delay-500">
            <h3 className="text-xl font-bold mb-4">Cam kết cuối cùng</h3>
            <p className="leading-relaxed max-w-2xl mx-auto">
              Website này được xây dựng với mục tiêu học tập nghiêm túc. 
              Mọi nội dung do tôi tự viết và tôi chịu trách nhiệm hoàn toàn về tính liêm chính học thuật.
              <br /><br />
              <span className="font-medium">[Họ và tên của bạn]</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConclusionSection;
