export interface Experience {
  date: string;
  role: string;
  company: string;
  href?: string;
  description: string;
  links?: { label: string; href: string }[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    date: "JULY — DEC 2017",
    role: "UI Engineer Co-op",
    company: "Apple",
    href: "https://www.apple.com/apple-music/",
    description:
      "Developed and styled interactive web apps for Apple Music, including the user interface of Apple Music’s embeddable web player widget for in-browser user authorization and full song playback.",
    links: [
      { label: "MusicKit.js", href: "https://developer.apple.com/documentation/musickitjs" },
      { label: "9to5Mac", href: "https://9to5mac.com/2018/06/03/apple-music-embeddable-web-player-listen-browser/" },
      { label: "The Verge", href: "https://www.theverge.com/2017/10/5/16433770/facebook-messenger-apple-music-bot-song-streaming" },
    ],
    technologies: ["Ember", "SCSS", "JavaScript", "MusicKit.js"],
  },
  {
    date: "2016 — 2017",
    role: "Developer",
    company: "Scout Studio",
    href: "https://scout.camd.northeastern.edu/",
    description:
      "Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community.",
    technologies: ["Jekyll", "SCSS", "JavaScript", "WordPress"],
  },
  {
    date: "JULY — DEC 2016",
    role: "Software Engineer Co-op",
    company: "Starry",
    href: "https://starry.com/",
    description:
      "Worked with the UI team to engineer and improve major features of Starry’s customer-facing Android app.",
    links: [
      { label: "Android App", href: "https://play.google.com/store/apps/details?id=com.starry.management&hl=en_US&gl=US" },
      { label: "ScreenTime 2.0", href: "https://starry.com/blog/product/whats-new-screentime-just-got-better-for-parents" },
    ],
    technologies: ["Cordova", "Backbone", "JavaScript", "CSS"],
  },
  {
    date: "JULY — DEC 2015",
    role: "Creative Technologist Co-op",
    company: "MullenLowe U.S.",
    href: "https://us.mullenlowe.com/",
    description:
      "Developed, maintained, and shipped production code for client websites. Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more.",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
  },
];
