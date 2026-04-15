export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  mainImage: string;
  categories: string[];
  publishedAt: string; // ISO
  body: string; // markdown-lite; Phase 4 will replace with PortableText
};

export const posts: Post[] = [
  {
    slug: "5-concept-cuoi-hot-2026",
    title: "5 concept trang trí cưới hot nhất 2026",
    excerpt:
      "Từ tone terracotta đến vườn trăng Á Đông — cùng điểm qua 5 xu hướng concept đang được các cặp đôi GenZ săn đón.",
    mainImage:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80",
    categories: ["Xu hướng", "Concept"],
    publishedAt: "2026-03-20",
    body: "Nội dung bài viết đang được cập nhật. Liên hệ Zalo để tư vấn trực tiếp về concept phù hợp với bạn.",
  },
  {
    slug: "checklist-trang-tri-tiec-cuoi",
    title: "Checklist trang trí tiệc cưới từ A đến Z",
    excerpt:
      "Đừng bỏ sót chi tiết nào! Checklist đầy đủ giúp bạn chuẩn bị trang trí tiệc cưới không thiếu bất kỳ hạng mục nào.",
    mainImage:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1600&q=80",
    categories: ["Kinh nghiệm"],
    publishedAt: "2026-02-10",
    body: "Checklist chi tiết đang được cập nhật. Theo dõi fanpage để nhận bản PDF miễn phí.",
  },
  {
    slug: "chon-hoa-cuoi-theo-mua",
    title: "Cách chọn hoa cưới theo mùa — tiết kiệm mà vẫn đẹp",
    excerpt:
      "Chọn đúng loài hoa theo mùa giúp bạn tiết kiệm tới 40% chi phí mà concept vẫn tươi mới, đẳng cấp.",
    mainImage:
      "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1600&q=80",
    categories: ["Hoa cưới", "Kinh nghiệm"],
    publishedAt: "2026-01-15",
    body: "Bài viết đang được cập nhật. Liên hệ team GenZ để được tư vấn 1-1 miễn phí.",
  },
];
