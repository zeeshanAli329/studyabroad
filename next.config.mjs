/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "wp.rrdevs.net",
      },
      // Backend domain / localhost support for dynamic uploads
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**", // Allows all external dynamic image sources
      },
    ],
  },
  trailingSlash: false,
};

export default nextConfig;






// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'images.unsplash.com',
//         pathname: '/**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'plus.unsplash.com',
//         pathname: '/**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'source.unsplash.com',
//         pathname: '/**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'wp.rrdevs.net',
//         pathname: '/**',
//       },
//     ],
//     dangerouslyAllowSVG: true,
//     contentDispositionType: 'attachment',
//     contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
//   },
// };

// export default nextConfig;





















// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "images.unsplash.com",
//       },
//       {
//         protocol: "https",
//         hostname: "wp.rrdevs.net",
//       },
//       {
//         protocol: "https",
//         hostname: "plus.unsplash.com",
//       },
//       {
//         protocol: "https",
//         hostname: "source.unsplash.com",
//       },
//     ],
//   },
// };

// export default nextConfig;