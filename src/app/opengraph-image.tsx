import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(135deg, #f4f8f5 0%, #e6f0f8 45%, #dff0d3 100%)",
          color: "#112329",
          padding: "64px",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#1d6db0",
          }}
        >
          Portfolio Project
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 70, fontWeight: 700, lineHeight: 1.05 }}>
            Service Platform Showcase
          </div>
          <div style={{ fontSize: 30, lineHeight: 1.35, maxWidth: 900 }}>
            Responsive frontend, typed request forms, simple API routes, and a
            separate FastAPI backend example.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
