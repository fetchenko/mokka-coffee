export const testimonials = [
  {
    bodyKey: "anna",
    nameKey: "annaName",
    initialsKey: "annaInitials",
    rating: 5.0,
  },
  {
    bodyKey: "magda",
    nameKey: "magdaName",
    initialsKey: "magdaInitials",
    rating: 4.8,
  },
  {
    bodyKey: "julia",
    nameKey: "juliaName",
    initialsKey: "juliaInitials",
    rating: 4.5,
  },
] as const;

export type Testimonial = (typeof testimonials)[number];
