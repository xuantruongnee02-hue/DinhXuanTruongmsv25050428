import { User, Target, Lightbulb, Heart, Code, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const AboutSection = () => {
  return <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4 animate-fade-in">
            <User className="w-4 h-4" />
            <span className="text-sm font-medium">Giới thiệu bản thân</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">About me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
            Chào mừng bạn đến với portfolio của tôi – nơi ghi lại hành trình học tập và phát triển trong lĩnh vực công nghệ số
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Profile Card */}
          <Card className="lg:row-span-2 bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-200">
            <CardContent className="p-8">
              {/* Avatar Placeholder */}
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-chart-1 flex items-center justify-center">
                <User className="w-16 h-16 text-primary-foreground" />
              </div>
              
              <div className="text-center mb-6">
                <h3 className="font-bold text-foreground mb-2 text-lg">Họ và Tên: Đinh Xuân Trường</h3>
                <p className="text-primary font-medium">Khoa: Kinh Tế Chính Trị </p>
                <p className="text-muted-foreground text-sm mt-1">​Trường Đại Học Kinh Tế- Đại Học Quốc Gia Hà Nội</p>
              </div>

              <div className="space-y-4 text-foreground">
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Sở thích</p>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>- Tạo sản phẩm riêng mình</p>
                      <p>- Khám phá cách tìm kiếm và chọn lọc thông tin học thuật trên Internet</p>
                      <p>- Xây dựng và cá nhân hóa website/portfolio cá nhân</p>
                      <p>- Ứng dụng công nghệ số để quản lý thời gian và công việc hiệu quả hơn</p>
                      <p>- Viết Dev, Tool</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Code className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Kỹ năng quan tâm</p>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>- Kĩ năng viết code, Tool, Dev</p>
                      <p>- Thực hành với Excel, Word, PPT</p>
                      <p>- Viết câu prompt AI</p>
                      <p>- Kĩ năng lọc và phân tích dữ liệu internet</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Goals Card */}
          <Card className="bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Mục tiêu học tập</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="font-sans">Mục tiêu 1 – Kỹ năng số: Tôi muốn sử dụng kỹ năng số một cách có chiến lược: tìm đúng thông tin, tổ chức dữ liệu khoa học và trình bày sản phẩm rõ ràng.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="font-sans">Mục tiêu 2 – Chủ động công nghệ: Tôi học cách làm chủ công nghệ, lựa chọn công cụ phù hợp cho từng nhiệm vụ thay vì dùng theo thói quen.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="font-sans">Mục tiêu 3 – Ứng dụng AI: Tôi sử dụng AI như trợ lý tư duy để hỗ trợ học tập, đồng thời luôn kiểm soát, kiểm chứng và chịu trách nhiệm với kết quả.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Portfolio Purpose Card */}
          <Card className="bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-400">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-chart-1/10 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-chart-1" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Mục đích Portfolio</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-chart-1 mt-2 flex-shrink-0" />
                  <span>Tổng hợp và lưu trữ toàn bộ quá trình học tập môn học</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-chart-1 mt-2 flex-shrink-0" />
                  <span>Thể hiện sự tiến bộ cá nhân qua từng bài tập</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-chart-1 mt-2 flex-shrink-0" />
                  <span>Minh chứng cho việc học nghiêm túc và có trách nhiệm</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Personal Statement */}
          <Card className="lg:col-span-2 bg-gradient-to-br from-primary/5 to-chart-1/5 border-primary/20 shadow-lg animate-fade-in-up animation-delay-500">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Lời chia sẻ cá nhân</h3>
              </div>
              <blockquote className="text-muted-foreground italic border-l-4 border-primary pl-4">
                <p className="mb-4">
                  ​Tôi chọn học môn Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo vì nhận ra mình đang sử dụng công nghệ mỗi ngày nhưng chưa thực sự hiểu cách khai thác nó hiệu quả. Việc xây dựng Portfolio giúp tôi nhìn lại quá trình học của mình, từ cách tìm kiếm thông tin đến cách sử dụng AI có mục đích và trách nhiệm. Điều khiến tôi hứng thú với công nghệ số và AI không phải là việc chúng làm thay con người, mà là khả năng buộc người dùng phải suy nghĩ rõ ràng hơn, đặt câu hỏi tốt hơn và chịu trách nhiệm với sản phẩm mình tạo ra.
                </p>
                <p>
                  "[Thể hiện sự nghiêm túc và cam kết của bạn trong việc học tập]"
                </p>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default AboutSection;