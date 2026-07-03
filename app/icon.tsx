import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#00f2ff",
          borderRadius: "50%",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 32,
            fontWeight: 900,
            color: "#000101",
          }}
        >
          ND
        </div>
      </div>
    ),
    { ...size }
  );
}
