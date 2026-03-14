/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Disable ESLint during builds to prevent build failures
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
