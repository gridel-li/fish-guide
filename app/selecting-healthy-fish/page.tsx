import ContentPageLayout from "@/components/ContentPageLayout";

export default function SelectingHealthyFishPage() {
  const pageTitle = "慧眼识鱼：挑选健康活泼水族新成员";
  const imageUrl = "/images/selecting_healthy_fish_illustration.png";

  const observationPoints = [
    {
      point: "整体活力 (Activity Level)",
      goodSigns: [
        "游动活跃，姿态自然舒展，反应灵敏。",
        "合群，不离群索居或躲藏在角落。",
        "对外界刺激（如人影晃动）有正常反应。",
      ],
      badSigns: [
        "无精打采，漂浮或沉底不动。",
        "游动姿势怪异，如摇晃、打转、头重脚轻。",
        "离群独处，对外界刺激反应迟钝或无反应。",
      ],
      icon: "🏊",
    },
    {
      point: "体表与鳞片 (Body Surface & Scales)",
      goodSigns: [
        "体表光滑完整，无伤口、无红肿、无异常附着物。",
        "鳞片排列整齐紧密，富有光泽，无脱落或竖立（炸鳞）。",
        "颜色鲜艳自然，符合该品种特征。",
      ],
      badSigns: [
        "体表有白点、白膜、棉絮状物、溃疡、红斑、寄生虫等。",
        "鳞片脱落、松散、竖立，或有出血点。",
        "体色暗淡无光，或出现不正常的斑点、条纹。",
      ],
      icon: "🛡️",
    },
    {
      point: "鱼鳍 (Fins)",
      goodSigns: [
        "鳍条完整舒展，无破损、无缺口、无白边、无血丝。",
        "游动时鳍能正常张开和摆动。",
      ],
      badSigns: [
        "鳍条破损、撕裂、粘连、发白、充血、溃烂或有小白点。",
        "鳍条收缩并拢，无法正常张开。",
      ],
      icon: "🎏",
    },
    {
      point: "眼睛 (Eyes)",
      goodSigns: ["眼睛明亮有神，清澈透明，无白膜或混浊。", "眼球饱满，不凹陷也不过分突出。"],
      badSigns: ["眼睛浑浊、蒙白、凹陷、红肿或异常突出（如龙睛品种外的突眼）。", "眼部有寄生虫。"],
      icon: "👀",
    },
    {
      point: "鳃部 (Gills)",
      goodSigns: [
        "鳃盖开合自然有节奏，呼吸均匀平稳。",
        "鳃丝鲜红，无异物附着，无肿胀或糜烂。",
      ],
      badSigns: [
        "呼吸急促或困难，鳃盖异常张开或紧闭。",
        "鳃丝颜色异常（如发白、发暗、有出血点），或有寄生虫、黏液过多。",
      ],
      icon: "🌬️",
    },
    {
      point: "腹部与肛门 (Abdomen & Anus)",
      goodSigns: ["腹部正常，不凹陷也不异常肿胀。", "肛门处干净，无红肿或拖有白色黏液状粪便。"],
      badSigns: ["腹部异常肿胀（可能是腹水或肠炎）或严重凹陷（可能是消瘦或内寄）。", "肛门红肿，或有拖便现象。"],
      icon: "🐡", 
    },
    {
      point: "摄食状况 (Feeding Response) - 若店家允许观察喂食",
      goodSigns: ["抢食积极，吞咽正常。"],
      badSigns: ["对食物不感兴趣，或吞食后又吐出。"],
      icon: "🍽️",
    },
  ];

  const storeObservation = [
    "<strong>水族店整体环境：</strong>选择干净整洁、管理规范、无异味的水族店。",
    "<strong>鱼缸水质：</strong>观察店内鱼缸水是否清澈透亮，无过多悬浮物或藻类。询问店家日常维护情况。",
    "<strong>同缸鱼健康状况：</strong>目标鱼所在的鱼缸内，其他鱼是否也健康活泼。如果一个缸里有多条鱼状态不佳，则该缸鱼都不宜购买。",
    "<strong>店家专业度：</strong>与店家交流，看其是否能提供专业的饲养建议和鱼只信息。",
  ];

  return (
    <ContentPageLayout title={pageTitle} imageUrl={imageUrl}>
      <section>
        <h2>引言：选对第一条鱼，开启快乐养鱼路</h2>
        <p>
          挑选健康的鱼是成功养鱼的第一步，也是最关键的一步。一条健康的鱼能更快适应新环境，减少疾病的发生，让您的养鱼体验更加轻松愉快。相反，如果选到病鱼或状态不佳的鱼，后续可能会面临一系列麻烦。那么，如何练就一双“火眼金睛”，挑选到心仪又健康的鱼儿呢？
        </p>
      </section>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">“望闻问切”选鱼法：七大关键观察点</h3>
        <p className="mb-4 text-sm text-gray-600">
          在水族店挑选鱼时，不要急于下手，花几分钟仔细观察是十分必要的。您可以从以下几个方面入手：
        </p>
        <div className="space-y-6">
          {observationPoints.map((obs) => (
            <div key={obs.point} className="p-4 border rounded-lg shadow-sm bg-white">
              <h4 className="text-xl font-medium text-blue-600 flex items-center">
                <span className="text-3xl mr-3">{obs.icon}</span>
                {obs.point}
              </h4>
              <div className="grid md:grid-cols-2 gap-4 mt-2 text-sm">
                <div>
                  <strong className="text-green-600">健康信号 (Good Signs):</strong>
                  <ul className="list-disc list-inside text-gray-700 pl-4">
                    {obs.goodSigns.map((sign, i) => <li key={i}>{sign}</li>)}
                  </ul>
                </div>
                <div>
                  <strong className="text-red-600">警惕信号 (Bad Signs):</strong>
                  <ul className="list-disc list-inside text-gray-700 pl-4">
                    {obs.badSigns.map((sign, i) => <li key={i}>{sign}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 bg-indigo-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-indigo-700 mb-3">水族店环境考察：好店出好鱼</h3>
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
          {storeObservation.map((tip, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: tip }} />
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2>选鱼小贴士与后续步骤</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
          <li><strong>不要冲动购买：</strong>如果对鱼的状态有任何疑虑，宁可暂时不买，多观察几天或换一家店。</li>
          <li><strong>选择中等大小的幼鱼或亚成鱼：</strong>它们通常比过小或过老的鱼更容易适应新环境。</li>
          <li><strong>了解鱼的来源：</strong>如果可能，了解鱼是野生捕捞还是人工繁殖，本地鱼还是进口鱼，有助于判断其适应性和潜在风险。</li>
          <li><strong>购买后的运输：</strong>确保店家提供合理的打包（如纯氧打包），回家途中避免剧烈晃动和温差过大。</li>
          <li><strong>新鱼必须检疫：</strong>无论看起来多么健康，新鱼回家后都应在单独的检疫缸中观察1-2周，确认无恙后再放入主缸，这是防止病菌带入主缸的最有效方法。</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2>结语：耐心观察，谨慎选择</h2>
        <p>
          挑选健康的鱼需要耐心和细致的观察。通过掌握以上方法，您就能大大提高选到健康鱼的几率，为您的水族爱好打下坚实的基础。祝您选到心仪的鱼儿，享受它们带来的乐趣！
        </p>
      </section>
    </ContentPageLayout>
  );
}

