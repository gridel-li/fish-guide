import ContentPageLayout from "@/components/ContentPageLayout";

export default function DiseasePreventionPage() {
  const pageTitle = "鱼病防治：预防为主，早治为辅";
  const imageUrl = "/images/disease_prevention_illustration.png";

  const causesOfDisease = [
    {
      cause: "水质恶化",
      details: "氨氮、亚硝酸盐超标，pH剧变，水温不稳等，导致鱼抵抗力下降。",
      icon: "📉",
    },
    {
      cause: "新鱼带入病菌",
      details: "新鱼未经检疫直接入缸，易传染原有健康鱼。",
      icon: "🦠",
    },
    {
      cause: "饲养密度过大",
      details: "水质迅速恶化，鱼易摩擦、打斗，增加感染风险。",
      icon: " overcrowded_fish", // Placeholder, e.g., 🐠🐠🐠
    },
    {
      cause: "喂食不当",
      details: "长期单一或劣质饲料致营养不良；过量投喂污染水质。",
      icon: "🍲",
    },
    {
      cause: "环境突变与应激",
      details: "换水温差大、pH突变、受惊吓等，降低免疫力。",
      icon: "⚡",
    },
    {
      cause: "物理损伤",
      details: "运输、刮伤、打斗造成的伤口，易继发细菌感染。",
      icon: "🩹",
    },
  ];

  const preventionMeasures = [
    "<strong>保持优良水质：</strong>定期换水，过滤高效运转，及时清理废物。",
    "<strong>新鱼必须检疫：</strong>单独饲养观察1-2周，确认健康无病再入主缸。",
    "<strong>合理控制密度：</strong>宁疏勿密，避免过度拥挤。",
    "<strong>科学喂食：</strong>多样化、高质量鱼食，定时定量，七分饱即可。",
    "<strong>避免环境剧变：</strong>换水操作轻柔，水温、水质缓慢过渡。",
    "<strong>每日仔细观察：</strong>及早发现鱼的异常行为、体表变化。",
    "<strong>谨慎添加新物：</strong>水草、装饰物等入缸前最好消毒处理。",
  ];

  const commonDiseases = [
    {
      name: "白点病 (小瓜虫病)",
      symptoms: "体表、鳍、鳃出现针尖白点，鱼蹭缸，食欲减退，呼吸急促。",
      cause: "小瓜虫寄生，水温骤降易发。",
      treatment: [
        "缓慢升温至28-30℃ (日升温≤2℃)。",
        "下0.3%-0.5%水族专用盐 (部分鱼敏感，慎用)。",
        "使用白点病专用药，按说明。",
        "保持水质，加强换水。",
      ],
    },
    {
      name: "水霉病 (肤霉病)",
      symptoms: "体表伤口或体弱鱼身长出白色棉絮状物。",
      cause: "水霉菌感染，鱼受伤、水温低、水质差时易发。",
      treatment: [
        "捞出病鱼，用1%-2%食盐水或低浓度高锰酸钾溶液浸洗病灶。",
        "使用水霉病专用药或亚甲基蓝药浴。",
        "适当提温，保持水质。",
      ],
    },
    {
      name: "烂鳍烂尾病",
      symptoms: "鳍条边缘发白、腐烂、缺损，严重时鳍条烂光。",
      cause: "细菌感染，水质恶化、打斗受伤后易发。",
      treatment: [
        "立即改善水质，加强换水。",
        "使用抗细菌药物药浴 (如黄粉、土霉素)。",
        "可适当下盐辅助。",
      ],
    },
    {
      name: "肠炎",
      symptoms: "拒食，腹胀，排白色黏液或拖便，肛门红肿。",
      cause: "喂食不洁或变质食物、过量喂食、水质差致细菌感染。",
      treatment: [
        "立即停食几天。",
        "改善水质，少量多次换水。",
        "用甲硝唑、痢特灵等拌少量鱼食投喂或药浴。",
      ],
    },
    {
      name: "炸鳞病 (立鳞病)",
      symptoms: "鳞片竖立如松果，腹胀，眼球突出。",
      cause: "病因复杂，可能与细菌感染、内脏病变、水质差等有关，治愈难。",
      treatment: [
        "立即隔离。",
        "尝试用抗生素 (如庆大霉素) 药浴，配合下盐。",
        "保持水质，加强增氧。尽人事，听天命。",
      ],
    },
  ];

  const medicationTips = [
    "<strong>准确诊断：</strong>尽量确定病因再用药，忌盲目。",
    "<strong>隔离治疗：</strong>病鱼最好在治疗缸药浴，不影响主缸系统和健康鱼。",
    "<strong>精确计量：</strong>严格按说明或推荐剂量，忌过量。",
    "<strong>注意水温溶氧：</strong>药浴期间通常需保持水温稳定并加强增氧。",
    "<strong>观察反应：</strong>用药后密切观察，有不良反应立即停药或减量。",
    "<strong>按疗程用药：</strong>勿随意中断。治疗结束后逐步换水稀释药液。",
    "<strong>移除活性炭：</strong>治疗期间取出过滤中的活性炭，以免吸附药效。",
  ];

  return (
    <ContentPageLayout title={pageTitle} imageUrl={imageUrl}>
      <section>
        <h2>养鱼先防病：守护爱鱼健康的“第一道防线”</h2>
        <p>
          “上医治未病”，这句古训在养鱼中同样适用。即使再精心的照料，鱼儿有时也难免会遇到健康问题。了解鱼病发生的原因，掌握有效的预防措施，并对常见疾病有初步的应对方案，是每位鱼友的必修课。记住，<strong>预防永远胜于治疗！</strong>
        </p>
      </section>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">鱼儿为何生病？六大常见“致病元凶”</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {causesOfDisease.map((item) => (
            <div key={item.cause} className="p-4 border rounded-lg shadow-sm bg-white">
              <h4 className="text-lg font-medium text-red-600 flex items-center">
                <span className="text-2xl mr-2">{item.icon === " overcrowded_fish" ? "🐠🐠🐠" : item.icon}</span>
                {item.cause}
              </h4>
              <p className="text-sm text-gray-600 mt-1">{item.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">防病于未然：七大黄金预防法则</h3>
        <div className="bg-green-50 p-6 rounded-lg">
          <ul className="list-decimal list-inside space-y-2 text-gray-700">
            {preventionMeasures.map((measure, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: measure }} />
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">常见鱼病“快诊”与初步处理参考</h3>
        <p className="text-sm text-red-600 bg-red-50 p-3 rounded-md mb-4">
          <strong>重要提示：</strong> 以下内容仅供参考，不能替代专业诊断。若鱼病严重或不确定，请及时咨询有经验的鱼友或水族专业人士。用药务必仔细阅读说明，精确用量，避免二次伤害。
        </p>
        <div className="space-y-6">
          {commonDiseases.map((disease) => (
            <div key={disease.name} className="p-4 border rounded-lg shadow-sm bg-white">
              <h4 className="text-xl font-medium text-blue-600">{disease.name}</h4>
              <p className="text-sm mt-1"><strong>症状：</strong>{disease.symptoms}</p>
              <p className="text-sm"><strong>可能原因：</strong>{disease.cause}</p>
              <div className="mt-2">
                <h5 className="text-md font-semibold text-gray-700">初步处理建议：</h5>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  {disease.treatment.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">鱼病用药“安全手册”</h3>
        <div className="bg-yellow-50 p-6 rounded-lg">
          <ul className="list-disc list-inside space-y-2 text-sm text-yellow-800">
            {medicationTips.map((tip, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: tip }} />
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2>结语：做爱鱼的“健康守护神”</h2>
        <p>
          养鱼路上遇到鱼病在所难免，关键在于沉着冷静，科学应对。通过不断学习和积累经验，您一定能最大限度地预防疾病，并在必要时成为爱鱼的“健康守护神”，让它们在您的精心照料下，展现最动人的生命光彩。
        </p>
      </section>
    </ContentPageLayout>
  );
}

