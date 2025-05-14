import ContentPageLayout from "@/components/ContentPageLayout";

export default function BasicKnowledgePage() {
  const pageTitle = "养鱼核心常识：新手入门必修课";
  const imageUrl = "/images/basic_knowledge_illustration.png";

  const coreKnowledge = [
    {
      title: "养鱼先养水：水族界的“第一定律”",
      content: "这是所有养鱼经验的基石。所谓“养水”，核心是培养硝化细菌。这些微小的“清洁工”能分解鱼的粪便和食物残渣产生的有毒物质（氨和亚硝酸盐），将其转化为相对无害的硝酸盐。这个过程通常在新缸开启时进行，称为“开缸”或“闯缸”，需要数周时间。只有水“养熟”了，鱼才能健康生活。",
      icon: "💧",
    },
    {
      title: "水温控制：稳定是关键",
      content: "大部分观赏鱼是热带鱼，适宜水温在22-28℃。关键在于“稳定”，避免水温短时间内剧烈波动（如日温差超过2-3℃），否则鱼极易生病。因此，可靠的加热棒和温度计是必备品。",
      icon: "🌡️",
    },
    {
      title: "科学喂食：七分饱，保健康",
      content: "遵循“定时、定量、定点”原则。每日1-2次，每次投喂量以鱼儿在3-5分钟内吃完为宜。宁少勿多，过量投喂会污染水质并导致鱼消化不良。观察鱼的食欲，若拒食可能是水质或健康出问题。选择优质、适合鱼种的饲料。",
      icon: "🐠",
    },
    {
      title: "定期换水：保持水质清新",
      content: "换水能去除积累的硝酸盐和有机废物，补充微量元素。通常建议每周换水1/4至1/3。换水前自来水需“困水”（晾晒1-2天除氯）或使用水质稳定剂。新水水温应与缸内水温基本一致（温差不超1-2℃），缓慢加入。",
      icon: "🔄",
    },
    {
      title: "高效过滤：鱼缸的“肾脏”",
      content: "强大的过滤系统是维持水质的核心。包含物理过滤（如过滤棉，清除固体杂质）和生物过滤（培养硝化细菌的滤材，如陶瓷环、细菌屋）。过滤系统需24小时不间断运行。",
      icon: "🌊",
    },
    {
      title: "日常观察：做个细心的“鱼管家”",
      content: "每日观察鱼的行为、体表、食欲是否正常。记录换水日期、水质数据等，有助于了解鱼缸规律，及时发现并处理问题。",
      icon: "🧐",
    },
  ];

  return (
    <ContentPageLayout title={pageTitle} imageUrl={imageUrl}>
      <section>
        <h2>养鱼入门：从理解这些“水下规则”开始</h2>
        <p>
          欢迎来到奇妙的水族世界！在您迎接可爱的鱼儿回家之前，掌握一些基本的养鱼常识至关重要。这些知识点看似简单，却是确保您的水下伙伴们健康、快乐生活的基石。让我们一起学习这些“水下规则”吧！
        </p>
      </section>

      <div className="space-y-6 mt-6">
        {coreKnowledge.map((item) => (
          <div key={item.title} className="p-4 border rounded-lg shadow hover:shadow-md transition-shadow bg-white">
            <h3 className="text-xl font-semibold mb-2 text-blue-600 flex items-center">
              <span className="text-3xl mr-3">{item.icon}</span>
              {item.title}
            </h3>
            <p className="text-gray-700 whitespace-pre-line">{item.content}</p>
          </div>
        ))}
      </div>

      <section className="mt-8">
        <h2>新手养鱼常见误区提醒：</h2>
        <ul className="list-disc list-inside space-y-2 mt-2 bg-red-50 p-4 rounded-lg text-red-700">
          <li><strong>误区一：新缸买回就放鱼。</strong> 正确做法是必须先“养水”，建立稳定的硝化系统。</li>
          <li><strong>误区二：喂食越多越好。</strong> 过量喂食是污染水质、导致鱼病的主要原因之一。</li>
          <li><strong>误区三：频繁彻底大换水。</strong> 这样会破坏已建立的硝化系统，导致水质剧烈波动。</li>
          <li><strong>误区四：鱼生病就乱下药。</strong> 应先明确病因，对症下药，避免滥用药物。</li>
          <li><strong>误区五：过滤系统时开时关。</strong> 硝化细菌需要持续的水流和氧气，过滤必须24小时运行。</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2>总结：用心学习，轻松养鱼</h2>
        <p>
          掌握这些基本常识，并将其运用到日常照料中，您的养鱼之路会更加顺畅。记住，养鱼是一个不断学习和实践的过程，多观察、多思考，您一定能成为一名出色的“鱼管家”，与您的爱鱼共享美好时光！
        </p>
      </section>
    </ContentPageLayout>
  );
}

