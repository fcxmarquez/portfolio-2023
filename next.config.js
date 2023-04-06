/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cdn-media-1.freecodecamp.org",
      "raw.githubusercontent.com",
      "github.com",
      "tomchen.github.io",
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
