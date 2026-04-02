export default function HeroGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(ellipse at center, #f59e0b 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute -top-16 left-1/3 w-[300px] h-[250px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(ellipse at center, #fb923c 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
    </div>
  );
}
