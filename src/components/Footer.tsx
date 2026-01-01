import { GraduationCap, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="w-8 h-8" />
            <span className="font-bold text-lg">Digital Portfolio</span>
          </div>

          {/* Course Info */}
          <p className="text-secondary-foreground/80 mb-4">
            Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo
          </p>

          {/* Divider */}
          <div className="w-24 h-px bg-secondary-foreground/20 mb-4" />

          {/* Copyright */}
          <p className="text-sm text-secondary-foreground/60 flex items-center gap-1">
            © {currentYear} • Được tạo với{" "}
            <Heart className="w-4 h-4 text-destructive fill-current" /> bởi Xuân Trường Dev
          </p>

          {/* Academic Integrity Note */}
          <p className="text-xs text-secondary-foreground/50 mt-4 max-w-md">
            Portfolio này tuân thủ các nguyên tắc liêm chính học thuật.
            Mọi nội dung được tạo ra với sự hỗ trợ có trách nhiệm từ AI.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
