import ContentPageLayout from "@/components/ContentPageLayout";

export default function TankCyclingPage() {
  const pageTitle = "开缸养水全攻略：从零打造完美水世界";
  const imageUrl = "/images/tank_cycling_illustration.png";

  const cyclingSteps = [
    {
      day: "第1天：准备就绪",
      actions: [
        "彻底清洗鱼缸、底砂（若用）、过滤器、滤材等所有设备（禁用化学清洁剂）。",
        "安装好所有设备，鱼缸注满困好的水或用稳定剂处理过的水。",
        "开启过滤器、加热棒（调至25-28℃），确保24小时运行。",
      ],
      icon: "🛠️",
    },
    {
      day: "第1-2天：引入“硝化菌的口粮” (氨源)",
      actions: [
        "<strong>推荐方法：</strong>从稳定老缸中引入少量老水或一小块旧滤材（如过滤棉），这是最快最安全的方法。",
        "<strong>替代方法1 (闯缸鱼法 - 需谨慎)：</strong>放入1-2条皮实的鱼（如斑马鱼），其排泄物产生氨。对鱼有风险。",
        "<strong>替代方法2 (鱼食法)：</strong>每日投入少量鱼食任其分解。",
        "<strong>替代方法3 (纯氨水法 - 专业人士)：</strong>精确滴加无添加纯氨水至2-4ppm。新手不推荐。",
      ],
      icon: "🦠",
    },
    {
      day: "第1周 - 第4周+：耐心培养与监测",
      actions: [
        "可按说明添加市售硝化细菌制剂，辅助启动。",
        "保持水温稳定，过滤持续运行，氧气充足。",
        "<strong>水质监测 (推荐)：</strong>使用测试剂检测氨(NH₃/NH₄⁺)、亚硝酸盐(NO₂⁻)、硝酸盐(NO₃⁻)浓度。",
        "典型变化：氨升高 -> 氨下降，亚硝酸盐升高 -> 亚硝酸盐下降，硝酸盐升高。",
        "此过程约2-6周，期间尽量不大规模换水。若氨或亚硝酸盐过高（如超5ppm），可少量换水10-20%。",
      ],
      icon: "⏳",
    },
    {
      day: "系统稳定：放鱼！",
      actions: [
        "当连续数日检测到氨和亚硝酸盐均为零，且硝酸盐有读数时，表明硝化系统已建立。",
        "<strong>少量分批放鱼：</strong>切忌一次性放入大量鱼，以免系统崩溃。每周增加几条为宜。",
        "放鱼后继续密切关注水质和鱼的状态。",
      ],
      icon: "🐠",
    },
  ];

  return (
    <ContentPageLayout title={pageTitle} imageUrl={imageUrl}>
      <section>
        <h2>“养鱼先养水”：揭秘水族成功的基石</h2>
        <p>
          这句水族界的黄金法则，点明了水质对养鱼的决定性作用。所谓“养水”，核心就是在新鱼缸中建立并稳定一个强大的<strong>硝化细菌系统</strong>。这些看不见的微生物是您水族箱的“清洁工”，能将鱼儿产生的有毒废物转化为无害物质。这个过程被称为“开缸”或“闯缸”，是所有成功养鱼故事的序章。
        </p>
      </section>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-2 text-gray-700">硝化细菌：您鱼缸里的“超级英雄”</h3>
        <p className="text-gray-600">
          硝化细菌是一类好氧细菌，它们通过两步将鱼的排泄物和食物残渣产生的剧毒<strong>氨 (NH₃/NH₄⁺)</strong> 转化为毒性较低的<strong>亚硝酸盐 (NO₂⁻)</strong>，再进一步转化为毒性更低的<strong>硝酸盐 (NO₃⁻)</strong>。硝酸盐最终通过定期换水去除。这个完整的氮循环过程，是维持鱼缸生态平衡的关键。
        </p>
      </section>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">开缸养水四步走：手把手教您建立完美水质</h3>
        <div className="space-y-6">
          {cyclingSteps.map((step) => (
            <div key={step.day} className="p-4 border rounded-lg shadow-sm bg-white">
              <h4 className="text-xl font-medium text-blue-600 flex items-center">
                <span className="text-3xl mr-3">{step.icon}</span>
                {step.day}
              </h4>
              <ul className="list-disc list-inside space-y-1 mt-2 text-sm text-gray-700">
                {step.actions.map((action, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: action }} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 bg-yellow-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-yellow-700 mb-3">开缸养水关键点与常见误区：</h3>
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
          <li><strong>耐心至上：</strong>开缸养水急不来，给硝化细菌足够的时间繁殖。</li>
          <li><strong>稳定环境：</strong>保持水温、pH值（弱碱性环境更佳）稳定，过滤24小时运行。</li>
          <li><strong>充足氧气：</strong>硝化细菌是好氧菌，确保水体溶氧充足。</li>
          <li><strong>避免“好心办坏事”：</strong>养水期间避免使用杀菌药物或频繁彻底换水，这会杀死或冲走宝贵的硝化细菌。</li>
          <li><strong>光照控制：</strong>开缸初期可减少光照，避免藻类过早爆发抢夺养分。</li>
          <li><strong>误区：只加硝化细菌液就完事。</strong>硝化细菌需要“食物”（氨源）和附着表面（滤材）才能定植和繁殖，单纯加菌液效果有限。</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2>养水成功：迎接您的水下精灵！</h2>
        <p>
          当您的鱼缸水质稳定，氨和亚硝酸盐浓度降为零时，恭喜您，已经成功养出了一缸“活水”！现在，您可以满怀信心地迎接您心爱的鱼儿了。记住，一个健康的开始，是享受养鱼乐趣的最佳保障。祝您的水族之旅充满喜悦与发现！
        </p>
      </section>
    </ContentPageLayout>
  );
}

