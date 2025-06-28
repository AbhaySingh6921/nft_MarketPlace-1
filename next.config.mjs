/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gateway.pinata.cloud",
        port: "",
        pathname: "/ipfs/**",
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mjs$/,
      type: "javascript/auto",
    });

    config.resolve.fallback = {
      fs: false,
      net: false,
      tls: false,
    };

    return config;
  },
};

export default nextConfig;
