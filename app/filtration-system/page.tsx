import ContentPageLayout from "@/components/ContentPageLayout";

export default function FiltrationSystemPage() {
  const pageTitle = "鱼缸过滤系统全解析：选对“心脏”，养鱼无忧";
  const imageUrl = "/images/filtration_system_illustration.png";

  const filterFunctions = [
    {
      title: "物理过滤 (Physical Filtration)",
      description: "通过过滤棉等材料，拦截并去除水中的固体颗粒物，如鱼的粪便、食物残渣、悬浮杂质，保持水体清澈。这是过滤的第一道关卡。",
      icon: "🧹",
    },
    {
      title: "生物过滤 (Biological Filtration)",
      description: "过滤系统的核心！通过在滤材（如陶瓷环、细菌屋）上培养大量硝化细菌，将鱼类排泄产生的剧毒氨氮分解为毒性较低的亚硝酸盐，再转化为相对无毒的硝酸盐。这是维持水质稳定的关键。",
      icon: "🦠",
    },
    {
      title: "化学过滤 (Chemical Filtration) - 可选",
      description: "通过活性炭、吸氨石等化学滤材，吸附水中的异味、色素、药物残留或特定有害物质。通常有使用寿命，需定期更换，并非所有鱼缸都必需。",
      icon: "🧪",
    },
    {
      title: "增氧 (Aeration)",
      description: "部分过滤系统在水流循环过程中能增加水体溶氧量，如上滤出水口、瀑布水流等，有助于鱼类呼吸和硝化细菌工作。",
      icon: "💨",
    },
  ];

  const filterTypes = [
    {
      name: "上部过滤 (Top Filter)",
      pros: "结构简单，价格便宜，清洗方便。",
      cons: "过滤能力和美观度有限，适合中小型缸。",
      suitability: "新手入门、中小型鱼缸、预算有限。",
    },
    {
      name: "瀑布式/壁挂过滤 (HOB Filter)",
      pros: "安装方便，不占缸内空间，有瀑布水流增氧。",
      cons: "过滤能力一般，适合小型缸或低密度饲养。",
      suitability: "小型鱼缸、桌面缸、辅助过滤。",
    },
    {
      name: "水妖精/气动生化棉过滤 (Sponge Filter)",
      pros: "价格便宜，运行安静，生物过滤效果好，安全（不吸小鱼）。",
      cons: "物理过滤弱，美观度不高，需配合氧气泵。",
      suitability: "小型缸、繁殖缸、治疗缸、虾缸、辅助过滤。",
    },
    {
      name: "内置式/潜水泵过滤 (Internal Filter)",
      pros: "结构紧凑，安装简单。",
      cons: "占用缸内空间，过滤能力通常有限。",
      suitability: "小型鱼缸、特定造景需求。",
    },
    {
      name: "滤筒/外置过滤桶 (Canister Filter)",
      pros: "过滤效果好，可放大量滤材，水流柔和，不占缸内空间，美观。",
      cons: "价格较高，清洗比上滤略麻烦。",
      suitability: "中大型鱼缸、水草缸、对水质要求高。",
    },
    {
      name: "底部过滤/底缸过滤 (Sump Filter)",
      pros: "过滤能力最强，水体大且稳定，可集成多种设备。",
      cons: "结构复杂，占空间大，成本最高。",
      suitability: "大型鱼缸、海水缸、高密度饲养、专业玩家。",
    },
  ];

  return (
    <ContentPageLayout title={pageTitle} imageUrl={imageUrl}>
      <section>
        <h2>鱼缸的“生命线”：深入了解过滤系统</h2>
        <p>
          一个强大而合适的过滤系统，是鱼缸生态系统的“心脏”与“肾脏”。它不仅能保持水质清澈，更重要的是培养有益细菌，分解有害物质，为您的爱鱼提供一个健康、稳定的生存环境。选对过滤，养鱼就成功了一大半！
        </p>
      </section>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">过滤系统的四大核心功能</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {filterFunctions.map((func) => (
            <div key={func.title} className="p-4 border rounded-lg shadow-sm bg-white">
              <h4 className="text-lg font-medium text-blue-600 flex items-center">
                <span className="text-2xl mr-2">{func.icon}</span>
                {func.title}
              </h4>
              <p className="text-sm text-gray-600 mt-1">{func.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">常见过滤系统类型大比拼</h3>
        <div className="space-y-4">
          {filterTypes.map((type) => (
            <div key={type.name} className="p-4 border rounded-lg shadow-sm bg-white">
              <h4 className="text-xl font-medium text-green-600">{type.name}</h4>
              <p className="text-sm mt-1">
                <strong>优点：</strong>{type.pros}
              </p>
              <p className="text-sm">
                <strong>缺点：</strong>{type.cons}
              </p>
              <p className="text-sm bg-gray-100 p-2 rounded mt-2">
                <strong>适合场景：</strong>{type.suitability}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-yellow-50 p-3 rounded-lg text-sm text-yellow-700">
          <strong>注意：</strong> 底板式过滤 (Undergravel Filter) 因易堵塞、清洗困难等缺点，现已较少推荐，新手不建议选用。
        </div>
      </section>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">如何为您的鱼缸挑选合适的过滤系统？</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>鱼缸大小是首要考虑：</strong> 小缸（如30cm以下）可选水妖精、小型瀑布；中型缸（如40-80cm）可选上滤、中型瀑布、小型滤筒；大型缸（如80cm以上）建议选择滤筒或底缸过滤。
          </li>
          <li>
            <strong>养殖密度和鱼种：</strong> 养的鱼多，或养的是能吃能拉的鱼（如金鱼、大型鱼），就需要更强大的过滤。
          </li>
          <li>
            <strong>是否养水草：</strong> 水草缸通常对水流有要求，滤筒是常见选择，避免过强水流冲刷水草。
          </li>
          <li>
            <strong>预算范围：</strong> 从几十元的水妖精到几千元的底缸，丰俭由人。新手不必追求一步到位。
          </li>
          <li>
            <strong>维护便利性：</strong> 考虑自己清洗和更换滤材的频率和方便程度。
          </li>
          <li>
            <strong>美观与噪音：</strong> 如果在意鱼缸整体美观和安静，滤筒、底缸（柜内）相对较好。
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2>总结：没有最好，只有最合适</h2>
        <p>
          选择过滤系统时，请综合考虑以上因素。多在水族论坛、社群咨询有经验的鱼友，或向专业水族店员请教。一个稳定、高效且适合您鱼缸的过滤系统，将是您养鱼成功的坚实保障，让您和您的爱鱼都能乐在其中！
        </p>
      </section>
    </ContentPageLayout>
  );
}

