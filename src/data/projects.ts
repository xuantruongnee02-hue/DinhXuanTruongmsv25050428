import { Project } from "@/components/ProjectCard";

import project1Img1 from "@/assets/evidence/project1-img1.jpg";
import project1Img2 from "@/assets/evidence/project1-img2.jpg";
import project1Img3 from "@/assets/evidence/project1-img3.jpg";
import project1Img4 from "@/assets/evidence/project1-img4.jpg";
import project1Img5 from "@/assets/evidence/project1-img5.jpg";

import project2Img1 from "@/assets/evidence/project2-img1.png";
import project2Img2 from "@/assets/evidence/project2-img2.png";
import project2Img3 from "@/assets/evidence/project2-img3.png";
import project2Img4 from "@/assets/evidence/project2-img4.png";
import project2Img5 from "@/assets/evidence/project2-img5.png";

import project4Img1 from "@/assets/evidence/project4-img1.png";
import project4Img2 from "@/assets/evidence/project4-img2.png";
import project4Img3 from "@/assets/evidence/project4-img3.png";
import project4Img4 from "@/assets/evidence/project4-img4.png";
import project4Img5 from "@/assets/evidence/project4-img5.png";
import project4Img6 from "@/assets/evidence/project4-img6.png";
import project4Img7 from "@/assets/evidence/project4-img7.jpg";
import project4Img8 from "@/assets/evidence/project4-img8.png";

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
        "Hiểu rõ các bước và cách làm",
        "Trình bày logic, dễ hiểu",
        "Làm bài ổn định và sản phẩm chính mình",
      ],
      improvements: [
        "Tìm hiểu sâu và nghiên cứu kĩ",
        "Cần bổ sung nhiều hình ảnh minh họa hơn nữa",
      ],
      ifRedone:
        "Sẽ dành nhiều thời gian ra tìm hiểu và cẩn thận hơn, nghiên cứu và thực hành nhiều",
      progress:
        "Tôi biết cách tổ chức dữ liệu logic, dễ tìm, không mò như trước kia, đó là điều cần cải thiện từ bản thân",
    },
    aiUsage: {
      howUsed: [
        "Bài này tôi tự làm và nghiên cứu, không sử dụng AI",
      ],
      commitment:
        "Tôi cam kết bài làm này hoàn toàn do tôi tự thực hiện thông qua việc nghiên cứu và thực hành. Tôi chịu trách nhiệm hoàn toàn về tính liêm chính học thuật của bài làm này.",
    },
  },
  {
    id: 2,
    chapter: "Chương 2",
    title: "Khai thác dữ liệu và thông tin",
    summary:
      "Bài tập giúp tôi rèn luyện kỹ năng tìm kiếm, chọn lọc và khai thác thông tin từ các nguồn trực tuyến. Tôi thực hành so sánh dữ liệu từ các công cụ tìm kiếm khác nhau để đánh giá độ tin cậy và giá trị sử dụng của thông tin. Qua đó, tôi hình thành thói quen tiếp cận dữ liệu một cách có hệ thống và có trách nhiệm trong học tập.",
    objectives: [
      "Mục tiêu 1: Biết cách tìm kiếm thông tin hiệu quả",
      "Mục tiêu 2: Đánh giá độ tin cậy của nguồn thông tin",
      "Mục tiêu 3: Tổng hợp và trích dẫn thông tin đúng cách",
    ],
    process: {
      steps: [
        "Bước 1: Xác định mục tiêu và chủ đề nghiên cứu - Trước tiên, tôi xác định mục tiêu của bài tập là phân tích tác động của trí tuệ nhân tạo (AI) đối với giáo dục đại học. Chủ đề này được lựa chọn vì phù hợp với ngành học và có nhiều góc nhìn học thuật cần được đánh giá cẩn trọng.",
        "Bước 2: Xác định phạm vi và nguồn tìm kiếm - Tôi giới hạn phạm vi tìm kiếm vào các nguồn học thuật và uy tín, bao gồm cơ sở dữ liệu học thuật (Google Scholar, Microsoft Academic), tạp chí khoa học chuyên ngành, sách chuyên khảo từ các nhà xuất bản lớn và một số nguồn mở đáng tin cậy.",
        "Bước 3: Xây dựng bộ từ khóa tìm kiếm - Dựa trên chủ đề nghiên cứu, tôi xây dựng bộ từ khóa bằng tiếng Anh để tăng độ chính xác và phạm vi tìm kiếm, như: AI in higher education, Artificial Intelligence and pedagogy, AI adoption in universities, EdTech and AI.",
        "Bước 4: Thu thập và chọn lọc tài liệu - Từ quá trình tìm kiếm, tôi thu thập tổng cộng 12 tài liệu, bao gồm bài báo khoa học, sách chuyên khảo và nguồn mở. Tôi loại bỏ các tài liệu không rõ tác giả, lỗi thời hoặc mang tính ý kiến cá nhân thuần túy.",
        "Bước 5: Đánh giá độ tin cậy của nguồn thông tin - Mỗi tài liệu được đánh giá dựa trên bốn tiêu chí: tác giả và cơ quan xuất bản, phương pháp nghiên cứu, mức độ trích dẫn và tính cập nhật. Kết quả đánh giá được tổng hợp thành bảng để dễ so sánh và phân tích.",
        "Bước 6: Tổng hợp, phân tích và viết báo cáo - Cuối cùng, tôi tổng hợp các kết quả tìm kiếm, phân tích điểm mạnh – hạn chế của từng nguồn và rút ra nhận định chung về vai trò của AI trong giáo dục đại học. Báo cáo được trình bày theo cấu trúc học thuật rõ ràng và có danh mục tài liệu tham khảo theo chuẩn Harvard.",
      ],
      tools: ["Google Scholar", "Microsoft Academic", "Tạp chí khoa học chuyên ngành", "Sách chuyên khảo"],
    },
    evidence: [project2Img1, project2Img2, project2Img3, project2Img4, project2Img5],
    document: {
      name: "Báo cáo tìm kiếm và đánh giá thông tin học thuật.docx",
      url: "/documents/project2-doc.docx",
    },
    analysis: {
      strengths: [
        "Xác định rõ chủ đề và mục tiêu tìm kiếm thông tin học thuật",
        "Sử dụng đa dạng nguồn đáng tin cậy (Google Scholar, Microsoft Academic, tạp chí khoa học, sách chuyên khảo)",
        "Áp dụng các tiêu chí đánh giá nguồn rõ ràng: tác giả, cơ quan xuất bản, phương pháp nghiên cứu, trích dẫn và tính cập nhật",
        "Trình bày kết quả tìm kiếm có hệ thống và logic",
      ],
      improvements: [
        "Phân tích nội dung các tài liệu còn thiên về mô tả, chưa so sánh sâu giữa các quan điểm nghiên cứu",
        "Chưa làm rõ mối liên hệ giữa các nguồn để hình thành lập luận tổng hợp",
        "Cần rút gọn một số phần để nội dung súc tích hơn",
      ],
      ifRedone: "Sẽ cẩn thận và dành nhiều thời gian cải thiện và phát huy hơn nữa",
      progress: "Chuyển từ tìm kiếm thông tin cảm tính sang tiếp cận nguồn học thuật có chọn lọc. Biết đánh giá độ tin cậy của thông tin trước khi sử dụng. Hình thành tư duy nghiên cứu học thuật và ý thức liêm chính trong khai thác dữ liệu.",
    },
    aiUsage: {
      howUsed: [
        "Không sử dụng AI",
        "Tự tra cứu và chụp hình lấy minh họa",
        "Dữ liệu tự tìm và cung cấp",
      ],
      commitment:
        "Tôi cam kết bài làm này hoàn toàn do tôi tự thực hiện thông qua việc nghiên cứu và thực hành. Tôi chịu trách nhiệm hoàn toàn về tính liêm chính học thuật của bài làm này.",
    },
  },
  {
    id: 3,
    chapter: "Chương 3",
    title: "Tổng quan về trí tuệ nhân tạo",
    summary:
      "Bài tập giúp tôi hiểu các khái niệm cơ bản về trí tuệ nhân tạo, cách AI hoạt động và những lĩnh vực ứng dụng phổ biến trong đời sống. Thông qua việc tìm hiểu và tổng hợp thông tin từ nhiều nguồn, tôi nhận thức rõ hơn về tiềm năng cũng như những thách thức khi sử dụng AI. Qua đó, tôi hình thành cái nhìn tổng quan và có định hướng đúng đắn trong việc tiếp cận công nghệ AI.",
    objectives: [
      "Mục tiêu 1: Biết viết câu prompt AI hiệu quả, không lan man, mơ hồ",
      "Mục tiêu 2: Nhận biết các ứng dụng AI trong đời sống",
      "Mục tiêu 3: Phát triển tư duy phản biện về AI",
    ],
    process: {
      steps: [
        "Bước 1: Phân tích tác vụ học tập - Trước tiên, tôi xác định các loại tác vụ học tập cần AI hỗ trợ, bao gồm: tóm tắt tài liệu học thuật, giải thích khái niệm phức tạp và tạo câu hỏi ôn tập. Với mỗi tác vụ, tôi làm rõ mục tiêu, thách thức và yêu cầu đầu ra để làm cơ sở xây dựng prompt phù hợp.",
        "Bước 2: Xây dựng prompt cơ bản - Tôi bắt đầu với các prompt ngắn và đơn giản để quan sát phản hồi ban đầu của AI. Các prompt này thường chưa xác định rõ đối tượng, độ dài hay cấu trúc đầu ra, nhằm làm mốc so sánh cho các phiên bản sau.",
        "Bước 3: Cải tiến prompt theo mục tiêu học tập - Dựa trên kết quả ban đầu, tôi điều chỉnh prompt bằng cách bổ sung thông tin về độ dài, đối tượng người học và yêu cầu nội dung. Điều này giúp AI tạo ra câu trả lời rõ ràng hơn và phù hợp hơn với mục tiêu học tập.",
        "Bước 4: Xây dựng prompt nâng cao - Ở bước này, tôi áp dụng các kỹ thuật viết prompt nâng cao như xác định vai trò cho AI (role prompting), chia yêu cầu theo từng bước và chỉ rõ cấu trúc đầu ra. Nhờ đó, kết quả AI trả về có tính hệ thống, dễ hiểu và sát với nhu cầu người học.",
        "Bước 5: Thử nghiệm và so sánh kết quả - Tôi lần lượt thử nghiệm prompt cơ bản, cải tiến và nâng cao cho từng tác vụ. Sau đó, tôi so sánh kết quả dựa trên mức độ đầy đủ nội dung, tính rõ ràng, cấu trúc và mức độ phù hợp với đối tượng học tập.",
        "Bước 6: Phân tích hiệu quả và rút ra nguyên tắc - Cuối cùng, tôi phân tích vì sao prompt nâng cao cho kết quả tốt hơn, rút ra các nguyên tắc viết prompt hiệu quả như xác định rõ mục tiêu, sử dụng vai trò, chia nhỏ yêu cầu và kiểm tra lại kết quả để điều chỉnh.",
      ],
      tools: ["ChatGPT", "Gemini"],
    },
    documents: [
      { name: "Bài 3 - Giải thích khái niệm.docx", url: "/documents/project3-doc1.docx" },
      { name: "Bài 3 - Tóm tắt tài liệu.docx", url: "/documents/project3-doc2.docx" },
      { name: "Bài 3 - Tạo câu hỏi ôn tập.docx", url: "/documents/project3-doc3.docx" },
    ],
    document: {
      name: "Bài 3 - Chấm chéo.docx",
      url: "/documents/project3-doc4.docx",
    },
    analysis: {
      strengths: [
        "Xác định rõ 3 loại tác vụ học tập: tóm tắt tài liệu, giải thích khái niệm, tạo câu hỏi ôn tập",
        "Xây dựng 3 cấp độ prompt (cơ bản – cải tiến – nâng cao) cho từng tác vụ, thể hiện quá trình thử nghiệm rõ ràng",
        "Prompt nâng cao có sử dụng vai trò (role prompting) và cấu trúc đầu ra cụ thể, giúp AI trả lời đúng mục tiêu",
        "Có bảng so sánh kết quả và nhận xét, cho thấy sự khác biệt rõ ràng giữa các phiên bản prompt",
        "Phân tích đúng các kỹ thuật viết prompt hiệu quả như role prompting, chia bước, định hướng đối tượng người học",
      ],
      improvements: [
        "Phần phân tích kết quả vẫn còn ngắn, chưa đi sâu giải thích vì sao prompt nâng cao hiệu quả hơn trong từng trường hợp cụ thể",
        "Chưa minh họa thêm bằng trích đoạn câu trả lời AI để tăng tính trực quan",
        "Có thể mở rộng thêm một tác vụ thực tế khác (ví dụ: viết kế hoạch học tập, tạo đề cương bài học)",
      ],
      ifRedone: "Tôi dành nhiều thời gian và công sức làm thêm, nghiên cứu thêm về cách viết prompt chi tiết cụ thể hơn",
      progress: "Nhận thức rõ rằng chất lượng kết quả AI phụ thuộc trực tiếp vào cách đặt prompt. Biết cách chuyển từ prompt mơ hồ sang prompt có mục tiêu, cấu trúc và đối tượng rõ ràng. Hình thành kỹ năng sử dụng AI có kiểm soát, có chiến lược, không dùng AI một cách cảm tính như trước.",
    },
    aiUsage: {
      howUsed: [
        "Dùng AI để kiểm chứng kết quả viết prompt sau khi cải thiện, tôi đã chọn lọc và phân tích",
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
      "Bài tập tập trung vào việc sử dụng các công cụ hợp tác trực tuyến trong quá trình thực hiện dự án nhóm với chủ đề \"Ứng dụng của trí tuệ nhân tạo trong giáo dục đại học\". Trong bối cảnh dự án được triển khai hoàn toàn trên môi trường số, nhóm đã ứng dụng các công cụ như Trello, Google Docs/Slides/Drive và Discord để quản lý nhiệm vụ, cộng tác nội dung và giao tiếp hiệu quả. Thông qua bài tập này, tôi không chỉ rèn luyện kỹ năng làm việc nhóm trong môi trường trực tuyến mà còn hiểu rõ hơn vai trò của công cụ số trong việc tổ chức công việc, đảm bảo tiến độ và nâng cao chất lượng sản phẩm chung.",
    objectives: [
      "Mục tiêu 1: Sử dụng thành thạo các công cụ cộng tác",
      "Mục tiêu 2: Phát triển kỹ năng giao tiếp trực tuyến",
      "Mục tiêu 3: Làm việc nhóm hiệu quả trong môi trường số",
      "Mục tiêu 4: Thành thạo các công cụ hợp tác trực tuyến để quản lý dự án nhóm hiệu quả",
      "Mục tiêu 5: Thành thạo việc giao tiếp trực tuyến",
    ],
    process: {
      steps: [
        "Bước 1: Khởi động và thống nhất dự án - Họp nhóm trực tuyến qua Discord để chọn chủ đề \"Ứng dụng AI trong giáo dục đại học\". Thống nhất mục tiêu dự án, sản phẩm đầu ra (báo cáo + slide thuyết trình) và thời gian thực hiện.",
        "Bước 2: Thiết lập công cụ làm việc nhóm - Tạo bảng Trello để quản lý nhiệm vụ. Tạo thư mục chung trên Google Drive và phân quyền chỉnh sửa cho các thành viên. Tạo server Discord riêng cho nhóm để giao tiếp và họp nhóm.",
        "Bước 3: Phân công nhiệm vụ và lập kế hoạch - Chia nhiệm vụ cho từng thành viên trên Trello theo các cột: To Do – In Progress – Review – Done. Gắn deadline, checklist và người phụ trách cho từng nhiệm vụ. Quy định cách cập nhật tiến độ hàng ngày.",
        "Bước 4: Thu thập tài liệu và viết nội dung - Các thành viên thu thập tài liệu theo phần được phân công. Soạn thảo nội dung trực tiếp trên Google Docs để mọi người có thể chỉnh sửa đồng thời. Cập nhật trạng thái công việc thường xuyên trên Trello.",
        "Bước 5: Chỉnh sửa và hoàn thiện nội dung - Họp nhóm qua Discord để rà soát nội dung và thống nhất bố cục báo cáo. Sử dụng chế độ Suggestion trên Google Docs để tránh xung đột chỉnh sửa. Bổ sung hình ảnh, ví dụ và chỉnh sửa các phần trùng lặp.",
        "Bước 6: Thiết kế slide và chuẩn bị thuyết trình - Thiết kế slide trên Google Slides theo nội dung đã hoàn thiện. Phân chia nội dung thuyết trình cho từng thành viên. Tập dượt thuyết trình qua voice chat trên Discord.",
        "Bước 7: Kiểm tra cuối và nộp bài - Kiểm tra lại toàn bộ file trong Google Drive (báo cáo, slide). Đảm bảo định dạng thống nhất và đầy đủ nội dung. Xuất file và nộp bài đúng thời hạn theo yêu cầu giảng viên.",
      ],
      tools: ["Discord", "Trello", "Google Drive", "Google Docs", "Google Slides"],
    },
    evidence: [project4Img1, project4Img2, project4Img3, project4Img4, project4Img5, project4Img6, project4Img7, project4Img8],
    document: {
      name: "Bài 4 - Chấm chéo.docx",
      url: "/documents/project4-doc.docx",
    },
    analysis: {
      strengths: [
        "Xác định rõ chủ đề và mục tiêu tìm kiếm thông tin học thuật",
        "Sử dụng đa dạng nguồn đáng tin cậy (Google Scholar, Microsoft Academic, tạp chí khoa học, sách chuyên khảo)",
        "Áp dụng tiêu chí đánh giá nguồn rõ ràng và có bảng tổng hợp so sánh",
        "Sử dụng đa luồng làm không gian làm việc nhóm, tổ chức và thực hiện đầy đủ",
      ],
      improvements: [
        "Phân tích nội dung tài liệu còn thiên về mô tả, chưa so sánh sâu giữa các nghiên cứu",
        "Một số nguồn mở chưa được làm rõ giới hạn sử dụng trong học thuật",
        "Hơi ít ảnh minh chứng, còn ngại và ít nói chuyện trong quá trình thực hiện giao tiếp",
      ],
      ifRedone: "Tôi sẽ cải thiện bản thân và tham gia hoạt động hoạt bát hơn, tìm nhiều không gian làm việc dễ dàng cụ thể hơn cho làm việc nhóm",
      progress: "Chuyển từ tìm kiếm thông tin cảm tính sang tìm kiếm học thuật có chiến lược. Biết đánh giá độ tin cậy của nguồn trước khi sử dụng. Hình thành tư duy nghiên cứu và ý thức liêm chính học thuật. Biết cách giao tiếp cải thiện nhiều việc tham gia nhóm trực tuyến.",
    },
    aiUsage: {
      howUsed: [
        "Sản phẩm không có hỗ trợ AI",
        "Do bản thân và nhóm thực hiện cụ thể, không có dàn dựng",
      ],
      commitment:
        "Tôi cam kết bài làm này hoàn toàn do tôi và nhóm tự thực hiện. Tôi chịu trách nhiệm hoàn toàn về tính liêm chính học thuật của bài làm này.",
    },
  },
  {
    id: 5,
    chapter: "Chương 5",
    title: "Sáng tạo nội dung số",
    summary:
      "Bài tập tập trung vào việc ứng dụng các công cụ AI tạo sinh trong thiết kế poster truyền thông môi trường với thông điệp \"Reduce Plastic, Restore Nature\". Thông qua việc kết hợp ChatGPT, DALL·E 3 và Canva AI, tôi thực hiện toàn bộ quy trình sáng tạo từ xây dựng ý tưởng, tạo hình minh họa đến hoàn thiện bố cục poster. Bài tập giúp tôi hiểu rõ vai trò của AI trong sáng tạo nội dung số, đồng thời nhận thức được tầm quan trọng của sự kiểm soát, lựa chọn và chỉnh sửa của con người trong sản phẩm cuối cùng.",
    objectives: [
      "Mục tiêu 1: Sử dụng công cụ thiết kế số",
      "Mục tiêu 2: Áp dụng nguyên tắc thiết kế cơ bản",
      "Mục tiêu 3: Tạo nội dung số sáng tạo và ý nghĩa",
      "Mục tiêu 4: Sử dụng thành thạo công cụ tạo nội dung số",
      "Mục tiêu 5: Biết cách sáng tạo và sử dụng nhiều công cụ",
      "Mục tiêu 6: Thành thạo việc sử dụng các công cụ AI tạo sinh để hỗ trợ quá trình sáng tạo nội dung số",
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
