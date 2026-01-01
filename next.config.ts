import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Allows loading images from i.ibb.co for external portfolio images
    domains: [
      "i.ibb.co",
      "nooblinux.com",
      "images.pexels.com",
      "via.placeholder.com",
    ],
  },
};

export default nextConfig;
