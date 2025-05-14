import ContentPageLayout from "@/components/ContentPageLayout";

export default function DiseaseGuidePage() {
  const pageTitle = "鱼病SOS：常见鱼病识别、预防与处理";
  const imageUrl = "/images/disease_guide_illustration.png";

  const commonDiseases = [
    {
      name: "白点病 (Ich/White Spot Disease)",
      symptoms: [
        "鱼体表、鱼鳍、甚至鱼鳃出现针尖大小的白色小点。",
        "病鱼可能摩擦身体、食欲不振、呼吸急促。",
      ],
      cause: "由小瓜虫（一种寄生虫）引起，水温骤变、水质不良时易发。",
      treatment: [
        "升温：缓慢将水温升高至28-30℃，可加速小瓜虫生命周期，使其从鱼体脱落后更容易被药物杀死。",
        "下盐：配合使用浓度为0.3%-0.5%的粗盐或水族专用盐。",
        "药物治疗：使用市售白点病专用药（如含有亚甲基蓝、孔雀石绿等成分的药物，注意部分药物对无鳞鱼和虾螺有害）。",
        "保持水质清洁，加强换水。",
      ],
      prevention: ["保持水温稳定，避免骤变", "新鱼入缸前检疫", "维持良好水质"],
      icon: "<0xF0><0x9F><0xAA><0xA8>", // microbe icon
    },
    {
      name: "水霉病/白毛病 (Saprolegniasis/Cotton Wool Disease)",
      symptoms: [
        "鱼体表、鱼鳍伤口处出现棉絮状的灰白色或浅棕色菌丝。",
        "病鱼精神萎靡，食欲减退，游动缓慢。",
      ],
      cause: "由水霉菌感染引起，通常在鱼体受伤、水温过低或水质恶化时发生。",
      treatment: [
        "轻微感染可尝试升温并下0.3%-0.5%的盐。",
        "使用水霉病专用药（如亚甲基蓝、土霉素等）药浴。",
        "对于局部感染，可用棉签蘸取少量高锰酸钾溶液或聚维酮碘溶液直接涂抹患处（操作需迅速，避免药物入眼入口）。",
      ],
      prevention: ["避免鱼只受伤", "保持水温适宜", "维持良好水质，及时清理有机废物"],
      icon: "<0xF0><0x9F><0xA7><0x84>", // fungus icon
    },
    {
      name: "烂鳍烂尾病 (Fin Rot/Tail Rot)",
      symptoms: [
        "鱼鳍边缘或尾部出现发白、腐烂、缺损，严重时鳍条可能完全烂掉，露出骨骼。",
        "病鱼可能食欲不振，游动不稳。",
      ],
      cause: "多由细菌感染引起，水质恶化、鱼只打斗受伤、营养不良等均可诱发。",
      treatment: [
        "改善水质，加强换水。",
        "使用广谱抗菌药物（如黄粉/呋喃西林、土霉素、庆大霉素等）药浴。",
        "下0.3%-0.5%的盐辅助治疗。",
      ],
      prevention: ["保持良好水质", "避免过度拥挤和鱼只打斗", "提供均衡营养"],
      icon: "<0xF0><0x9F><0xA6><0xA0>", // bacteria icon
    },
    {
      name: "肠炎 (Enteritis)",
      symptoms: [
        "腹部肿胀、肛门红肿、拖白便或脓样便。",
        "食欲不振或拒食，精神萎靡，离群独处。",
      ],
      cause: "多由细菌感染、寄生虫或喂食不当（如食物不洁、过量投喂、食物变质）引起。",
      treatment: [
        "停食1-2天，观察情况。",
        "轻症可尝试用大蒜素或益生菌拌入少量饲料投喂。",
        "细菌性肠炎可使用针对肠道感染的药物（如甲硝唑、痢特灵/呋喃唑酮，需注意用量和副作用）药浴或拌料喂食。",
        "改善水质，保持饲料新鲜。",
      ],
      prevention: ["喂食新鲜、干净的食物", "定时定量喂食，避免过饱", "定期清理鱼缸"],
      icon: "<0xF0><0x9F><0x9A><0xBD>", // stomach icon (closest for intestines)
    },
    {
      name: "炸鳞病/松鳞病 (Dropsy)",
      symptoms: [
        "鱼体鳞片竖起，像松果一样，严重时伴有腹水、眼球突出。",
        "病鱼呼吸困难，游动缓慢，食欲废绝。",
      ],
      cause: "多由细菌感染引起肾脏功能障碍，导致体内积水。水质恶化、内脏器官病变均可诱发。",
      treatment: [
        "此病治愈率较低，早期发现是关键。",
        "隔离病鱼，使用广谱抗菌药物（如卡那霉素、呋喃类药物）配合盐进行药浴。",
        "可尝试在水中加入少量泻盐（硫酸镁）帮助排出腹水。",
        "保持水质，加强增氧。",
      ],
      prevention: ["保持极佳的水质", "避免水温剧烈波动", "提供优质饲料，增强鱼只抵抗力"],
      icon: "<0xF0><0x9F><0xAA><0xA7>", // pinecone icon (for scales)
    },
  ];

  const preventionPrinciples = [
    "<strong>保持水质稳定与清洁：</strong>这是预防一切鱼病的基石。定期换水，保持过滤系统高效运作，及时清理残饵粪便。",
    "<strong>新鱼检疫：</strong>新购入的鱼只务必进行1-2周的隔离检疫，确认健康无病后再合缸。",
    "<strong>避免水温剧烈波动：</strong>水温骤变会使鱼产生应激反应，抵抗力下降，易患病。",
    "<strong>科学喂食：</strong>提供营养均衡、新鲜洁净的食物，定时定量，避免过量投喂。",
    "<strong>避免过度拥挤：</strong>饲养密度过高会导致水质恶化快、鱼只缺氧、打斗增加，从而诱发疾病。",
    "<strong>谨慎混养：</strong>了解不同鱼种的习性，避免将具有攻击性或体型差异过大的鱼混养。",
    "<strong>减少应激：</strong>避免频繁捞鱼、惊吓鱼只、大幅度改变鱼缸环境等。",
    "<strong>早期发现，及时处理：</strong>每日观察鱼只状态，一旦发现异常，尽早隔离并采取相应措施。",
  ];

  const treatmentNotes = [
    "<strong>对症下药：</strong>准确判断病因是成功治疗的前提。不明确病因时切忌乱用药。",
    "<strong>隔离治疗：</strong>发现病鱼应立即隔离，避免传染其他健康鱼只，也方便单独用药。",
    "<strong>注意用药剂量与时长：</strong>严格按照药品说明或经验用量，避免过量导致鱼只中毒或产生抗药性。注意疗程，不可随意停药。",
    "<strong>药浴期间加强增氧：</strong>部分药物会消耗水中氧气，药浴时应加强打氧。",
    "<strong>部分药物对特定生物有害：</strong>如孔雀石绿对虾螺、无鳞鱼有害，用药前需了解清楚。",
    "<strong>治疗期间减少喂食或停食：</strong>减轻病鱼消化负担，有利于康复。",
    "<strong>治疗后换水：</strong>药物治疗结束后，需通过换水逐步稀释水中残留药物。",
    "<strong>寻求帮助：</strong>若自己无法处理或病情严重，可向有经验的鱼友或水族店专业人士求助。",
  ];

  return (
    <ContentPageLayout title={pageTitle} imageUrl={imageUrl}>
      <section>
        <h2>引言：爱鱼健康，养鱼无忧</h2>
        <p>
          即使再精心的照料，观赏鱼有时也难免会遇到疾病的困扰。“预防大于治疗”是养鱼的黄金法则，但了解常见鱼病的症状、成因及处理方法，能在意外发生时助您从容应对，及时挽救爱鱼的生命。本指南将介绍几种常见的观赏鱼疾病及其防治策略。
        </p>
      </section>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">常见鱼病识别与初步处理</h3>
        <div className="space-y-6">
          {commonDiseases.map((disease) => (
            <div key={disease.name} className="p-4 border rounded-lg shadow-sm bg-white">
              <h4 className="text-xl font-medium text-red-600 flex items-center">
                <span className="text-3xl mr-3">{disease.icon}</span>
                {disease.name}
              </h4>
              <div className="mt-2 text-xs space-y-1 text-gray-700">
                <p><strong>主要症状：</strong>{disease.symptoms.join("； ")}</p>
                <p><strong>可能原因：</strong>{disease.cause}</p>
                <p><strong>初步处理建议：</strong></p>
                <ul className="list-disc list-inside pl-4">
                  {disease.treatment.map((step, i) => <li key={i}>{step}</li>)}
                </ul>
                <p><strong>日常预防：</strong>{disease.prevention.join("； ")}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 bg-green-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-green-700 mb-3">鱼病预防八大原则：防患于未然</h3>
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
          {preventionPrinciples.map((principle, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: principle }} />
          ))}
        </ul>
      </section>

      <section className="mt-8 bg-yellow-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-yellow-700 mb-3">鱼病治疗注意事项：科学用药保安全</h3>
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
          {treatmentNotes.map((note, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: note }} />
          ))}
        </ul>
        <p className="text-xs text-red-500 mt-4"><strong>重要提示：</strong>本指南提供的信息仅供参考，不能替代专业兽医诊断。鱼病复杂多变，用药需谨慎，如有条件请咨询专业人士。</p>
      </section>

      <section className="mt-8">
        <h2>结语：细心观察，及时应对</h2>
        <p>
          了解和掌握常见的鱼病防治知识，是每一位养鱼爱好者必备的技能。通过日常的细心观察、科学的预防措施以及在必要时的正确处理，您就能最大限度地保障爱鱼的健康，享受养鱼带来的乐趣。
        </p>
      </section>
    </ContentPageLayout>
  );
}

