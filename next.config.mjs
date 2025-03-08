/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Fix images not loading
  },
  trailingSlash: true, // Ensure correct linking
};

export default nextConfig;
