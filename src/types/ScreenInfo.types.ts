export type ScreenInfoType = {
  order: number;
  slug: String;
  title: String;
  theme: String;
};

export type ScreenProps = {
  screenInfo: ScreenInfoType;
};

export const screenInfoList = [
  {
    order: 1,
    slug: "top",
    title: "Banner",
    theme: "dark",
  },
  {
    order: 2,
    slug: "service",
    title: "Service",
    theme: "dark",
  },
  {
    order: 3,
    slug: "aboutus",
    title: "About Us",
    theme: "bright",
  },
  {
    order: 4,
    slug: "work",
    title: "Work",
    theme: "dark",
  },
  {
    order: 5,
    slug: "partnership",
    title: "Partnership",
    theme: "dark",
  },
  {
    order: 6,
    slug: "recruit",
    title: "Recruit",
    theme: "dark",
  },
  {
    order: 7,
    slug: "message",
    title: "Message",
    theme: "bright",
  },
  {
    order: 8,
    slug: "news",
    title: "News",
    theme: "bright",
  },
  {
    order: 9,
    slug: "contact",
    title: "Contact",
    theme: "bright",
  },
];
