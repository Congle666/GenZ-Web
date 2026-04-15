export type ProjectCategory = "tiec-cuoi" | "sanh-le" | "outdoor" | "concept";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  coverImage: string;
  images: string[];
  location: string;
  year: number;
  description?: string;
};

export const categoryLabels: Record<ProjectCategory | "all", string> = {
  all: "Tất cả",
  "tiec-cuoi": "Tiệc cưới",
  "sanh-le": "Sảnh lễ",
  outdoor: "Outdoor",
  concept: "Concept",
};

export const projects: Project[] = [
  {
    slug: "linh-khoa-dalat",
    title: "Linh & Khoa — Đà Lạt Dreamy",
    category: "outdoor",
    coverImage:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=80",
    ],
    location: "Đà Lạt",
    year: 2025,
    description: "Tiệc outdoor giữa rừng thông, tone pastel kem + xanh rêu.",
  },
  {
    slug: "mai-hung-saigon",
    title: "Mai & Hùng — Saigon Intimate",
    category: "tiec-cuoi",
    coverImage:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1600&q=80",
    ],
    location: "TP.HCM",
    year: 2025,
    description: "Tiệc thân mật 80 khách, tone trắng ngà + vàng gold.",
  },
  {
    slug: "trang-nam-hanoi",
    title: "Trang & Nam — Sảnh lễ gia tiên",
    category: "sanh-le",
    coverImage:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1600&q=80",
    ],
    location: "Hà Nội",
    year: 2024,
    description: "Nghi lễ truyền thống với cửa võng sơn son thếp vàng.",
  },
  {
    slug: "vy-quan-rooftop",
    title: "Vy & Quân — Rooftop Sunset",
    category: "outdoor",
    coverImage:
      "https://images.unsplash.com/photo-1513278974582-3e1b4a4fa21e?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1513278974582-3e1b4a4fa21e?auto=format&fit=crop&w=1600&q=80",
    ],
    location: "TP.HCM",
    year: 2024,
    description: "Tiệc rooftop ngắm hoàng hôn với concept terracotta.",
  },
  {
    slug: "han-minh-danang",
    title: "Hân & Minh — Beachside",
    category: "outdoor",
    coverImage:
      "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1600&q=80",
    ],
    location: "Đà Nẵng",
    year: 2024,
    description: "Lễ cưới bãi biển với cổng vòm hoa trắng tinh khôi.",
  },
  {
    slug: "concept-moon-garden",
    title: "Moon Garden — Concept Shoot",
    category: "concept",
    coverImage:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=80",
    ],
    location: "Studio",
    year: 2025,
    description: "Bộ concept ma mị lấy cảm hứng từ vườn trăng Á Đông.",
  },
];
