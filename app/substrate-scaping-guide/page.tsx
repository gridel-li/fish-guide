import ContentPageLayout from "@/components/ContentPageLayout";

export default function SubstrateScapingGuidePage() {
  const pageTitle = "底砂选择与水族造景：打造迷人水下景观";
  const imageUrl = "/images/substrate_scaping_guide_illustration.png";

  const substrateTypes = [
    {
      name: "天然河沙/化妆沙 (Natural River Sand/Cosmetic Sand)",
      pros: [
        "自然美观，颜色多样，可营造不同风格。",
        "颗粒细小，适合底栖鱼类（如鼠鱼、部分异形）活动和觅食。",
        "部分惰性沙不影响水质硬度。",
      ],
      cons: [
        "较细的沙容易被吸入过滤器，需注意保护。",
        "部分沙质可能偏碱性，需测试。",
        "肥力较低，不适合直接种植大部分水草（除非配合基肥或液肥）。",
      ],
      icon: "🏖️",
    },
    {
      name: "砾石/小石子 (Gravel/Pebbles)",
      pros: [
        "颗粒较大，不易被吸走，清洁相对容易。",
        "颜色、形状多样，选择丰富。",
        "透气性较好，有利于硝化细菌附着。",
      ],
      cons: [
        "缝隙较大，容易堆积食物残渣和粪便，需定期清理。",
        "不适合需要钻沙习性的鱼类。",
        "肥力低，不适合直接种植水草。",
      ],
      icon: "🪨",
    },
    {
      name: "水草泥 (Aquatic Plant Soil/Substrate)",
      pros: [
        "专为水草设计，富含养分，能缓慢释放肥力，促进水草生长。",
        "具有一定的降酸软水效果，适合弱酸性软水环境的水草和鱼类。",
        "颗粒状，有利于水草扎根。",
      ],
      cons: [
        "价格相对较高。",
        "初期使用可能导致水体浑浊（黄水），需多次换水或使用活性炭。",
        "有使用寿命，一般1-2年后肥力会逐渐耗尽。",
        "部分水草泥较轻，大型鱼或底栖鱼可能翻动。",
      ],
      icon: "泥",
    },
    {
      name: "火山石/熔岩石 (Volcanic Rock/Lava Rock)",
      pros: ["多孔结构，表面积极大，非常有利于硝化细菌附着和繁殖，可作为滤材或底床。", "质地轻，可用于垫高后景。"],
      cons: ["表面粗糙，可能刮伤部分底栖鱼。", "部分火山石可能影响水质硬度。"],
      icon: "🌋",
    },
    {
      name: "珊瑚骨/贝壳沙 (Coral Bones/Shell Sand)",
      pros: ["能显著提高水体硬度(GH)和pH值，适合饲养三湖慈鲷、海水鱼等喜好硬碱性水的鱼类。"],
      cons: ["不适用于大部分热带淡水鱼和水草。", "释放钙质速度不易控制。"],
      icon: "🐚",
    },
  ];

  const scapingElements = [
    {
      name: "石头 (Stones/Rocks)",
      types: "青龙石、松皮石、木化石、火山石、鹅卵石等。",
      tips: [
        "选择与鱼缸风格和鱼只习性相匹配的石头。",
        "注意石头的棱角，避免过于锋利刮伤鱼。",
        "部分石头（如青龙石）会影响水质硬度，入缸前需测试或处理。",
        "摆放时注意稳固，避免倒塌。",
      ],
      icon: "🗿",
    },
    {
      name: "沉木/杜鹃根 (Driftwood/Azalea Roots)",
      types: "泰国沉木、巴西沉木、杜鹃根、流木等。",
      tips: [
        "能释放腐殖酸，有降酸软水效果，适合弱酸性鱼类。",
        "入缸前需彻底刷洗、浸泡（吐色、除虫）或煮沸处理。",
        "可为鱼只提供躲避场所，也是异形鱼的食物来源之一。",
        "初期可能长白毛（菌膜），属正常现象，可由工具鱼虾清理或手动清除。",
      ],
      icon: "🪵",
    },
    {
      name: "水草 (Aquatic Plants)",
      types: "根据光照、CO2需求和造景位置分为前景草、中景草、后景草；阴性草、阳性草等。",
      tips: [
        "选择与鱼缸条件（光照、底床、水质）和鱼只习性相匹配的水草。",
        "注意水草的生长速度和最终大小。",
        "入缸前进行检疫，去除蜗牛卵和有害生物。",
      ],
      icon: "🌿",
    },
    {
      name: "背景板/背景纸 (Background Board/Paper)",
      types: "纯色（蓝、黑）、岩石纹理、水草图案等。",
      tips: ["能遮挡鱼缸后方杂物，增强景深感，突出主体。", "选择与整体造景风格协调的背景。"],
      icon: "🖼️",
    },
  ];

  const scapingPrinciples = [
    "<strong>主题明确：</strong>确定一个造景主题或风格（如自然风、岩石景、森林景、简约风等）。",
    "<strong>黄金分割/三分法：</strong>运用构图原理，使景物摆放更具美感和视觉焦点。",
    "<strong>前低后高：</strong>营造景深感，方便观赏。前景可种植矮珍珠等前景草，后景可放置高大的水草或石头。",
    "<strong>疏密有致：</strong>避免景物过于拥挤或过于空旷，留出适当的活动空间给鱼儿。",
    "<strong>色彩搭配：</strong>运用不同颜色、形态的水草和素材，营造丰富的视觉层次。",
    "<strong>考虑鱼只需求：</strong>为鱼只提供足够的游动空间和必要的躲避场所。",
    "<strong>维护便利性：</strong>造景时考虑后续清洁和维护的方便性。",
  ];

  return (
    <ContentPageLayout title={pageTitle} imageUrl={imageUrl}>
      <section>
        <h2>引言：方寸之间，再现自然之美</h2>
        <p>
          鱼缸的底砂不仅仅是铺在缸底的装饰，它对水质、水草生长以及部分鱼类的生活习性都有重要影响。而水族造景则是将各种素材（如石头、沉木、水草）巧妙组合，在鱼缸中创造出富有美感和生态功能的微缩景观。一个精心选择的底砂和赏心悦目的造景，能让您的养鱼体验提升到一个全新的层次。
        </p>
      </section>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">鱼缸底砂种类与特性：为您的鱼缸打好基础</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {substrateTypes.map((type) => (
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
        <p className="text-xs text-gray-500 mt-4">
          <strong>选择建议：</strong>根据您计划饲养的鱼种、是否种植水草以及期望的造景风格来综合选择底砂。例如，水草缸首选水草泥；底栖鼠鱼缸适合细软的河沙；三湖慈鲷缸则需要珊瑚骨来调节水质。
        </p>
      </section>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">水族造景常用素材：构建您的水下花园</h3>
        <div className="space-y-6">
          {scapingElements.map((elem) => (
            <div key={elem.name} className="p-4 border rounded-lg shadow-sm bg-gray-50">
              <h4 className="text-xl font-medium text-green-600 flex items-center">
                <span className="text-3xl mr-3">{elem.icon}</span>
                {elem.name}
              </h4>
              <p className="text-sm text-gray-700 mt-1"><strong>常见种类：</strong>{elem.types}</p>
              <strong className="text-sm text-gray-700 mt-2 block">使用贴士：</strong>
              <ul className="list-disc list-inside text-xs text-gray-600 pl-4 space-y-1">
                {elem.tips.map((tip, i) => <li key={i}>{tip}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 bg-indigo-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-indigo-700 mb-3">水族造景基本原则：打造和谐美景</h3>
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
          {scapingPrinciples.map((principle, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: principle }} />
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2>底砂处理与入缸步骤</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
          <li><strong>清洗：</strong>大部分底砂（尤其是河沙、砾石）在使用前都需要反复淘洗干净，去除粉尘和杂质，直到水变清澈。</li>
          <li><strong>消毒（可选）：</strong>对于来源不明或担心有病菌的底砂，可以用高锰酸钾溶液浸泡消毒，之后再彻底冲洗干净。</li>
          <li><strong>水草泥处理：</strong>水草泥一般无需过度清洗，直接铺设即可。部分品牌可能建议轻微润湿后铺设。</li>
          <li><strong>铺设方法：</strong>将清洗干净的底砂或水草泥均匀铺在缸底。如果造景需要，可以铺设成前低后高的斜坡。在铺好底砂后再缓慢注水，避免冲散底砂。可以在底砂上放一个平盘或塑料袋，让水流缓冲。</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2>结语：发挥创意，享受造景乐趣</h2>
        <p>
          选择合适的底砂和进行水族造景是一个充满创意和乐趣的过程。它不仅能美化您的鱼缸，更能为鱼儿提供一个更接近自然的栖息环境。不必追求一步到位，可以从简单的布局开始，逐步学习和尝试，打造出属于您自己的独特水下景观。
        </p>
      </section>
    </ContentPageLayout>
  );
}

