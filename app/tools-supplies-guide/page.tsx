import ContentPageLayout from "@/components/ContentPageLayout";

export default function ToolsSuppliesGuidePage() {
  const pageTitle = "养鱼工具与用品清单：新手必备与进阶选择";
  const imageUrl = "/images/tools_supplies_guide_illustration.png";

  const essentialTools = [
    {
      name: "鱼缸 (Aquarium/Tank)",
      details: "主体容器，材质、大小、形状需根据饲养鱼种和数量选择。",
      icon: "缸",
    },
    {
      name: "过滤器 (Filter)",
      details: "维持水质清洁的核心设备，类型多样（如上滤、滤筒、瀑布、水妖精等）。",
      icon: "💧",
    },
    {
      name: "加热棒 (Heater)",
      details: "饲养热带鱼必备，用于维持恒定水温。需配合温度计使用。",
      icon: "🌡️",
    },
    {
      name: "温度计 (Thermometer)",
      details: "实时监测水温，确保鱼只生活在适宜温度。",
      icon: "📊",
    },
    {
      name: "鱼缸灯 (Aquarium Light)",
      details: "提供照明，利于观赏，水草缸则为水草光合作用必需。",
      icon: "💡",
    },
    {
      name: "底砂/底床 (Substrate)",
      details: "可选，如河沙、砾石、水草泥等，影响美观、水质和部分鱼类习性。",
      icon: "🏖️",
    },
    {
      name: "渔网 (Fish Net)",
      details: "用于捞鱼、清理漂浮物等，准备大小不同规格更佳。",
      icon: "🕸️",
    },
    {
      name: "水桶 (Bucket)",
      details: "养鱼专用，用于换水、困水、清洗器材等，避免与家用清洁桶混用。",
      icon: "🪣",
    },
    {
      name: "虹吸管/洗沙器 (Siphon/Gravel Cleaner)",
      details: "换水、清理底床粪便和食物残渣的必备工具。",
      icon: "🧹",
    },
    {
      name: "水质稳定剂/硝化细菌 (Water Conditioner/Nitrifying Bacteria)",
      details: "前者用于去除自来水中的氯和重金属；后者用于帮助建立和维护硝化系统。",
      icon: "🧪",
    },
    {
      name: "鱼食 (Fish Food)",
      details: "根据鱼种选择合适的饲料，如颗粒饲料、薄片饲料、贴片饲料、活饵、冻饵等。",
      icon: "🐠🍴",
    },
  ];

  const optionalAdvancedTools = [
    {
      name: "水质测试剂/测试笔 (Water Test Kits/Pens)",
      details: "用于检测pH、亚硝酸盐(NO2)、硝酸盐(NO3)、氨(NH3/NH4)、GH、KH等水质参数。",
      icon: "🔬",
    },
    {
      name: "刮藻刀/刮藻刷 (Algae Scraper/Brush)",
      details: "用于清除缸壁上的藻类。",
      icon: "🔪",
    },
    {
      name: "隔离盒/繁殖盒 (Breeding Box/Isolation Box)",
      details: "用于隔离病鱼、待产母鱼或小鱼。",
      icon: "📦",
    },
    {
      name: "CO2供应系统 (CO2 System)",
      details: "水草缸进阶设备，为水草提供充足二氧化碳促进生长。包含CO2气瓶、减压阀、细化器等。",
      icon: "💨",
    },
    {
      name: "增氧泵/气泵 (Air Pump)",
      details: "通过气石或水妖精增加水中溶氧量，高温或高密度饲养时常用。",
      icon: "🌬️",
    },
    {
      name: "UV杀菌灯 (UV Sterilizer)",
      details: "用于杀灭水中的细菌、病毒和藻类孢子，辅助控制水质和预防疾病。需注意使用安全。",
      icon: "☀️",
    },
    {
      name: "喂食器 (Automatic Feeder)",
      details: "可设定时间和分量自动喂食，适合短期外出时使用。",
      icon: "🤖",
    },
    {
      name: "水草剪刀/镊子 (Aquascaping Scissors/Tweezers)",
      details: "水草缸造景和修剪水草的专用工具。",
      icon: "✂️",
    },
    {
      name: "纯水机/RO机 (RO/DI System)",
      details: "用于制造纯净水，适合对水质要求较高的鱼种（如水晶虾）或海水缸。",
      icon: "💧⚙️",
    },
    {
      name: "备用加热棒/过滤器材",
      details: "关键设备损坏时能及时替换，避免造成损失。",
      icon: "➕",
    },
  ];

  const purchaseTips = [
    "<strong>按需购买：</strong>新手初期不必一次购齐所有用品，可根据实际需求逐步添置。",
    "<strong>质量优先：</strong>在预算范围内，尽量选择质量可靠、口碑好的品牌产品，尤其对于过滤器、加热棒等核心设备。",
    "<strong>了解鱼种需求：</strong>不同鱼种对设备和用品的需求不同，购买前做好功课。",
    "<strong>货比三家：</strong>多比较不同品牌、型号产品的性能和价格。",
    "<strong>考虑长远：</strong>部分用品（如较大的鱼缸、高效的过滤器）初期投入较高，但可能更适合长期发展。",
  ];

  return (
    <ContentPageLayout title={pageTitle} imageUrl={imageUrl}>
      <section>
        <h2>引言：“工欲善其事，必先利其器”</h2>
        <p>
          踏入精彩的养鱼世界，一套合适的工具和用品是您顺利开启并享受养鱼乐趣的基础保障。从鱼缸本身到维持水质的设备，再到日常维护的小工具，了解并准备好这些“兵器”，能让您的养鱼之路更加得心应手，也能为爱鱼提供一个健康舒适的家。
        </p>
      </section>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">新手养鱼必备工具与用品清单</h3>
        <p className="text-sm text-gray-600 mb-4">以下是新手入门时建议优先准备的基础工具和用品：</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {essentialTools.map((tool) => (
            <div key={tool.name} className="p-4 border rounded-lg shadow-sm bg-white">
              <h4 className="text-lg font-medium text-blue-600 flex items-center">
                <span className="text-2xl mr-2">{tool.icon}</span>
                {tool.name}
              </h4>
              <p className="text-xs text-gray-600 mt-1">{tool.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">进阶与可选工具用品：提升养鱼体验</h3>
        <p className="text-sm text-gray-600 mb-4">当您积累了一定经验或有特定需求（如水草造景、繁殖等）时，可以考虑添置以下用品：</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {optionalAdvancedTools.map((tool) => (
            <div key={tool.name} className="p-4 border rounded-lg shadow-sm bg-gray-50">
              <h4 className="text-lg font-medium text-green-600 flex items-center">
                <span className="text-2xl mr-2">{tool.icon}</span>
                {tool.name}
              </h4>
              <p className="text-xs text-gray-600 mt-1">{tool.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 bg-indigo-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-indigo-700 mb-3">选购工具用品小贴士</h3>
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
          {purchaseTips.map((tip, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: tip }} />
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2>结语：装备齐全，养鱼更轻松</h2>
        <p>
          准备齐全合适的工具和用品，是成功养鱼的重要前提。希望这份清单能帮助您更好地规划您的养鱼装备。随着经验的增长，您会逐渐发现哪些工具最适合您的需求，并不断完善您的“军火库”。祝您养鱼愉快！
        </p>
      </section>
    </ContentPageLayout>
  );
}

