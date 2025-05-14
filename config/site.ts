export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  label?: string;
  description?: string;
  items?: NavItem[]; // For sub-menus
};

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
  mainNav: NavItem[];
  sidebarNav?: NavItem[]; // Optional, if we decide to use a more complex sidebar for docs-like layout
};

export const siteConfig: SiteConfig = {
  name: "新手养鱼全攻略",
  description:
    "全面、易懂的新手养鱼指南，从入门准备到日常照料、鱼病防治，助您轻松开启养鱼之旅。",
  url: "https://example.com", // Replace with actual URL later
  ogImage: "https://example.com/og.jpg", // Replace with actual OG image later
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
  },
  mainNav: [
    {
      title: "首页",
      href: "/",
    },
    {
      title: "新手入门",
      href: "/getting-started", // This could be a landing page for the section
      items: [
        {
          title: "为何选择养鱼？",
          href: "/why-fishkeeping",
          description: "探索养鱼的乐趣、益处及基本考量。",
        },
        {
          title: "新手自我评估与责任",
          href: "/self-assessment",
          description: "评估您的时间、精力与养鱼责任。",
        },
        {
          title: "养鱼预算规划",
          href: "/budgeting",
          description: "了解养鱼的各项成本，合理规划预算。",
        },
      ],
    },
    {
      title: "鱼儿选择",
      href: "/choosing-fish",
      items: [
        {
          title: "新手推荐鱼种",
          href: "/beginner-species",
          description: "介绍适合新手、易于照料的鱼类。",
        },
        // Future: Selecting Healthy Fish
      ],
    },
    {
      title: "鱼缸与设备",
      href: "/tank-equipment",
      items: [
        {
          title: "鱼缸选择指南",
          href: "/tank-selection",
          description: "选择合适的鱼缸形状、大小与材质。",
        },
        {
          title: "鱼缸摆放位置",
          href: "/tank-placement",
          description: "为鱼缸选择安全且利于观赏的位置。",
        },
        {
          title: "过滤系统选择",
          href: "/filtration-system",
          description: "了解各种过滤系统，选择合适的“肾脏”。",
        },
        {
          title: "养鱼所需材料清单",
          href: "/materials-checklist",
          description: "一份完整的养鱼材料清单助您做好准备。",
        },
        // Future: Heating, Lighting, Substrate
      ],
    },
    {
      title: "开缸养水",
      href: "/tank-cycling", // Main page for this section
      items: [
        {
          title: "开缸步骤全解",
          href: "/tank-cycling", // Or a more specific sub-page like /tank-cycling/steps
          description: "学习如何正确开缸并培养硝化系统。",
        },
        // Future: Importance, Methods, Water Testing
      ],
    },
    {
      title: "日常管理",
      href: "/daily-care",
      items: [
        {
          title: "养鱼基本常识", // This was a standalone page, fits well here
          href: "/basic-knowledge",
          description: "掌握水温、喂食、换水等必备知识。",
        },
        // Future: Proper Feeding, Routine Maintenance
      ],
    },
    {
      title: "鱼病防治",
      href: "/disease-prevention",
      items: [
        {
          title: "常见鱼病预防与处理",
          href: "/disease-prevention",
          description: "了解常见鱼病，保护爱鱼健康。",
        },
      ],
    },
    {
      title: "学习资源",
      href: "/learning-resources",
      items: [
        {
          title: "社交与在线教程",
          href: "/learning-resources",
          description: "如何在社交媒体找到优质养鱼教程。",
        },
        // Future: Glossary
      ],
    },
  ],
};

