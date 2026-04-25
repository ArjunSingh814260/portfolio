import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // @ts-ignore - allowedDevOrigins is only for development bypass
  ...(process.env.NODE_ENV === 'development' && {
    allowedDevOrigins: ['192.168.31.127'],
  }),
};

export default nextConfig;
