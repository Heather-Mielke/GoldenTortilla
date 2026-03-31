/**
 * Collage images (e.g. Unsplash) — swap for client photography in /public when needed.
 */
const q = "auto=format&fit=crop";

export interface CollageImage {
  src: string;
  alt: string;
}

export const collageImages: CollageImage[] = [
  {
    src: `https://images.unsplash.com/photo-1522071820081-009f0129c71c?${q}&w=900&q=80`,
    alt: "Team collaborating around a laptop",
  },
  {
    src: `https://images.unsplash.com/photo-1600880292203-757bb62b4baf?${q}&w=700&q=80`,
    alt: "Colleagues in a meeting",
  },
  {
    src: `https://images.unsplash.com/photo-1497366216548-37526070297c?${q}&w=900&q=80`,
    alt: "Modern office interior with windows",
  },
  {
    src: `https://images.unsplash.com/photo-1553877522-43269d4ea984?${q}&w=700&q=80`,
    alt: "People reviewing work on a wall display",
  },
  {
    src: `https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?${q}&w=700&q=80`,
    alt: "Laptop and coffee on a desk",
  },
  {
    src: `https://images.unsplash.com/photo-1556761175-5973dc0f32e7?${q}&w=900&q=80`,
    alt: "Handshake in a bright office",
  },
];
