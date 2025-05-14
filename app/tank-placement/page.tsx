import ContentPageLayout from "@/components/ContentPageLayout";

export default function TankPlacementPage() {
  const pageTitle = "鱼缸摆放黄金法则：为爱鱼选个好位置";
  const imageUrl = "/images/tank_placement_illustration.png";

  const placementFactors = [
    {
      factor: "避免阳光直射",
      details: "长时间阳光直射会导致水温剧烈波动，诱发藻类爆发，影响水质和观赏。",
      icon: "☀️", // Placeholder for a sun icon or similar
    },
    {
      factor: "远离热源/冷源",
      details: "避免靠近暖气片、空调出风口、取暖器等，以防剧烈水温变化。",
      icon: "♨️", // Placeholder for a heat/cold icon
    },
    {
      factor: "平稳承重",
      details: "确保放置平台（地面、柜子）稳固，能承受鱼缸满水后的总重量（可能超百公斤）。",
      icon: "⚖️", // Placeholder for a balance scale icon
    },
    {
      factor: "方便维护与观察",
      details: "鱼缸周围留足操作空间，便于换水、清洁、喂食和日常观察。",
      icon: "👀", // Placeholder for an eye icon
    },
    {
      factor: "电源安全",
      details: "附近有安全可靠的电源插座，注意电线整理和防潮防水。",
      icon: "🔌", // Placeholder for a plug icon
    },
    {
      factor: "避免震动和嘈杂",
      details: "选择相对安静、少人走动的地方，避免惊扰鱼儿。",
      icon: "🤫", // Placeholder for a shushing face icon
    },
    {
      factor: "适当通风",
      details: "保持鱼缸周围空气清新，但避免强对流风口直吹。",
      icon: "💨", // Placeholder for a wind icon
    },
  ];

  const fengShuiTips = [
    "不宜摆放在沙发背后（寓意无靠山）。",
    "不宜正对厨房灶台（水火相冲）。",
    "不宜摆放在卧室（湿气重，影响睡眠）。",
    "不宜摆放在神位下方或正对神位。",
    "适宜摆放在客厅的“财位”（如入门对角线）。",
  ];

  return (
    <ContentPageLayout title={pageTitle} imageUrl={imageUrl}>
      <section>
        <h2>给鱼缸“安家”：位置选对，养鱼事半功倍</h2>
        <p>
          一个精心选择的鱼缸摆放位置，不仅能让您的爱鱼健康成长，还能提升观赏体验，并让日常维护更加轻松。这就像给新家选址一样重要！请遵循以下“黄金法则”，为您的水下伙伴们找到最佳“风水宝地”。
        </p>
      </section>

      <section className="mt-8">
        <h2>一、科学养鱼：七大核心摆放原则</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {placementFactors.map((item) => (
            <div key={item.factor} className="p-4 border rounded-lg shadow hover:shadow-md transition-shadow bg-white">
              <h3 className="text-lg font-semibold mb-2 text-blue-600 flex items-center">
                <span className="text-2xl mr-2">{item.icon}</span>
                {item.factor}
              </h3>
              <p className="text-sm text-gray-700">{item.details}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 bg-blue-50 p-4 rounded-lg">
          <h3 className="text-md font-semibold text-blue-700 mb-2">特别提醒：承重安全第一！</h3>
          <p className="text-sm text-gray-700">
            一个60厘米的鱼缸装满水、底砂和造景石后，重量可轻松超过 <strong>100公斤</strong>！务必选择坚固平稳的专用鱼缸柜或承重能力足够的家具。老旧家具或简易置物架可能无法承受如此重量，存在安全隐患。
          </p>
        </div>
      </section>

      <section className="mt-8">
        <h2>二、锦上添花：其他考量因素</h2>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <strong>观赏便利性：</strong> 选择您和家人经常停留且视线舒适的位置，如客厅沙发旁、书房工作区附近，让鱼缸成为家中一道赏心悦目的风景。
          </li>
          <li>
            <strong>儿童与宠物安全：</strong> 如果家中有小孩或好奇的宠物，要考虑鱼缸的稳固性，避免被推倒或损坏。必要时可选择带盖的鱼缸，或将鱼缸放置在它们不易接触到的地方。
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2>三、传统智慧：鱼缸风水小贴士 (仅供参考)</h2>
        <p>
          在中国传统文化中，鱼缸的摆放也与“风水”相关联，认为能招财纳福。以下是一些常见的风水说法，您可以根据个人信仰选择性参考，不必过于拘泥：
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2 text-sm text-gray-600">
          {fengShuiTips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
        <p className="mt-2 text-xs text-gray-500">
          <em>风水学说仅为传统文化的一部分，科学养鱼、为鱼儿提供稳定舒适的环境始终是首要考虑。</em>
        </p>
      </section>

      <section className="mt-8">
        <h2>总结：理想位置 = 健康鱼儿 + 愉悦心情</h2>
        <p>
          综合考量光照、温度、承重、安全、维护便利性和个人喜好，为您的鱼缸找到一个理想的“家”。一个好的开始，能让您的养鱼之路更加顺畅，让您和您的爱鱼都能享受到这份水下情缘带来的宁静与喜悦。
        </p>
      </section>
    </ContentPageLayout>
  );
}

