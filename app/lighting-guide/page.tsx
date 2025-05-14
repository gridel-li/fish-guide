import ContentPageLayout from "@/components/ContentPageLayout";

export default function LightingGuidePage() {
  const pageTitle = "鱼缸照明：点亮水下世界，促进健康生长";
  const imageUrl = "/images/lighting_guide_illustration.png";

  const lightingPurposes = [
    {
      purpose: "促进水草生长",
      details: "对于种植水草的鱼缸（尤其是水草缸），灯光是水草进行光合作用、健康生长的必需条件。不同水草对光照强度和光谱有不同要求。",
      icon: "🌿",
    },
    {
      purpose: "模拟自然昼夜节律",
      details: "规律的开关灯能为鱼儿和水草提供类似自然的日出日落变化，有助于调节它们的生理活动和作息。",
      icon: "☀️🌙",
    },
    {
      purpose: "提升观赏效果",
      details: "合适的灯光能让鱼儿的色彩更加鲜艳动人，水草更加翠绿，整个鱼缸更具观赏性。",
      icon: "✨",
    },
    {
      purpose: "辅助观察",
      details: "良好的照明方便我们观察鱼儿的健康状况、摄食行为以及鱼缸内的其他情况。",
      icon: "🧐",
    },
  ];

  const lightTypes = [
    {
      name: "LED灯 (Light Emitting Diode)",
      pros: [
        "节能高效，寿命长。",
        "光谱可调性强，很多产品支持多种颜色模式、模拟日出日落等。",
        "发热量相对较低。",
        "体积小巧，设计多样。",
      ],
      cons: ["初始购买成本可能略高于传统灯具，但长期来看更经济。", "部分廉价LED灯珠可能存在光衰问题。"],
      icon: "💡",
    },
    {
      name: "荧光灯管 (Fluorescent Lamps - T5, T8, PL等)",
      pros: ["价格相对便宜，技术成熟。", "有针对水草培育的专用灯管（如卤素灯管）。"],
      cons: [
        "寿命相对较短，光效会随使用时间衰减，需定期更换。",
        "发热量较大，可能影响水温。",
        "光谱选择不如LED灵活。",
        "体积较大，占用空间。",
      ],
      icon: "🏮",
    },
    {
      name: "金卤灯 (Metal Halide Lamp)",
      pros: ["光照强度非常高，穿透力强，适合大型深水缸或对光照要求极高的水草。"],
      cons: [
        "价格昂贵，功耗大，发热量巨大，通常需要配合散热风扇。",
        "不适合小型鱼缸或普通玩家。",
      ],
      icon: "🌟",
    },
  ];

  const selectionConsiderations = [
    {
      factor: "鱼缸类型与饲养对象",
      details: [
        "<strong>纯养鱼缸：</strong>对灯光要求不高，主要满足观赏和模拟昼夜即可，普通LED白光灯或蓝白灯即可。",
        "<strong>水草缸：</strong>核心需求，需根据水草种类选择合适光谱（如全光谱灯）和足够的光照强度 (PAR值)。阳性草需强光，阴性草弱光即可。",
        "<strong>海水缸：</strong>对灯光要求更为复杂和专业，通常需要特定光谱的LED灯模拟海洋环境，促进珊瑚生长和显色。",
      ],
      icon: "🐠🌿珊瑚",
    },
    {
      factor: "光照强度 (Lumen/PAR)",
      details: [
        "流明(Lumen)是衡量光通量的单位，简单理解为灯的亮度。PAR值(Photosynthetically Active Radiation)则更准确地表示水草能有效利用的光合有效辐射。",
        "一般水草缸，低需求水草约需20-30流明/升水，中等需求40-50流明/升，高需求则需60流明/升以上。购买时可参考厂家说明或咨询专业人士。",
      ],
      icon: "☀️",
    },
    {
      factor: "光谱 (Spectrum)",
      details: [
        "水草生长需要红光和蓝紫光波段。全光谱灯能提供更接近自然光的连续光谱，有利于水草健康生长和鱼儿显色。",
        "色温(K值)影响灯光颜色观感，如6500K接近正午日光，偏冷白；较低K值偏暖黄。可根据个人喜好和造景风格选择。",
      ],
      icon: "🌈",
    },
    {
      factor: "灯具尺寸与覆盖范围",
      details: ["灯具长度应能覆盖鱼缸主要照明区域，确保光照均匀。"],
      icon: "↔️",
    },
    {
      factor: "品牌、质量与散热",
      details: ["选择信誉良好的品牌，确保灯珠质量、驱动电源稳定性和良好的散热设计，以保证使用寿命和安全性。"],
      icon: "🛡️",
    },
  ];

  const usageTips = [
    "<strong>规律开关灯：</strong>每日光照时间一般控制在6-10小时为宜，过长易爆藻。可使用定时器自动控制。",
    "<strong>逐步适应：</strong>新设缸或更换强力灯具时，可从较短光照时间开始，让水草和鱼逐步适应，避免应激或诱发藻类。",
    "<strong>避免阳光直射：</strong>鱼缸应避免阳光长时间直接照射，阳光过强易导致水温剧变和藻类爆发。灯光是可控的光源。",
    "<strong>定期清洁灯具：</strong>灯具表面积尘或水垢会影响光照效率，应定期清洁。",
    "<strong>注意防水与安全：</strong>选择防水等级合适的灯具，安装时确保电气安全，避免灯具掉入水中。",
  ];

  return (
    <ContentPageLayout title={pageTitle} imageUrl={imageUrl}>
      <section>
        <h2>引言：光，水下生命的源动力与视觉盛宴</h2>
        <p>
          鱼缸中的灯光不仅仅是为了照明，它在模拟自然环境、促进水草光合作用、提升观赏鱼的色彩以及方便我们观察等方面都扮演着至关重要的角色。选择一套合适的照明系统，能为您的水下世界注入活力，展现其最美的一面。
        </p>
      </section>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">鱼缸灯光为何如此重要？四大核心功能解析</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {lightingPurposes.map((item) => (
            <div key={item.purpose} className="p-4 border rounded-lg shadow-sm bg-white">
              <h4 className="text-lg font-medium text-blue-600 flex items-center">
                <span className="text-2xl mr-2">{item.icon}</span>
                {item.purpose}
              </h4>
              <p className="text-sm text-gray-600 mt-1">{item.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">主流鱼缸灯具类型：优缺点与适用场景</h3>
        <div className="space-y-6">
          {lightTypes.map((type) => (
            <div key={type.name} className="p-4 border rounded-lg shadow-sm bg-gray-50">
              <h4 className="text-xl font-medium text-green-600 flex items-center">
                <span className="text-3xl mr-3">{type.icon}</span>
                {type.name}
              </h4>
              <div className="text-sm mt-2">
                <p><strong>优点：</strong>{type.pros.join("；")}</p>
                <p><strong>缺点：</strong>{type.cons.join("；")}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-4"><strong>小提示：</strong>目前LED灯因其综合优势，已成为水族照明的主流选择。</p>
      </section>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">如何为您的鱼缸挑选合适的灯光？五大考量因素</h3>
        <div className="space-y-4">
          {selectionConsiderations.map((item) => (
            <div key={item.factor} className="p-4 border rounded-lg shadow-sm bg-indigo-50 flex items-start">
              <span className="text-3xl mr-4 text-indigo-500">{item.icon.replace("珊瑚", "<i class='text-xs'>珊瑚</i>")}</span> {/* Crude icon replacement for demo */} 
              <div>
                <h4 className="text-lg font-medium text-gray-700">{item.factor}</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 mt-1 pl-4">
                  {item.details.map((detail, i) => <li key={i} dangerouslySetInnerHTML={{ __html: detail }}></li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 bg-yellow-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-yellow-700 mb-3">鱼缸灯光使用与维护小贴士</h3>
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
          {usageTips.map((tip, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: tip }} />
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2>结语：用光影魔法，打造迷人水景</h2>
        <p>
          合理选择和使用鱼缸灯光，不仅能满足水草和鱼儿的生理需求，更能将您的鱼缸打造成一个引人入胜的微缩景观。希望本指南能帮助您点亮属于您的那片水下世界，享受光影带来的无穷魅力。
        </p>
      </section>
    </ContentPageLayout>
  );
}

