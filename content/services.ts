export type Service = {
  slug: string;
  title: string;
  description: string;
  image: string;
  price?: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "tiec-cuoi-tron-goi",
    title: "Tiệc cưới trọn gói",
    description:
      "Concept trang trí từ A–Z: sảnh lễ, bàn tiệc, backdrop, hoa tươi và ánh sáng đồng bộ.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    price: "Từ 35.000.000đ",
    featured: true,
  },
  {
    slug: "sanh-le-gia-tien",
    title: "Sảnh lễ gia tiên",
    description:
      "Không gian nghi lễ ấm cúng, chỉn chu — tôn vinh nét truyền thống Việt Nam.",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80",
    price: "Từ 12.000.000đ",
    featured: true,
  },
  {
    slug: "ban-tiec-hoa-tuoi",
    title: "Bàn tiệc & Hoa tươi",
    description:
      "Thiết kế bàn tiệc sang trọng, phối hoa tươi theo mùa và màu concept của cô dâu chú rể.",
    image:
      "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1200&q=80",
    price: "Liên hệ báo giá",
    featured: true,
  },
  {
    slug: "backdrop-cong-hoa",
    title: "Backdrop & Cổng hoa",
    description:
      "Backdrop chụp ảnh, cổng hoa welcome guest — điểm nhấn khiến khách mời check-in không ngơi tay.",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80",
    price: "Từ 8.000.000đ",
    featured: true,
  },
  {
    slug: "outdoor-wedding",
    title: "Outdoor Wedding",
    description:
      "Tiệc cưới ngoài trời: sân vườn, beachside, rooftop — không gian độc bản cho cặp đôi cá tính.",
    image:
      "https://images.unsplash.com/photo-1513278974582-3e1b4a4fa21e?auto=format&fit=crop&w=1200&q=80",
    price: "Liên hệ báo giá",
  },
  {
    slug: "concept-tham-my",
    title: "Tư vấn Concept riêng",
    description:
      "Làm việc 1-1 với art director để xây concept mang dấu ấn riêng của bạn.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    price: "Từ 5.000.000đ",
  },
];
