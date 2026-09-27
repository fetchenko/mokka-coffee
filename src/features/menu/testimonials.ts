export const testimonials: Testimonial[] = [
  {
    bodyKey: "anna",
    name: "Anna K.",
    initials: "AK",
    rating: 5.0,
  },
  {
    bodyKey: "magda",
    name: "Magda L.",
    initials: "ML",
    rating: 4.8,
  },
  {
    bodyKey: "julia",
    name: "Julia M.",
    initials: "JM",
    rating: 4.5,
  },
];

export type Testimonial = {
  bodyKey: keyof typeof testimonialKeys;
  name: string;
  initials: string;
  rating: number;
};

const testimonialKeys = {
  anna: "anna",
  magda: "magda",
  julia: "julia",
} as const;
