/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static HTML export for GitHub Pages and static hosting
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
