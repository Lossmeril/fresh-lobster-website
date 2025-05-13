/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    async redirects() {
      return [
        {
          source: '/admin',
          destination: '/admin/index.html',
          permanent: true,
        },
      ];
    },
  };
  
