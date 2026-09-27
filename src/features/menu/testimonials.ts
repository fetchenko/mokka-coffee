export const testimonials = [
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
] as const;

export type Testimonial = (typeof testimonials)[number];

export type LocalizedTestimonial = Omit<Testimonial, "bodyKey"> & {
  body: string;
};
