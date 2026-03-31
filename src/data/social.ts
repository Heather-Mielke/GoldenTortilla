/** Template placeholders — replace hrefs with the client’s profile URLs */

export type SocialPlatform =
  | "facebook"
  | "instagram"
  | "linkedin"
  | "x"
  | "youtube"
  | "tiktok"
  | "pinterest";

export interface SocialLink {
  platform: SocialPlatform;
  href: string;
  label: string;
}

export const socialLinks: SocialLink[] = [
  { platform: "facebook", href: "https://www.facebook.com/", label: "Facebook" },
  { platform: "instagram", href: "https://www.instagram.com/", label: "Instagram" },
  { platform: "linkedin", href: "https://www.linkedin.com/", label: "LinkedIn" },
  { platform: "x", href: "https://x.com/", label: "X (Twitter)" },
  { platform: "youtube", href: "https://www.youtube.com/", label: "YouTube" },
  { platform: "tiktok", href: "https://www.tiktok.com/", label: "TikTok" },
  { platform: "pinterest", href: "https://www.pinterest.com/", label: "Pinterest" },
];
