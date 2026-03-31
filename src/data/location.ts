/**
 * Demo location + Google Maps embed.
 * Replace mapsEmbedSrc with your own: Google Maps → Share → Embed a map → copy iframe src.
 */
export const location = {
  heading: "Visit The Golden Tortilla",
  lede: "Swing by for fresh tacos, loaded burritos, and bold flavors every day.",
  /** Lines shown as the mailing / visit address */
  addressLines: ["1401 E 7th St", "Austin, TX 78702"],
  /** Opens Google Maps directions / place (any maps link you prefer) */
  mapsOpenUrl: "https://www.google.com/maps/search/?api=1&query=1401+E+7th+St+Austin+TX+78702",
  /**
   * iframe `src` from Google Maps → Share → Embed a map (replace with the client pin).
   * Demo embed: Minneapolis city center.
   */
  mapsEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110896.06121112637!2d-97.8276649013492!3d30.307462426857206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b59f740a4db7%3A0x2eb63691ab8be8d7!2sEast%207th%20St%2C%20Austin%2C%20TX!5e0!3m2!1sen!2sus!4v1761542400000!5m2!1sen!2sus",
} as const;
