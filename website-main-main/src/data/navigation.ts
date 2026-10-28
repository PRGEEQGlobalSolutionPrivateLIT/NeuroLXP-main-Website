export type SimpleLink = {
  label: string;
  href: string;
};

export type NestedCategory = {
  label: string;
  href?: string;
  items?: SimpleLink[];
};

export type PromoCard = {
  variant: "photo" | "gradient";
  image?: string;
  imageAlt?: string;
  heading: string;
  description?: string;
  buttonLabel: string;
  buttonHref: string;
};

export type NavItem =
  | {
      type: "link";
      label: string;
      href: string;
      active?: boolean;
      arrow?: "up" | "down" | "none";
    }
  | {
      type: "simple";
      label: string;
      href: string;
      items: SimpleLink[];
      promo?: PromoCard;
    }
  | {
      type: "nested";
      label: string;
      href: string;
      categories: NestedCategory[];
      promo?: PromoCard;
    };

export const navItems: NavItem[] = [
  {
    type: "link",
    label: "Home",
    href: "/HomePage",
    active: true,
  },

  {
    type: "link",
    label: "GenZGalaxy",
    href: "/genzgalaxy",
  },

  {
    type: "simple",
    label: "NeuroLXP 2.1",
    href: "/neurolxp2.o",

    items: [
      {
        label: "Digital Literacy",
        href: "/DigitalLiteracy",
      },
      {
        label: "Information Literacy",
        href: "/information-literacy",
      },
      {
        label: "Media Literacy",
        href: "/MediaLiteracy",
      },
      {
        label: "Financial Literacy",
        href: "/FinancialLiteracy",
      },
      {
        label: "3Rs8Cs3Ms Literacy",
        href: "literacy3rs8cs3ms",
      },
    ],

    promo: {
      variant: "photo",
      image:
        "/images/education-application-knowledge-development-concept.webp",
      imageAlt: "Learner exploring NeuroLXP 2.1 courses",
      heading: "Build Skills! Shape Your Future",
      buttonLabel: "Explore Courses",
      buttonHref: "/neurolxp2.o",
    },
  },

  {
    type: "simple",
    label: "Neuro Labs",
    href: "/neurolabs",

    items: [
      {
        label: "Coding Lab",
        href: "/neurolabs",
      },
      {
        label: "Coding Bootcamps",
        href: "/boot_camp",
      },
      {
        label: "Coding Challenges",
        href: "/CodingChallenge",
      },
      {
        label: "Coding Resources",
        href: "/coding-resources",
      },
    ],

    promo: {
      variant: "gradient",
      heading: "One Intelligent Platform For Smarter Learning",
      buttonLabel: "Explore Platform",
      buttonHref: "/neurolabs",
    },
  },

  {
    type: "nested",
    label: "Our Customers",
    href: "/university",

    categories: [
      {
        label: "Industries We Serve",
        items: [
          {
            label: "University and College",
            href: "/university",
          },
          {
            label: "BFSI",
            href: "/bfsi",
          },
          {
            label: "Retail And Healthcare",
            href: "/retail-healthcare",
          },
          {
            label: "Government Institutions",
            href: "/government",
          },
          {
            label: "Non-profit Organizations",
            href: "/nonprofit",
          },
        ],
      },

      {
        label: "Solution For",
        items: [
          {
            label: "Corporate Training",
            href: "/corporate-training",
          },
          {
            label: "E-Learning",
            href: "/E-Learning",
          },
          {
            label: "Training Management",
            href: "/training-management",
          },
        ],
      },
    ],

    promo: {
      variant: "photo",
      image: "/images/girl.webp",
      imageAlt: "Team collaborating using NeuroLXP gamification",
      heading: "Make Learning More Engaging",
      buttonLabel: "Explore Gamification",
      buttonHref: "#",
    },
  },

  {
    type: "nested",
    label: "Features",
    href: "/personalization",

    categories: [
      {
        label: "Learning",
        items: [
          {
            label: "Personalized Learning Paths",
            href: "/personalized-learning-paths",
          },
          {
            label: "Goals and Tracking",
            href: "/goal_settings",
          },
          {
            label: "Personalization",
            href: "/personalization",
          },
        ],
      },

      {
        label: "Augmentation",
        items: [
          {
            label: "Gamified Learning",
            href: "gamification_learning",
          },
          {
            label: "Content Management",
            href: "/content_managment",
          },
          {
            label: "Learning Community",
            href: "/learning_community",
          },
        ],
      },

      {
        label: "Learning Eco System",
        items: [
          {
            label: "Assessments",
            href: "/assessments",
          },
          {
            label: "Analytics & Reporting",
            href: "/analytics_reporting",
          },
          {
            label: "Career Pathways & Skilling",
            href: "/careerpathways-skilling",
          },
          {
            label: "Compliance & Security",
            href: "/compliance&security",
          },
        ],
      },

      {
        label: "Add On Modules",
        items: [
          {
            label: "Accessibility & Inclusivity",
            href: "/accessibility-inclusivity",
          },
          {
            label: "Mobile Learning",
            href: "/mobile-learning",
          },
          {
            label: "Interconnectivity",
            href: "/interconnectivity",
          },
        ],
      },
    ],

    promo: {
      variant: "photo",
      image: "/images/woman-typing-features.webp",
      imageAlt: "Learner using NeuroLXP personalization features",
      heading: "Learn! Grow! Succeed!",
      description:
        "Discover how NeuroLXP transforms learning and training",
      buttonLabel: "Explore Personalization",
      buttonHref: "/personalization",
    },
  },

  {
    type: "nested",
    label: "Resources",
    href: "/blogs",

    categories: [
      {
        label: "Use Cases",
        items: [
          {
            label: "Blended Learning",
            href: "/blended-learning",
          },
          {
            label: "Customer Training",
            href: "/customer-training",
          },
          {
            label: "Employee Induction",
            href: "/employee-induction",
          },
          {
            label: "Standards Training",
            href: "/standards-training",
          },
          {
            label: "Extended Enterprise",
            href: "/extended-enterprise",
          },
        ],
      },

      {
        label: "Media Presence",
        href: "/media-presence",
      },

      {
        label: "White Paper",
        href: "/white-papers",
      },

      {
        label: "Blogs",
        href: "/blogs",
      },

      {
        label: "Help and Support",
        href: "/help-support",
      },

      {
        label: "Our Team",
        href: "/our-Team",
      },
    ],

    promo: {
      variant: "photo",
      image:
        "/images/education-learning-puzzle-pieces-graphic.webp",
      imageAlt: "NeuroLXP platform demo",
      heading: "See NeuroLXP in Action",
      buttonLabel: "Book a Demo",
      buttonHref: "#",
    },
  },
];

export const footerAboutLinks: SimpleLink[] = [
  {
    label: "Our Mission",
    href: "/HomePage#story-mission-vision",
  },
  {
    label: "Our Vision",
    href: "/HomePage#story-mission-vision",
  },
  {
    label: "Our Story",
    href: "/HomePage#story-mission-vision",
  },
  {
    label: "Our Team",
    href: "/HomePage",
  },
];

export const footerQuickLinks: SimpleLink[] = [
  {
    label: "Privacy Policy",
    href: "#",
  },
  {
    label: "Terms of use",
    href: "#",
  },
  {
    label: "Terms of Declaration",
    href: "#",
  },
];

export const footerNeuroLxpLinks: SimpleLink[] = [
  {
    label: "Our Customers",
    href: "/HomePage#our-customers",
  },
  {
    label: "Smart Learning Paths",
    href: "/personalized-learning-paths",
  },
  {
    label: "Smart Content Creation",
    href: "/content_managment",
  },
];