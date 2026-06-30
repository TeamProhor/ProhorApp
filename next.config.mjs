const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  allowedDevOrigins: ["127.0.0.1"],
  reactCompiler: true,
  cacheComponents: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: [
      "@base-ui/react",
      "@phosphor-icons/react",
      "class-variance-authority",
      "clsx",
      "cmdk",
      "date-fns",
      "embla-carousel-react",
      "input-otp",
      "radix-ui",
      "react-day-picker",
      "react-resizable-panels",
      "recharts",
      "shadcn",
      "sonner",
      "tailwind-merge",
      "tw-animate-css",
      "vaul",
    ],
  },
};

export default nextConfig;
