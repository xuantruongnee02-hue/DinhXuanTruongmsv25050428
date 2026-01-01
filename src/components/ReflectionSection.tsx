import { Brain, TrendingUp, Sparkles, Shield, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const reflectionItems = [{
  icon: TrendingUp,
  title: "Thay đổi lớn nhất trong cách học",
  content: "Tiếp cận bài tập và nội dung số dễ dàng hơn. Sử dụng nhiều công cụ làm việc nhóm, phát triển khả năng tư duy phản biện và giao tiếp. Biết cách tổ chức, thu thập dữ liệu từ AI, viết prompt chỉn chu và sáng tạo hơn. Quản lý thời gian, dữ liệu logic và sáng tạo. Ý thức hơn về liêm chính học thuật và sử dụng AI hợp lý, hiệu quả.",
  color: "primary"
}, {
  icon: Sparkles,
  title: "Kỹ năng số tiến bộ rõ nhất",
  content: "[Mô tả kỹ năng số nào bạn đã tiến bộ nhiều nhất. Ví dụ: Sử dụng AI, thiết kế nội dung, tìm kiếm thông tin, làm việc nhóm online...]",
  color: "chart-1"
}, {
  icon: Brain,
  title: "Bài học từ việc sử dụng AI",
  content: "Qua quá trình sử dụng AI trong học tập và sáng tạo nội dung, tôi nhận ra rằng AI chỉ thực sự hiệu quả khi được sử dụng có mục đích và kiểm soát. AI giúp tôi tiết kiệm thời gian, mở rộng ý tưởng và cải thiện chất lượng sản phẩm, nhưng không thể thay thế tư duy, khả năng chọn lọc và trách nhiệm của người học. Bài học quan trọng nhất tôi rút ra là cần xem AI như một trợ lý hỗ trợ quá trình học tập, luôn kiểm tra lại thông tin, viết lại bằng lời của mình và chịu trách nhiệm với kết quả cuối cùng.",
  color: "chart-2"
}, {
  icon: Shield,
  title: "Nhận thức về liêm chính học thuật",
  content: "[Viết về sự thay đổi trong nhận thức của bạn về liêm chính học thuật. Bạn hiểu thế nào về việc sử dụng AI có trách nhiệm? Ranh giới giữa tham khảo và sao chép?]",
  color: "chart-3"
}];
const ReflectionSection = () => {
  return <section id="reflection" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4 animate-fade-in">
            <Brain className="w-4 h-4" />
            <span className="font-medium text-xl font-serif"> Tư duy  tổng hợp</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">
            Nhìn lại hành trình
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
            Đây là những suy nghĩ và bài học tôi rút ra sau quá trình học tập và thực hiện các dự án
          </p>
        </div>

        {/* Reflection Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {reflectionItems.map((item, index) => {
          const Icon = item.icon;
          return <Card key={index} className="bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-${item.color}/10 flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 text-${item.color}`} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.content}
                  </p>
                </CardContent>
              </Card>;
        })}
        </div>

        {/* Quote Card */}
        <Card className="max-w-3xl mx-auto bg-gradient-to-br from-primary/5 to-chart-1/5 border-primary/20 animate-fade-in-up animation-delay-400">
          <CardContent className="p-8 text-center">
            <Quote className="w-12 h-12 text-primary/30 mx-auto mb-4" />
            <blockquote className="text-xl md:text-2xl font-medium text-foreground mb-4 italic">
              "[Viết một câu quote hoặc suy nghĩ tâm đắc nhất của bạn sau quá trình học môn này]"
            </blockquote>
            <p className="text-muted-foreground">— [Tên của bạn]</p>
          </CardContent>
        </Card>
      </div>
    </section>;
};
export default ReflectionSection;