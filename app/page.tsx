import Link from "next/link"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

// Define a type for our content cards
interface ContentCardProps {
  title: string;
  description: string;
  imageUrl?: string; // Optional: for explanation images
  linkUrl?: string; // Optional: for external links like Xiaohongshu
  linkLabel?: string; // Optional: label for the link
  pageLink?: string; // Optional: for internal page links
  pageLinkLabel?: string; // Optional: label for internal page link
}

// Sample card data - this will eventually come from a more structured source or CMS
const fishkeepingSections: ContentCardProps[] = [
  {
    title: "养鱼入门：为何选择养鱼？",
    description: "探索养鱼的乐趣与益处，以及开始前需要考虑的几个基本问题。",
    pageLink: "/why-fishkeeping",
    pageLinkLabel: "了解更多",
    imageUrl: "/images/why_fishkeeping_illustration.png", 
  },
  {
    title: "新手自我评估与责任",
    description: "养鱼需要时间和精力。评估自己是否准备好承担这份责任。",
    pageLink: "/self-assessment",
    pageLinkLabel: "开始评估",
    imageUrl: "/images/self_assessment_illustration.png",
  },
  {
    title: "养鱼预算规划",
    description: "从鱼缸到日常维护，了解养鱼的各项成本，合理规划预算。",
    pageLink: "/budgeting",
    pageLinkLabel: "规划预算",
    imageUrl: "/images/budgeting_illustration.png",
  },
  {
    title: "新手推荐鱼种",
    description: "介绍几种适合新手、易于照料且观赏性佳的淡水鱼类。",
    pageLink: "/beginner-species",
    pageLinkLabel: "查看推荐",
    imageUrl: "/images/beginner_species_illustration.png",
  },
  {
    title: "鱼缸选择指南",
    description: "了解不同形状、大小、材质的鱼缸特点，为您的爱鱼选择合适的家。",
    pageLink: "/tank-selection",
    pageLinkLabel: "挑选鱼缸",
    imageUrl: "/images/tank_selection_illustration.png",
  },
  {
    title: "鱼缸摆放位置",
    description: "学习如何为鱼缸选择一个既安全又利于观赏和维护的位置。",
    pageLink: "/tank-placement",
    pageLinkLabel: "查看指南",
    imageUrl: "/images/tank_placement_illustration.png",
  },
  {
    title: "养鱼基本常识",
    description: "掌握水温控制、喂食技巧、换水方法等养鱼必备基础知识。",
    pageLink: "/basic-knowledge",
    pageLinkLabel: "学习常识",
    imageUrl: "/images/basic_knowledge_illustration.png",
  },
  {
    title: "养鱼所需材料清单",
    description: "从鱼缸到滤材，从鱼食到工具，一份完整的养鱼材料清单助您做好准备。",
    pageLink: "/materials-checklist",
    pageLinkLabel: "查看清单",
    imageUrl: "/images/materials_checklist_illustration.png",
  },
  {
    title: "过滤系统选择",
    description: "了解各种过滤系统的原理和优缺点，为您的鱼缸选择最合适的“肾脏”。",
    pageLink: "/filtration-system",
    pageLinkLabel: "选择过滤",
    imageUrl: "/images/filtration_system_illustration.png",
  },
  {
    title: "开缸与养水",
    description: "学习如何正确开缸并培养稳定的硝化系统，为鱼儿提供健康水环境。",
    pageLink: "/tank-cycling",
    pageLinkLabel: "学习开缸",
    imageUrl: "/images/tank_cycling_illustration.png",
  },
  {
    title: "常见鱼病预防与处理",
    description: "了解常见鱼病的症状、预防措施和初步处理方法，保护您的爱鱼健康。",
    pageLink: "/disease-prevention",
    pageLinkLabel: "了解鱼病",
    imageUrl: "/images/disease_prevention_illustration.png",
  },
  {
    title: "更多学习资源",
    description: "如何在小红书、抖音等平台寻找优质养鱼教程和经验分享。",
    pageLink: "/learning-resources",
    pageLinkLabel: "发现更多",
    imageUrl: "/images/learning_resources_illustration.png",
  },
];

// Card Component
function ContentCard({ title, description, imageUrl, linkUrl, linkLabel, pageLink, pageLinkLabel }: ContentCardProps) {
  return (
    <div className="bg-card text-card-foreground rounded-xl border shadow-lg overflow-hidden transition-all hover:shadow-xl flex flex-col">
      {imageUrl && (
        <div className="aspect-[16/9] bg-muted flex items-center justify-center overflow-hidden">
          <img src={imageUrl} alt={title} className="object-cover w-full h-full" />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {pageLink && pageLinkLabel && (
            <Link href={pageLink} className={buttonVariants({ variant: "default", size: "sm" }) }>
              {pageLinkLabel}
            </Link>
          )}
          {linkUrl && linkLabel && (
            <Link href={linkUrl} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "outline", size: "sm" }) }>
              {linkLabel} <Icons.externalLink className="ml-2 h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default function IndexPage() {
  return (
    <section className="container mx-auto py-8 px-4 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl mb-4">
          {siteConfig.name}
        </h1>
        <p className="max-w-[700px] mx-auto text-lg text-muted-foreground">
          {siteConfig.description}
        </p>
      </div>

      {/* Grid for Content Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {fishkeepingSections.map((section) => (
          <ContentCard key={section.title} {...section} />
        ))}
      </div>

      {/* Section for general external resources like Xiaohongshu */}
      <div className="mt-12 p-6 bg-card rounded-xl border shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">小红书养鱼精华</h2>
        <p className="text-muted-foreground mb-6 text-center">
          在小红书上探索更多养鱼技巧、鱼缸美图和经验分享：
        </p>
        <div className="flex justify-center">
          <Link 
            href="https://www.xiaohongshu.com/search_result/?keyword=%E6%96%B0%E6%89%8B%E5%85%BB%E9%B1%BC%E6%94%BB%E7%95%A5" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={buttonVariants({variant: "default", size: "lg"})}
          >
            前往小红书：新手养鱼攻略 <Icons.externalLink className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

