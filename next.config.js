const stylexPlugin = require("@stylexjs/nextjs-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/nicksimpkins",
  assetPrefix: "/nicksimpkins/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = stylexPlugin({
  rootDir: __dirname,
})(nextConfig);