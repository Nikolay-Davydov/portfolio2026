import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Nikolay Davydov — Frontend Developer Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0d1515",
        }}
      >
        <div
          style={{
            position: "relative",
            width: 140,
            height: 140,
            marginBottom: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            width="140"
            height="140"
            viewBox="0 0 100 100"
            style={{ position: "absolute" }}
          >
            <ellipse cx="50" cy="50" rx="45" ry="18" stroke="#00f2ff" strokeWidth="2" fill="none" />
            <ellipse cx="50" cy="50" rx="45" ry="18" stroke="#00f2ff" strokeWidth="2" fill="none" transform="rotate(60 50 50)" />
            <ellipse cx="50" cy="50" rx="45" ry="18" stroke="#00f2ff" strokeWidth="2" fill="none" transform="rotate(120 50 50)" />
          </svg>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              fontWeight: 900,
              color: "#00f2ff",
            }}
          >
            ND
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 64, fontWeight: 700, color: "#dce4e4", letterSpacing: "-0.02em" }}>
          Nikolay Davydov
        </div>

        <div style={{ display: "flex", fontSize: 28, color: "#00d1b2", letterSpacing: "0.3em", textTransform: "uppercase", marginTop: 16 }}>
          Frontend Developer
        </div>

        <div style={{ display: "flex", fontSize: 20, color: "#849495", letterSpacing: "0.1em", marginTop: 48 }}>
          nikolay-davydov.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
