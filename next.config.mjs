/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000",
        pathname: "/api/uploads/**",
      },
      {
        protocol: "https",
        hostname: "enid.pk",
        pathname: "/api/uploads/**",
      },
      {
        protocol: "https",
        hostname: "www.enid.pk",
        pathname: "/api/uploads/**",
      },
    ],
  },
};

export default nextConfig;
