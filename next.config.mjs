/** @type {import('next').NextConfig} */
const nextConfig = { 
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname:'res.cloudinary.com'
      },
      {
        protocol: 'https',
        hostname:'img.freepik.com'
      },
      {
        protocol: 'https',
        hostname:'images.pexels.com'
      }
    ],
  },};

export default nextConfig;
