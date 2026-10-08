import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1f6b5a",
          color: "#ffffff",
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "0.12em",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        VB
      </div>
    ),
    { ...size },
  );
}
