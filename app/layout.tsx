import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond, Dancing_Script } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingZalo } from "@/components/layout/FloatingZalo";
import { IntroCurtain } from "@/components/layout/IntroCurtain";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { siteConfig } from "@/content/site";
import { env } from "@/lib/env";

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});
const cormorant = Cormorant_Garamond({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});
const dancing = Dancing_Script({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-dancing",
  weight: ["400", "600", "700"],
});
const inter = Inter({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(env.siteUrl),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: env.siteUrl,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/images/logo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  icons: { icon: "/images/logo.jpg" },
};

export const viewport: Viewport = {
  themeColor: "#FDF8F3",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`${playfair.variable} ${cormorant.variable} ${dancing.variable} ${inter.variable}`}>
      <body className="font-sans">
        <Script
          id="ld-business"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: siteConfig.name,
            description: siteConfig.description,
            url: env.siteUrl,
            telephone: env.phone,
            email: env.email,
            image: `${env.siteUrl}/images/logo.jpg`,
            address: {
              "@type": "PostalAddress",
              streetAddress: env.address,
              addressCountry: "VN",
            },
            sameAs: [
              siteConfig.social.facebook,
              siteConfig.social.instagram,
              siteConfig.social.tiktok,
            ],
            priceRange: "$$",
            openingHours: "Mo-Su 08:00-21:00",
          })}
        </Script>
        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: siteConfig.name,
            url: env.siteUrl,
            inLanguage: "vi-VN",
          })}
        </Script>
        <CustomCursor />
        <IntroCurtain />
        <Header />
        <main className="pt-16 md:pt-20">{children}</main>
        <Footer />
        <FloatingZalo />
        {env.gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${env.gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${env.gaId}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
