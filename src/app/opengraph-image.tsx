import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "public", "avatar.png"), "base64");
  const logoSrc = `data:image/png;base64,${logoData}`;

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#0a0a0a",
        color: "#ffffff",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <img src={logoSrc} height="120" alt="Fernanda Mascheti" style={{ marginBottom: "20px" }} />
      <h1 style={{ fontSize: "32px", fontWeight: "bold", margin: "0" }}>
        Fernanda Mascheti
      </h1>
      <p style={{ fontSize: "18px", margin: "10px 0 0 0", opacity: 0.8 }}>
        Eu ensino Programação
      </p>
    </div>,
  );
}
