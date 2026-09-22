export const testimonials: Testimonial[] = [
  {
    body: "the best coffeee in town! cozy place and amazing vibes.",
    name: "Anna K.",
    initials: "AK",
    rating: 5.0,
  },
  {
    body: "i come here every morning. and delicious pastries.",
    name: "Magda L.",
    initials: "ML",
    rating: 4.8,
  },
  {
    body: "great coffee, friendly service, and a lovely atmosphere.",
    name: "Julia M.",
    initials: "JM",
    rating: 4.5,
  },
];

export type Testimonial = {
  body: string;
  name: string;
  initials: string;
  rating: number;
};
