import ContentPageLayout from "@/components/ContentPageLayout";

export default function HeatingGuidePage() {
  const pageTitle = "鱼缸加热棒：选择、使用与安全指南";
  const imageUrl = "/images/heating_guide_illustration.png";

  const heaterTypes = [
    {
      name: "玻璃加热棒",
      pros: ["价格相对便宜", "透明管体，部分品牌内部结构可见"],
      cons: ["易碎，操作或受外力撞击时需小心", "部分劣质产品温控可能不准"],
      icon: "🌡️",
    },
    {
      name: "不锈钢加热棒",
      pros: ["坚固耐用，不易损坏", "导热性较好"],
      cons: ["价格通常高于玻璃加热棒", "无法观察内部情况"],
      icon: "🔩",
    },
    {
      name: "石英加热棒",
      pros: ["耐高温骤变性好，不易爆裂", "部分产品有防爆涂层"],
      cons: ["价格可能较高"],
      icon: "💎",
    },
    {
      name: "PTC陶瓷加热棒",
      pros: ["安全性较高，过热时功率会自动降低", "节能"],
      cons: ["价格通常较高", "升温速度可能相对慢一些"],
      icon: "🔥",
    },
    {
      name: "缸外加热器/过滤桶内置加热",
      pros: ["不占用缸内空间，美观", "加热均匀性可能更好"],
      cons: ["价格高，安装相对复杂", "通常配合过滤桶使用"],
      icon: "外部",
    },
  ];

  const selectionTips = [
    {
      tip: "功率选择",
      details: "一般按鱼缸水体容量选择，如1升水对应1.5-2W功率。例如100升水可选150W-200W加热棒。选择稍大功率可减少加热棒工作时间，但过大可能导致水温波动剧烈。",
      icon: "💡",
    },
    {
      tip: "品牌与质量",
      details: "选择知名品牌、有良好口碑的产品，质量更有保障，温控更精准，安全性更高。切勿贪便宜购买三无产品。",
      icon: "🏷️",
    },
    {
      tip: "温控精度",
      details: "选择温控精度高的加热棒，能更准确地维持设定水温，避免水温大幅波动。",
      icon: "🎯",
    },
    {
      tip: "安全特性",
      details: "关注是否有离水断电、过热保护、防爆等安全功能。",
      icon: "🛡️",
    },
    {
      tip: "长度适宜",
      details: "加热棒长度应能完全浸没在水中，且加热部分不应接触底砂或缸壁。",
      icon: "📏",
    },
  ];

  const usageSafety = [
    "<strong>首次使用前检查：</strong>检查加热棒是否有裂痕或损坏，特别是玻璃材质的。",
    "<strong>必须完全浸没：</strong>加热棒必须完全浸没在水中才能通电工作，露出水面干烧极易损坏甚至引发危险。",
    "<strong>固定牢靠：</strong>使用吸盘将加热棒牢固地固定在缸壁水流通常处，避免被鱼撞歪或掉落。",
    "<strong>配合温度计：</strong>务必在鱼缸中放置一支准确的温度计，实时监测水温，不要完全依赖加热棒的设定温度。",
    "<strong>逐步调温：</strong>需要调整水温时，应缓慢进行，每次调整幅度不宜过大（如不超过1-2℃/天）。",
    "<strong>换水或维护前断电：</strong>进行换水、清洗鱼缸或取出加热棒等操作前，务必先切断加热棒电源，并等待其冷却一段时间（至少15-30分钟），防止烫伤或加热棒因温差骤变而损坏（特别是玻璃棒）。",
    "<strong>避免儿童触碰：</strong>确保加热棒及电源线远离儿童可触及范围。",
    "<strong>定期检查与更换：</strong>定期检查加热棒工作状态和吸盘是否老化。加热棒有使用寿命，一般建议1-2年更换一次，以防老化失效或发生意外。",
    "<strong>备用加热棒：</strong>对于饲养热带鱼的地区，冬季最好准备一支备用加热棒，以防主力加热棒突然损坏。",
  ];

  return (
    <ContentPageLayout title={pageTitle} imageUrl={imageUrl}>
      <section>
        <h2>引言：恒定水温，鱼儿舒适生活的保障</h2>
        <p>
          对于许多热带观赏鱼来说，一个稳定且适宜的水温是它们健康成长的关键。鱼缸加热棒作为维持水温的核心设备，其重要性不言而喻。正确选择和安全使用加热棒，能为您的爱鱼提供一个舒适的生活环境，预防因水温波动引起的疾病。
        </p>
      </section>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">加热棒种类大盘点：哪款适合您？</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {heaterTypes.map((type) => (
            <div key={type.name} className="p-4 border rounded-lg shadow-sm bg-white">
              <h4 className="text-lg font-medium text-blue-600 flex items-center">
                <span className="text-2xl mr-2">{type.icon}</span>
                {type.name}
              </h4>
              <div className="mt-2 text-xs space-y-1">
                <p><strong>优点：</strong>{type.pros.join("， ")}</p>
                <p><strong>缺点：</strong>{type.cons.join("， ")}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">加热棒选购五大要点：精明选择不踩坑</h3>
        <div className="space-y-4">
          {selectionTips.map((item) => (
            <div key={item.tip} className="p-4 border rounded-lg shadow-sm bg-gray-50 flex items-start">
              <span className="text-3xl mr-4 text-green-500">{item.icon}</span>
              <div>
                <h4 className="text-lg font-medium text-gray-700">{item.tip}</h4>
                <p className="text-sm text-gray-600 mt-1">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 bg-red-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-red-700 mb-3">加热棒使用安全“红宝书”：牢记九大守则</h3>
        <ul className="list-decimal list-inside space-y-2 text-sm text-gray-700">
          {usageSafety.map((rule, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: rule }} />
          ))}
        </ul>
        <p className="mt-4 text-xs text-red-600">
          <strong>特别提醒：</strong>安全无小事！加热棒使用不当可能导致设备损坏、鱼只伤亡甚至火灾等安全事故。请务必严格遵守使用规范。
        </p>
      </section>

      <section className="mt-8">
        <h2>结语：温暖水世界，从安全用好加热棒开始</h2>
        <p>
          选择一款合适的加热棒并正确安全地使用它，是为您的水族宠物营造稳定舒适生活环境的重要一环。希望本指南能帮助您更好地了解和使用鱼缸加热棒，让您的养鱼生活更加安心和愉快。
        </p>
      </section>
    </ContentPageLayout>
  );
}

