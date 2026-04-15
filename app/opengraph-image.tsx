import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site";

export const runtime = "edge";
export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "linear-gradient(135deg, #FDF8F3 0%, #F8D7D4 60%, #C9A96E 100%)",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 10,
              height: 40,
              background: "#C9A96E",
            }}
          />
          <span
            style={{
              fontSize: 20,
              letterSpacing: 8,
              textTransform: "uppercase",
              color: "#2B2420",
            }}
          >
            Wedding Decor Studio · Vietnam
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <p
            style={{
              fontSize: 40,
              color: "#A88955",
              fontStyle: "italic",
              margin: 0,
            }}
          >
            {siteConfig.name}
          </p>
          <p
            style={{
              fontSize: 96,
              lineHeight: 1,
              color: "#2B2420",
              margin: 0,
              fontStyle: "italic",
              maxWidth: 900,
            }}
          >
            {siteConfig.tagline}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 18,
            color: "#2B2420",
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          <span>Est. 2020 — Sài Gòn</span>
          <span>genzlamcuoi.vn</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
