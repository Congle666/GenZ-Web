// Typed access to public env vars with sane defaults so build never fails.
export const env = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://genzlamcuoi.vn",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "0900000000",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "hello@genzlamcuoi.vn",
  zaloLink: process.env.NEXT_PUBLIC_ZALO_LINK ?? "https://zalo.me/0900000000",
  address: process.env.NEXT_PUBLIC_ADDRESS ?? "123 Đường ABC, Quận 1, TP.HCM",
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "xyzabcde",
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "",
  mapsEmbed:
    process.env.NEXT_PUBLIC_MAPS_EMBED ??
    "https://www.google.com/maps?q=Ho+Chi+Minh+City&output=embed",
};
