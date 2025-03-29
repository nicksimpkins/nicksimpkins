const stylexPlugin = require("@stylexjs/nextjs-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/nicksimpkins",
  images: {
    unoptimized: true,
  }
};

module.exports = stylexPlugin({
  rootDir: __dirname,
})(nextConfig);