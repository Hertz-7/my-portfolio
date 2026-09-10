import { ImageResponse } from "next/og";

export const alt = "Mohammad Aosaf — AI & Full-Stack Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: "#04121A",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p
            style={{
              fontSize: "72px",
              fontWeight: 700,
              color: "#E6F2F3",
              letterSpacing: "-0.028em",
              lineHeight: 1.08,
              margin: 0,
            }}
          >
            Mohammad Aosaf
          </p>
          <p
            style={{
              fontSize: "18px",
              fontWeight: 400,
              color: "#7B979E",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              margin: 0,
              fontFamily: "monospace",
            }}
          >
            AI &amp; Full-Stack Engineer — Islamabad, PK
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
