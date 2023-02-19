export const BREAK_POINTS = {
  pc: 1399,
  tablet: 600,
  sp: 599,
  animStop: 767,
} as const;

export const MEDIA = {
  /** 1025px 〜 の幅に適応される */
  pc: `@media (min-width: ${BREAK_POINTS.pc}px)`,
  /** 〜 1024px の幅に適応される */
  tablet: `@media (max-width: ${BREAK_POINTS.pc - 1}px)`,
  /** 〜 599px の幅に適応される */
  sp: `@media (max-width: ${BREAK_POINTS.tablet - 1}px)`,
} as const;

export const runningInBrowser = typeof window !== "undefined";

export const COLOR = {
  base: "#093762",
  baseInvert: "#fff",
  text: "#202020",
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

export const SERVICE = [
  {
    number: "01",
    title: "受託",
    alt: "受託開発の画像",
    imageFileName: "service_content_image_1",
    description:
      "Web系を専門にして開発を行います。 要件定義などのいわゆる上流工程の業務から、保守 ・\n運用業務まで、システム開発の全工程を請け負っております。\n今までの経験から特にフロントエンド開発を得意にしておりまして、フロントのみでの開発を行うことも可能です。お気軽にご相談ください",
  },
  {
    number: "02",
    title: "SES",
    alt: "SESの画像",
    imageFileName: "service_content_image_2",
    description:
      "システム開発業務に必要なエンジニアを、必要な期間ご提供するサービスです。\n当社では、設計、開発、運用保守まで一貫して担当できるエンジニアが揃っています。チーム体制でのご提案も可能です。",
  },
  {
    number: "03",
    title: "フリーランスマッチングサービス",
    alt: "自社開発の画像",
    imageFileName: "service_content_image_3",
    description: "...coming soon",
  },
];

export const ABOUT = [
  {
    dt: "商号",
    dd: "株式会社ライオット（株式会社RIOT）",
  },
  {
    dt: "事業内容",
    dd: "システム開発　SES",
  },
  {
    dt: "代表取締役",
    dd: "下野　隼",
  },
  {
    dt: "設立",
    dd: "2019年1月",
  },
  {
    dt: "所在地",
    dd: "東京都渋谷区広尾2丁目13番6号",
  },
  {
    dt: "資本金",
    dd: "1,000万円",
  },
];
