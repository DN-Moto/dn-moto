import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://dnmotorepair.com",
      lastModified: new Date(),
    },
    {
      url: "https://dnmotorepair.com/services",
      lastModified: new Date(),
    },
    {
      url: "https://dnmotorepair.com/projects/ttr125le",
      lastModified: new Date(),
    },
  ];
}