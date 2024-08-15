/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  assetPrefix: isProd ? "/hrdaya.github.io/" : "",
  basePath: isProd ? "/hrdaya.github.io" : "",
};

export default nextConfig;
