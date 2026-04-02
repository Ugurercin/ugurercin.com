import { ImageResponse } from "next/og";
import { apps } from "@/lib/apps";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = apps.find((a) => a.slug === slug);
  if (!app) return new Response("Not found", { status: 404 });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "60px",
          backgroundColor: "#0a0a0f",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -100,
            left: -100,
            width: 600,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(245,158,11,0.25) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: 24,
            background: "linear-gradient(135deg, #f59e0b, #fb923c)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 48,
            marginBottom: 28,
          }}
        >
          {app.icon}
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 600,
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: 12,
          }}
        >
          {app.name}
        </div>
        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.5)",
            marginBottom: 40,
            maxWidth: 700,
          }}
        >
          {app.tagline}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ fontSize: 20, color: "rgba(255,255,255,0.3)" }}>UE</div>
          <div style={{ fontSize: 20, color: "#f59e0b" }}>Software</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
