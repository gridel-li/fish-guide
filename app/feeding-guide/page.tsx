import ContentPageLayout from "@/components/ContentPageLayout";

export default function FeedingGuidePage() {
  const pageTitle = "鱼儿的饕餮盛宴：科学喂食全攻略";
  const imageUrl = "/images/feeding_guide_illustration.png";

  const foodTypes = [
    {
      name: "人工颗粒饲料 (Pelleted Food)",
      description: "市面上最常见的鱼食类型，营养均衡，方便投喂和储存。分为上浮、缓沉、下沉型，适合不同水层活动的鱼。",
      pros: ["营养全面均衡", "保质期长，易储存", "种类多样，针对性强"],
      cons: ["部分鱼可能不爱吃", "长期单一投喂可能导致营养不均或挑食"],
      icon: " pellets",
    },
    {
      name: "薄片饲料 (Flake Food)",
      description: "轻薄易碎，适合小型鱼和上层鱼类。入水后会缓慢漂浮或下沉。",
      pros: ["易于消化吸收", "适合小型鱼开口"],
      cons: ["易散，可能污染水质", "营养价值相对颗粒饲料可能稍低"],
      icon: " flakes",
    },
    {
      name: "贴片饲料 (Tablet/Wafer Food)",
      description: "通常为圆形或方形的片状，可贴在缸壁上或沉入缸底，适合异形、鼠鱼等底栖鱼类。",
      pros: ["专为底栖鱼设计", "方便观察鱼只进食"],
      cons: ["部分鱼可能不适应贴片形式"],
      icon: " wafer",
    },
    {
      name: "活饵 (Live Food)",
      description: "如红虫、水蚤、丰年虾、小鱼小虾等。适口性好，营养丰富，能激发鱼的捕食天性。",
      pros: ["营养价值高，适口性极佳", "能促进鱼只发色和繁殖"],
      cons: ["易携带病菌和寄生虫，需彻底消毒处理", "不易保存，获取和处理相对麻烦"],
      icon: "🐛",
    },
    {
      name: "冰冻饲料 (Frozen Food)",
      description: "如冻红虫、冻丰年虾、冻血虫等。通过低温冷冻杀死部分病菌，比活饵相对安全。",
      pros: ["营养价值接近活饵，相对安全卫生", "保存时间较长"],
      cons: ["需解冻后投喂，解冻过程可能损失部分营养", "部分鱼可能不接受解冻后的食物"],
      icon: "🧊",
    },
    {
      name: "干燥饲料 (Freeze-Dried Food)",
      description: "如干虾、干红虫、干水蚤等。通过冷冻干燥技术处理，保留了大部分营养。",
      pros: ["易于保存和投喂", "比活饵安全"],
      cons: ["适口性可能不如活饵和冰冻饲料", "投喂前最好泡水软化，避免鱼只肠道不适"],
      icon: "🦐",
    },
    {
      name: "蔬菜/自制饲料 (Vegetables/DIY Food)",
      description: "部分素食性或杂食性鱼类可投喂焯水后的蔬菜（如菠菜、黄瓜）。也可根据鱼种营养需求自制鱼食。",
      pros: ["补充植物纤维和维生素", "成本较低，食材可控"],
      cons: ["营养可能不均衡，需搭配其他饲料", "自制饲料需注意保鲜和卫生"],
      icon: "🥬",
    },
  ];

  const feedingPrinciples = [
    {
      principle: "定时定量 (Regular Schedule & Amount)",
      details: "每日固定时间喂食1-2次（幼鱼可适当增加次数），每次投喂量以鱼能在3-5分钟内吃完为宜，避免过量投喂导致残饵污染水质。",
      icon: "⏱️",
    },
    {
      principle: "观察鱼只状态 (Observe Fish Condition)",
      details: "根据鱼的活跃度、体型、排泄物等调整喂食量。鱼只生病或水质不佳时应减少或暂停喂食。",
      icon: "🧐",
    },
    {
      principle: "食物多样化 (Variety in Diet)",
      details: "尽量提供多种不同类型的食物，确保营养均衡，避免鱼只挑食，同时也能增加喂食乐趣。",
      icon: "🔄",
    },
    {
      principle: "了解鱼的食性 (Know Your Fish\'s Diet)",
      details: "不同鱼种的食性不同（肉食、素食、杂食），选择适合其口器大小和消化特点的饲料。",
      icon: "🐟❔",
    },
    {
      principle: "少量多次 (Small Amounts, More Often - for Fry)",
      details: "对于幼鱼或小型鱼，可以采取少量多次的喂食方式，有助于其消化吸收和生长。",
      icon: "👶",
    },
    {
      principle: "处理活饵与冰冻饵 (Handling Live & Frozen Foods)",
      details: "活饵使用前务必彻底清洗消毒；冰冻饵需完全解冻并去除多余水分后再投喂，避免直接投喂冰块。",
      icon: "🧼",
    },
    {
      principle: "避免污染水质 (Avoid Water Contamination)",
      details: "及时捞出未吃完的残饵，特别是易腐败的活饵或自制饲料。",
      icon: "🚫",
    },
  ];

  const specialConsiderations = [
    "<strong>新鱼入缸：</strong>新鱼刚到家时，由于紧张和不适应，可能暂时不开口吃食，一般静养1-2天后再尝试少量喂食。",
    "<strong>繁殖期：</strong>繁殖期的亲鱼需要更丰富和高质量的营养，可适当增加高蛋白饲料或活饵的投喂。",
    "<strong>疾病期：</strong>鱼只生病期间通常食欲下降，应减少喂食量，甚至停食，以减轻消化系统负担，配合治疗。",
    "<strong>外出时：</strong>短期外出（1-3天）大部分成年健康鱼可以不喂食。长期外出可使用自动喂食器，或请朋友帮忙。",
    "<strong>观察排泄：</strong>健康的鱼粪便应成形且颜色正常。如发现拖便、白便等异常情况，需警惕肠道问题。",
  ];

  return (
    <ContentPageLayout title={pageTitle} imageUrl={imageUrl}>
      <section>
        <h2>引言：吃得好，长得棒，鱼儿健康乐逍遥</h2>
        <p>
          科学合理的喂食是确保观赏鱼健康成长、色彩鲜艳、活力充沛的关键因素之一。了解不同鱼食的特性，掌握正确的喂食方法和原则，不仅能满足鱼儿的营养需求，还能有效避免因喂食不当引发的各种问题，让您的养鱼生活更加轻松愉快。
        </p>
      </section>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">鱼食种类知多少：为您的爱鱼挑选“美味佳肴”</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foodTypes.map((food) => (
            <div key={food.name} className="p-4 border rounded-lg shadow-sm bg-white">
              <h4 className="text-lg font-medium text-blue-600 flex items-center">
                <span className="text-2xl mr-2">{food.icon}</span>
                {food.name}
              </h4>
              <p className="text-xs text-gray-600 mt-1 mb-2">{food.description}</p>
              <div className="text-xs space-y-1">
                <p><strong>优点：</strong>{food.pros.join("， ")}</p>
                <p><strong>缺点：</strong>{food.cons.join("， ")}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">科学喂食七大黄金法则：养出健康好状态</h3>
        <div className="space-y-4">
          {feedingPrinciples.map((item) => (
            <div key={item.principle} className="p-4 border rounded-lg shadow-sm bg-gray-50 flex items-start">
              <span className="text-3xl mr-4 text-green-500">{item.icon}</span>
              <div>
                <h4 className="text-lg font-medium text-gray-700">{item.principle}</h4>
                <p className="text-sm text-gray-600 mt-1">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 bg-yellow-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-yellow-700 mb-3">特殊情况喂食注意事项</h3>
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
          {specialConsiderations.map((item, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2>结语：合理膳食，鱼乐无穷</h2>
        <p>
          正确的喂食习惯是保持鱼儿健康和鱼缸水质稳定的重要一环。通过细心观察和科学管理，为您的爱鱼提供营养均衡的膳食，它们定会以最美的姿态回报您的悉心照料。享受喂食的乐趣，见证它们在您的呵护下茁壮成长吧！
        </p>
      </section>
    </ContentPageLayout>
  );
}

