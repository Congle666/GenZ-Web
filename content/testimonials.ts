export type Testimonial = {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Linh Phạm",
    role: "Cô dâu — Đà Lạt",
    content:
      "Đội ngũ GenZ hiểu ý mình cực nhanh. Concept ra đúng mood board, khách mời khen không dứt!",
    rating: 5,
  },
  {
    name: "Mai Nguyễn",
    role: "Cô dâu — Sài Gòn",
    content:
      "Từ setup bàn tiệc đến hoa tươi đều chỉn chu. Mình chỉ việc cười và chụp ảnh thôi.",
    rating: 5,
  },
  {
    name: "Trang Lê",
    role: "Mẹ cô dâu — Hà Nội",
    content:
      "Sảnh lễ gia tiên vừa trang trọng vừa ấm cúng. Gia đình rất hài lòng, cảm ơn các bạn!",
    rating: 5,
  },
];
