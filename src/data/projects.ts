import { Project } from "@/components/ProjectCard";

import project1Img1 from "@/assets/evidence/project1-img1.jpg";
import project1Img2 from "@/assets/evidence/project1-img2.jpg";
import project1Img3 from "@/assets/evidence/project1-img3.jpg";
import project1Img4 from "@/assets/evidence/project1-img4.jpg";
import project1Img5 from "@/assets/evidence/project1-img5.jpg";

export const projectsData: Project[] = [
  {
    id: 1,
    chapter: "Chương 1",
    title: "Máy tính và thiết bị ngoại vi",
    summary:
      "Bài tập giúp tôi hình thành thói quen tổ chức và lưu trữ tài liệu học tập một cách khoa học. Thông qua việc sắp xếp thư mục và đặt tên file hợp lý, tôi dễ dàng tìm kiếm và quản lý dữ liệu hơn. Kỹ năng này hỗ trợ tôi học tập hiệu quả và tiết kiệm thời gian.",
    objectives: [
      "Mục tiêu 1: Hiểu được cấu tạo và chức năng của các thành phần máy tính",
      "Mục tiêu 2: Biết cách kết nối và sử dụng thiết bị ngoại vi",
      "Mục tiêu 3: Áp dụng kiến thức để lựa chọn thiết bị phù hợp với nhu cầu",
    ],
    process: {
      steps: [
        "Bước 1: Mở File Explorer - Nhấn tổ hợp phím Windows + E hoặc nhấp vào biểu tượng thư mục màu vàng trên thanh tác vụ.",
        "Bước 2: Truy cập ổ đĩa/thư mục - Ở cột bên trái, nhấp vào This PC, sau đó nhấp đúp vào một ổ đĩa không phải ổ hệ thống (ví dụ: ổ D: hoặc E:). Nếu chỉ có ổ C:, hãy vào thư mục Documents.",
        "Bước 3: Tạo thư mục mới - Nhấp chuột phải vào một khoảng trống -> chọn New -> Folder. Đặt tên thư mục là ThucHanh_hotensinhvien (ví dụ: ThucHanh_NguyenVanA). Nhấn Enter.",
        "Bước 4: Vào thư mục vừa tạo - Nhấp đúp vào thư mục ThucHanh_NguyenVanA.",
        "Bước 5: Tạo tệp tin văn bản - Nhấp chuột phải vào khoảng trống -> New -> Text Document. Đặt tên là GhiChu.txt. Nhấn Enter.",
        "Bước 6: Đổi tên tệp tin - Nhấp chuột phải vào tệp GhiChu.txt -> chọn Rename. Đổi tên thành GhiChuQuanTrong.txt. Nhấn Enter.",
        "Bước 7: Tạo thư mục con - Trong thư mục ThucHanh_NguyenVanA, nhấp chuột phải -> New -> Folder. Đặt tên là TaiLieu.",
        "Bước 8: Sao chép tệp tin (Copy & Paste) - Nhấp chuột phải vào tệp GhiChuQuanTrong.txt -> chọn Copy (hoặc Ctrl + C). Nhấp đúp vào thư mục TaiLieu, nhấp chuột phải vào khoảng trống -> chọn Paste (hoặc Ctrl + V).",
        "Bước 9: Di chuyển tệp tin (Cut & Paste) - Quay lại thư mục ThucHanh_NguyenVanA. Tạo tệp mới tên DiChuyen.txt. Nhấp chuột phải -> Cut (hoặc Ctrl + X). Vào thư mục TaiLieu -> Paste (hoặc Ctrl + V).",
        "Bước 10: Xóa tệp tin - Trong thư mục TaiLieu, nhấp chuột phải vào tệp GhiChuQuanTrong.txt -> chọn Delete. Tệp sẽ được chuyển vào Thùng rác (Recycle Bin).",
        "Bước 11: Xóa vĩnh viễn - Chọn tệp DiChuyen.txt, nhấn giữ phím Shift và nhấn phím Delete. Một cảnh báo sẽ hiện ra. Nếu đồng ý, tệp sẽ bị xóa vĩnh viễn mà không qua Thùng rác.",
        "Bước 12: Khôi phục từ Thùng rác - Tìm biểu tượng Recycle Bin trên màn hình nền, nhấp đúp để mở. Tìm tệp đã xóa, nhấp chuột phải và chọn Restore. Tệp sẽ quay trở lại vị trí ban đầu.",
      ],
      tools: [],
    },
    evidence: [project1Img1, project1Img2, project1Img3, project1Img4, project1Img5],
    document: {
      name: "Bìa_1_chấm_chéo.docx",
      url: "/documents/project1-doc.docx",
    },
    analysis: {
      strengths: [
        "[Điểm mạnh 1: Ví dụ - Hiểu rõ các thành phần cơ bản]",
        "[Điểm mạnh 2: Ví dụ - Trình bày logic, dễ hiểu]",
      ],
      improvements: [
        "[Cần cải thiện 1: Ví dụ - Cần đi sâu hơn vào chi tiết kỹ thuật]",
        "[Cần cải thiện 2: Ví dụ - Bổ sung thêm hình ảnh minh họa]",
      ],
      ifRedone:
        "[Nếu làm lại, tôi sẽ: Ví dụ - Dành thêm thời gian nghiên cứu và thực hành thực tế]",
      progress:
        "[Sự tiến bộ: Ví dụ - Trước khi học, tôi chưa hiểu rõ về RAM, CPU. Sau bài này, tôi đã có thể giải thích cho người khác]",
    },
    aiUsage: {
      howUsed: [
        "[Cách dùng AI 1: Ví dụ - Sử dụng ChatGPT để giải thích thuật ngữ kỹ thuật]",
        "[Cách dùng AI 2: Ví dụ - Tham khảo ý tưởng trình bày]",
        "[Cách dùng AI 3: Ví dụ - Chỉnh sửa ngữ pháp câu văn]",
      ],
      commitment:
        "Tôi cam kết không sao chép nguyên văn từ AI. Mọi nội dung đều được tôi đọc, hiểu, chọn lọc và viết lại bằng ngôn ngữ của mình. Tôi chịu trách nhiệm hoàn toàn về tính liêm chính học thuật của bài làm này.",
    },
  },
  {
    id: 2,
    chapter: "Chương 2",
    title: "Khai thác dữ liệu và thông tin",
    summary:
      "[Tóm tắt 3-4 dòng: Bài tập giúp phát triển kỹ năng tìm kiếm, đánh giá và sử dụng thông tin từ nhiều nguồn khác nhau. Học cách phân biệt thông tin đáng tin cậy và ứng dụng trong học tập.]",
    objectives: [
      "[Mục tiêu 1: Biết cách tìm kiếm thông tin hiệu quả]",
      "[Mục tiêu 2: Đánh giá độ tin cậy của nguồn thông tin]",
      "[Mục tiêu 3: Tổng hợp và trích dẫn thông tin đúng cách]",
    ],
    process: {
      steps: [
        "[Bước 1: Xác định chủ đề và từ khóa tìm kiếm]",
        "[Bước 2: Sử dụng các công cụ tìm kiếm]",
        "[Bước 3: Đánh giá và chọn lọc nguồn tin]",
        "[Bước 4: Tổng hợp và hoàn thành bài]",
      ],
      tools: ["Google Scholar", "Wikipedia", "Zotero", "[Thêm công cụ khác]"],
    },
    analysis: {
      strengths: [
        "[Điểm mạnh 1]",
        "[Điểm mạnh 2]",
      ],
      improvements: [
        "[Cần cải thiện 1]",
        "[Cần cải thiện 2]",
      ],
      ifRedone: "[Nếu làm lại, tôi sẽ...]",
      progress: "[Sự tiến bộ của tôi...]",
    },
    aiUsage: {
      howUsed: [
        "[Cách dùng AI 1]",
        "[Cách dùng AI 2]",
      ],
      commitment:
        "Tôi cam kết không sao chép nguyên văn từ AI. Mọi nội dung đều được tôi đọc, hiểu, chọn lọc và viết lại bằng ngôn ngữ của mình.",
    },
  },
  {
    id: 3,
    chapter: "Chương 3",
    title: "Tổng quan về trí tuệ nhân tạo",
    summary:
      "[Tóm tắt 3-4 dòng: Tìm hiểu về khái niệm AI, các ứng dụng phổ biến và tác động của AI đến cuộc sống. Phát triển nhận thức về cách sử dụng AI có trách nhiệm.]",
    objectives: [
      "[Mục tiêu 1: Hiểu khái niệm cơ bản về AI]",
      "[Mục tiêu 2: Nhận biết các ứng dụng AI trong đời sống]",
      "[Mục tiêu 3: Phát triển tư duy phản biện về AI]",
    ],
    process: {
      steps: [
        "[Bước 1: Nghiên cứu về lịch sử và phát triển AI]",
        "[Bước 2: Tìm hiểu các ứng dụng thực tế]",
        "[Bước 3: Phân tích ưu nhược điểm]",
        "[Bước 4: Viết báo cáo tổng hợp]",
      ],
      tools: ["ChatGPT", "Gemini", "YouTube", "[Thêm công cụ khác]"],
    },
    analysis: {
      strengths: [
        "[Điểm mạnh 1]",
        "[Điểm mạnh 2]",
      ],
      improvements: [
        "[Cần cải thiện 1]",
        "[Cần cải thiện 2]",
      ],
      ifRedone: "[Nếu làm lại, tôi sẽ...]",
      progress: "[Sự tiến bộ của tôi...]",
    },
    aiUsage: {
      howUsed: [
        "[Cách dùng AI 1]",
        "[Cách dùng AI 2]",
      ],
      commitment:
        "Tôi cam kết không sao chép nguyên văn từ AI. Mọi nội dung đều được tôi đọc, hiểu, chọn lọc và viết lại bằng ngôn ngữ của mình.",
    },
  },
  {
    id: 4,
    chapter: "Chương 4",
    title: "Giao tiếp và hợp tác trong môi trường số",
    summary:
      "[Tóm tắt 3-4 dòng: Phát triển kỹ năng làm việc nhóm trực tuyến, sử dụng các công cụ cộng tác số và giao tiếp chuyên nghiệp trong môi trường học thuật.]",
    objectives: [
      "[Mục tiêu 1: Sử dụng thành thạo các công cụ cộng tác]",
      "[Mục tiêu 2: Phát triển kỹ năng giao tiếp trực tuyến]",
      "[Mục tiêu 3: Làm việc nhóm hiệu quả trong môi trường số]",
    ],
    process: {
      steps: [
        "[Bước 1: Thiết lập nhóm làm việc online]",
        "[Bước 2: Phân công và theo dõi tiến độ]",
        "[Bước 3: Họp nhóm và trao đổi ý kiến]",
        "[Bước 4: Hoàn thành sản phẩm nhóm]",
      ],
      tools: ["Google Drive", "Trello", "Zoom", "Notion", "[Thêm công cụ khác]"],
    },
    analysis: {
      strengths: [
        "[Điểm mạnh 1]",
        "[Điểm mạnh 2]",
      ],
      improvements: [
        "[Cần cải thiện 1]",
        "[Cần cải thiện 2]",
      ],
      ifRedone: "[Nếu làm lại, tôi sẽ...]",
      progress: "[Sự tiến bộ của tôi...]",
    },
    aiUsage: {
      howUsed: [
        "[Cách dùng AI 1]",
        "[Cách dùng AI 2]",
      ],
      commitment:
        "Tôi cam kết không sao chép nguyên văn từ AI. Mọi nội dung đều được tôi đọc, hiểu, chọn lọc và viết lại bằng ngôn ngữ của mình.",
    },
  },
  {
    id: 5,
    chapter: "Chương 5",
    title: "Sáng tạo nội dung số",
    summary:
      "[Tóm tắt 3-4 dòng: Thực hành tạo các sản phẩm số sáng tạo như infographic, video, poster. Áp dụng nguyên tắc thiết kế và kể chuyện bằng hình ảnh.]",
    objectives: [
      "[Mục tiêu 1: Sử dụng công cụ thiết kế số]",
      "[Mục tiêu 2: Áp dụng nguyên tắc thiết kế cơ bản]",
      "[Mục tiêu 3: Tạo nội dung số sáng tạo và ý nghĩa]",
    ],
    process: {
      steps: [
        "[Bước 1: Lên ý tưởng và phác thảo]",
        "[Bước 2: Chọn công cụ phù hợp]",
        "[Bước 3: Thiết kế và chỉnh sửa]",
        "[Bước 4: Hoàn thiện và xuất bản]",
      ],
      tools: ["Canva", "CapCut", "Figma", "Adobe Express", "[Thêm công cụ khác]"],
    },
    analysis: {
      strengths: [
        "[Điểm mạnh 1]",
        "[Điểm mạnh 2]",
      ],
      improvements: [
        "[Cần cải thiện 1]",
        "[Cần cải thiện 2]",
      ],
      ifRedone: "[Nếu làm lại, tôi sẽ...]",
      progress: "[Sự tiến bộ của tôi...]",
    },
    aiUsage: {
      howUsed: [
        "[Cách dùng AI 1]",
        "[Cách dùng AI 2]",
      ],
      commitment:
        "Tôi cam kết không sao chép nguyên văn từ AI. Mọi nội dung đều được tôi đọc, hiểu, chọn lọc và viết lại bằng ngôn ngữ của mình.",
    },
  },
  {
    id: 6,
    chapter: "Chương 6",
    title: "An toàn và liêm chính học thuật",
    summary:
      "[Tóm tắt 3-4 dòng: Tìm hiểu về an toàn thông tin, bảo mật dữ liệu cá nhân và các nguyên tắc liêm chính học thuật. Phát triển ý thức về trách nhiệm trong môi trường số.]",
    objectives: [
      "[Mục tiêu 1: Hiểu về an toàn thông tin cá nhân]",
      "[Mục tiêu 2: Nhận biết và phòng tránh rủi ro mạng]",
      "[Mục tiêu 3: Tuân thủ liêm chính học thuật]",
    ],
    process: {
      steps: [
        "[Bước 1: Nghiên cứu về an toàn mạng]",
        "[Bước 2: Tìm hiểu các hình thức vi phạm liêm chính]",
        "[Bước 3: Thực hành bảo vệ thông tin]",
        "[Bước 4: Cam kết và áp dụng vào học tập]",
      ],
      tools: ["Password Manager", "2FA Apps", "Turnitin", "[Thêm công cụ khác]"],
    },
    analysis: {
      strengths: [
        "[Điểm mạnh 1]",
        "[Điểm mạnh 2]",
      ],
      improvements: [
        "[Cần cải thiện 1]",
        "[Cần cải thiện 2]",
      ],
      ifRedone: "[Nếu làm lại, tôi sẽ...]",
      progress: "[Sự tiến bộ của tôi...]",
    },
    aiUsage: {
      howUsed: [
        "[Cách dùng AI 1]",
        "[Cách dùng AI 2]",
      ],
      commitment:
        "Tôi cam kết không sao chép nguyên văn từ AI. Mọi nội dung đều được tôi đọc, hiểu, chọn lọc và viết lại bằng ngôn ngữ của mình.",
    },
  },
];
