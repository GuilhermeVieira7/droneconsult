// Curvas de nível procedurais e determinísticas (sem imagens, sem JS no cliente).
type Center = { x: number; y: number; rings: number; r0: number; step: number; seed: number };

function ring(c: Center, i: number) {
  const pts: string[] = [];
  const n = 56;
  const r = c.r0 + i * c.step;
  for (let k = 0; k <= n; k++) {
    const a = (k / n) * Math.PI * 2;
    const w =
      1 +
      0.16 * Math.sin(a * 3 + c.seed + i * 0.15) +
      0.09 * Math.sin(a * 5 - c.seed * 1.7 + i * 0.1) +
      0.05 * Math.sin(a * 9 + c.seed * 2.3);
    const x = c.x + Math.cos(a) * r * w * 1.25;
    const y = c.y + Math.sin(a) * r * w * 0.8;
    pts.push(`${k === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  return pts.join("");
}

export function TopoMap({ className = "", stroke = "#38d4f5", opacity = 0.16, variant = 0 }: { className?: string; stroke?: string; opacity?: number; variant?: 0 | 1 }) {
  const centers: Center[] =
    variant === 0
      ? [
          { x: 900, y: 380, rings: 16, r0: 14, step: 24, seed: 1.2 },
          { x: 260, y: 620, rings: 12, r0: 10, step: 26, seed: 4.1 },
        ]
      : [
          { x: 300, y: 300, rings: 14, r0: 12, step: 26, seed: 2.6 },
          { x: 1000, y: 520, rings: 13, r0: 10, step: 24, seed: 5.3 },
        ];
  return (
    <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden fill="none" stroke={stroke} strokeWidth="1" style={{ opacity }}>
      {centers.map((c, ci) =>
        Array.from({ length: c.rings }, (_, i) => <path key={`${ci}-${i}`} d={ring(c, i)} strokeOpacity={i % 5 === 0 ? 1 : 0.55} strokeWidth={i % 5 === 0 ? 1.4 : 0.8} />)
      )}
    </svg>
  );
}
