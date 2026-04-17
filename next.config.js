/** @type {import('next').NextConfig} */
const isGithubPagesBuild = process.env.GITHUB_ACTIONS === 'true';
const repo = 'buffdnz';

const nextConfig = {
  images: {
    unoptimized: true,
  },
  ...(isGithubPagesBuild
    ? {
        output: 'export',
        basePath: `/${repo}`,
        assetPrefix: `/${repo}/`,
        trailingSlash: true,
      }
    : {}),
};

module.exports = nextConfig;