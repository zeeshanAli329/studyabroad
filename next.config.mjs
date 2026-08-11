// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... any existing config like experimental or reactStrictMode ...
  
  images: {
    // 1. Optimize images even in production (required on Vercel)
    unoptimized: false, 
    
    // 2. Allow specific remote images if you are using them
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "wp.rrdevs.net",
      },
    ],
  },
  
  // 3. Ensure trailingSlash is NOT true (can break relative paths)
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