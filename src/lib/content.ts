export const FUR = {
  white: "#F1ECE3",
  ginger: "#E8873B",
  brown: "#7C4E2E",
  grey: "#9AA0A6",
  black: "#3B3537",
} as const;

export type IconName =
  | "vision"
  | "map"
  | "rarity"
  | "feed"
  | "territory"
  | "vibes";

export const features: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "vision",
    title: "AI Cat Vision",
    body: "Snap one photo and AI identifies the breed, coat colours, pattern, fur length, eye colour and body size in seconds.",
  },
  {
    icon: "map",
    title: "A Living Map",
    body: "Every sighting drops a cat-face pin, colour-coded by fur. Watch your neighbourhood fill up with its true residents.",
  },
  {
    icon: "rarity",
    title: "Rarity Tiers",
    body: "From Common to Mythical: the less a cat is seen, the higher it climbs. Legendary finds earn serious bragging rights.",
  },
  {
    icon: "feed",
    title: "Sighting Feed",
    body: "A community stream of every encounter, with photo carousels, breed tags and the spotters who found them.",
  },
  {
    icon: "territory",
    title: "Territory & Habits",
    body: "Every cat gets a profile: sighting timeline, territory heatmap, and when it likes to prowl, be it morning, noon or midnight.",
  },
  {
    icon: "vibes",
    title: "Vibes",
    body: "Friendly? Shy? Professionally grumpy? Tag each cat’s personality and build the definitive character record.",
  },
];

export const steps: { title: string; body: string }[] = [
  {
    title: "Spot a cat",
    body: "Out on a walk and cross paths with a cat? That’s a sighting waiting to happen.",
  },
  {
    title: "Snap & tag",
    body: "Take a photo. GPS pins the location while AI identifies the breed, coat and eye colour.",
  },
  {
    title: "Collect & track",
    body: "The cat joins your collection. Follow its territory, habits and rarity as the whole neighbourhood contributes.",
  },
];

export const tiers: {
  name: string;
  tagline: string;
  colour: string;
  fur: string;
}[] = [
  {
    name: "Common",
    tagline: "Seen on every street corner",
    colour: "#9AA0A6",
    fur: FUR.grey,
  },
  {
    name: "Uncommon",
    tagline: "A familiar face, if you know where to look",
    colour: "#48895c",
    fur: FUR.brown,
  },
  {
    name: "Rare",
    tagline: "Blink and you’ll miss it",
    colour: "#4A7BA6",
    fur: FUR.white,
  },
  {
    name: "Legendary",
    tagline: "Spoken of in hushed miaows",
    colour: "#b53920",
    fur: FUR.ginger,
  },
  {
    name: "Mythical",
    tagline: "Some say it’s just a legend…",
    colour: "#7C4DBE",
    fur: FUR.black,
  },
];

export const vibes: { emoji: string; label: string }[] = [
  { emoji: "😸", label: "friendly" },
  { emoji: "🙈", label: "shy" },
  { emoji: "😋", label: "hungry" },
  { emoji: "☁️", label: "fluffy" },
  { emoji: "🍔", label: "chonky" },
  { emoji: "😾", label: "grumpy" },
  { emoji: "🧶", label: "playful" },
  { emoji: "😴", label: "sleepy" },
];

export const NOTIFY_MAILTO =
  "mailto:Jamesemford@outlook.com?subject=Cats%20on%20a%20Map%20%E2%80%94%20notify%20me";

export const GITHUB_URL = "https://github.com/Jamesemf/Cats";
