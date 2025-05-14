import ContentPageLayout from "@/components/ContentPageLayout";

export default function LearningResourcesPage() {
  const pageTitle = "进阶学习：解锁海量在线养鱼资源";
  const imageUrl = "/images/learning_resources_illustration.png";

  const platforms = [
    {
      name: "小红书 (Xiaohongshu)",
      description: "生活方式平台，聚集大量养鱼爱好者，图文笔记与短视频丰富。",
      advantages: [
        "内容直观、图文并茂、更新快。",
        "真实个人经验分享、避坑指南多。",
        "互动性强，可直接向博主提问。",
      ],
      tips: [
        "关注粉丝多、内容专业、持续更新的博主。",
        "注意辨别信息真实性与适用性，勿盲从。",
      ],
      keywords: ["新手养鱼", "鱼缸造景", "孔雀鱼饲养", "水草缸教程", "养鱼日记"],
      icon: "📱",
    },
    {
      name: "抖音 / 快手 (Douyin / Kuaishou)",
      description: "短视频平台，快速获取养鱼技巧、设备评测、鱼病处理等教程。",
      advantages: [
        "视频形式生动直观，操作演示清晰。",
        "学习门槛低，内容丰富多样。",
      ],
      tips: [
        "选择讲解清晰、逻辑性强、有实际操作的视频。",
        "警惕过度营销和夸大宣传。",
      ],
      keywords: ["养鱼教学", "水族知识", "鱼缸维护", "观赏鱼技巧"],
      icon: "📹",
    },
    {
      name: "B站 (Bilibili)",
      description: "知名视频弹幕网站，拥有大量优质UP主和深度、系统性养鱼教程。",
      advantages: [
        "内容深度与广度兼具，多长视频教程。",
        "学习氛围浓厚，弹幕评论区有价值讨论多。",
      ],
      tips: [
        "关注有系列教程、内容详实、讲解专业的UP主。",
        "参考视频播放量、点赞数和评论反馈。",
      ],
      keywords: ["水草缸", "原生缸", "观赏鱼饲养教程", "水族开箱", "鱼缸DIY"],
      icon: "📺",
    },
    {
      name: "微信公众号与视频号",
      description: "水族品牌、店家、资深鱼友和媒体发布养鱼知识、行业动态。",
      advantages: ["信息相对权威 (品牌方或媒体号)。", "可关注特定领域获取精准信息。"],
      tips: ["选择定期更新、内容原创、有深度分析的公众号。"],
      keywords: ["水族", "观赏鱼", "养鱼经验"],
      icon: "💬",
    },
    {
      name: "专业水族论坛与网站",
      description: "如南美水族、泡泡水族等，获取系统知识、交流疑难杂症。",
      advantages: [
        "信息系统性强，多专题讨论和技术文章。",
        "用户群体相对专业，沉淀大量精华帖。",
      ],
      tips: ["选择活跃度高、管理规范、精华帖多的论坛。"],
      keywords: ["水族论坛", "观赏鱼论坛", "鱼病求助"],
      icon: "🌐",
    },
  ];

  const generalTips = [
    "<strong>批判性学习：</strong>网络信息繁杂，注意辨别真伪和适用性，勿盲目照搬。",
    "<strong>结合实践：</strong>理论学习需与实际操作结合，在实践中总结经验。",
    "<strong>尊重原创：</strong>学习和分享时，尊重他人知识产权。",
    "<strong>安全第一：</strong>参考DIY教程或药物治疗等操作时，务必注意安全。",
  ];

  return (
    <ContentPageLayout title={pageTitle} imageUrl={imageUrl}>
      <section>
        <h2>拥抱互联网：开启您的养鱼进阶之旅</h2>
        <p>
          互联网时代为我们学习养鱼知识提供了前所未有的便利。除了传统的书籍和经验交流，各类社交媒体平台和视频网站也涌现出大量优质的养鱼教程、经验分享和社群互动。善用这些资源，能让您的养鱼之路更加轻松有趣，并助您快速从新手小白成长为养鱼达人！
        </p>
      </section>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">主流在线学习平台一览：总有一款适合您</h3>
        <div className="space-y-6">
          {platforms.map((platform) => (
            <div key={platform.name} className="p-4 border rounded-lg shadow-sm bg-white">
              <h4 className="text-xl font-medium text-blue-600 flex items-center">
                <span className="text-3xl mr-3">{platform.icon}</span>
                {platform.name}
              </h4>
              <p className="text-sm text-gray-600 mt-1 mb-2">{platform.description}</p>
              <div className="mb-2">
                <strong className="text-sm text-green-600">优点：</strong>
                <ul className="list-disc list-inside text-xs text-gray-700 pl-4">
                  {platform.advantages.map((adv, i) => <li key={i}>{adv}</li>)}
                </ul>
              </div>
              <div className="mb-2">
                <strong className="text-sm text-orange-600">筛选小技巧：</strong>
                <ul className="list-disc list-inside text-xs text-gray-700 pl-4">
                  {platform.tips.map((tip, i) => <li key={i}>{tip}</li>)}
                </ul>
              </div>
              <div>
                <strong className="text-sm text-purple-600">推荐搜索关键词：</strong>
                <div className="flex flex-wrap gap-1 mt-1">
                  {platform.keywords.map((keyword, i) => (
                    <span key={i} className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 bg-yellow-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-yellow-700 mb-3">在线学习“避坑”指南：</h3>
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
          {generalTips.map((tip, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: tip }} />
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2>结语：学无止境，乐在其中</h2>
        <p>
          养鱼是一门实践性很强的爱好，也是一个不断学习、不断探索的过程。希望以上介绍的在线学习资源和方法，能帮助您更高效地获取知识，解决遇到的问题，并在分享与交流中找到更多乐趣。祝您的水族世界日益精彩！
        </p>
      </section>
    </ContentPageLayout>
  );
}

