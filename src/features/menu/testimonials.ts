export const testimonials = [
  {
    bodyKey: "annaReview",
    nameKey: "annaName",
    initialsKey: "annaInitials",
    rating: 5.0,
  },
  {
    bodyKey: "magdaReview",
    nameKey: "magdaName",
    initialsKey: "magdaInitials",
    rating: 4.8,
  },
  {
    bodyKey: "juliaReview",
    nameKey: "juliaName",
    initialsKey: "juliaInitials",
    rating: 4.5,
  },
] as const;

export type Testimonial = (typeof testimonials)[number];
