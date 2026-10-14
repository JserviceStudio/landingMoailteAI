import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async rewrites() {
    return [
      {
        source: "/",
        has: [{ type: "host", value: "web.mikhmoai.com" }],
        destination: "/mikhmonv8",
      },
    ];
  },
};

export default nextConfig;
