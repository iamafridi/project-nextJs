/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // generates a static "out/" folder
  eslint: {
    ignoreDuringBuilds: true, // prevents ESLint errors from breaking the build
  },
};

module.exports = nextConfig;
