export interface ServiceCard {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export const serviceCards: ServiceCard[] = [
  {
    title: "Primary Service",
    description: "Describe the most common service and the core result clients get.",
    imageSrc: "https://picsum.photos/seed/service-1/640/400",
    imageAlt: "Visual representing primary service",
  },
  {
    title: "Secondary Service",
    description: "Add another offer with clear outcomes and simple language.",
    imageSrc: "https://picsum.photos/seed/service-2/640/400",
    imageAlt: "Visual representing secondary service",
  },
  {
    title: "Specialty Service",
    description: "Use this slot for premium or niche work you want to highlight.",
    imageSrc: "https://picsum.photos/seed/service-3/640/400",
    imageAlt: "Visual representing specialty service",
  },
];
