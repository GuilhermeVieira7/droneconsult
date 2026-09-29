/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  distDir: process.env.NEXT_DIST_DIR || ".next",
  experimental: { optimizePackageImports: ["framer-motion"] },
  async headers() {
    return [
      {
        source: "/:file(.*\.(?:webp|png|jpg|svg|ico))",
        headers: [{ key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" }],
      },
    ];
  },
};
