import ContentPageLayout from "@/components/ContentPageLayout";

export default function MaterialsChecklistPage() {
  const pageTitle = "新手养鱼装备清单：开缸前必备";
  const imageUrl = "/images/materials_checklist_illustration.png";

  const categories = [
    {
      name: "核心设备 (鱼缸的“发动机”)",
      items: [
        { name: "鱼缸 (Aquarium Tank)", description: "根据空间、预算及鱼种选择。新手推荐30-60cm长方形缸。" },
        { name: "过滤器 (Filter System)", description: "维持水质的关键。可选上滤、瀑布、滤筒、水妖精等，需与鱼缸匹配。" },
        { name: "加热棒 (Heater)", description: "热带鱼必备，保持水温稳定 (通常22-28℃)。" },
        { name: "温度计 (Thermometer)", description: "准确监测水温，必备小工具。" },
        { name: "照明灯 (Lighting)", description: "观赏及水草生长所需，模拟自然昼夜。" },
      ],
    },
    {
      name: "滤材与底床 (水质的“净化器”与“地基”)",
      items: [
        { name: "物理滤材 (如过滤棉)", description: "过滤固体杂质、粪便、残饵。" },
        { name: "生化滤材 (如陶瓷环、细菌屋)", description: "培养硝化细菌，分解有害物质。" },
        { name: "底砂/水草泥 (可选)", description: "美化鱼缸，部分有助稳定水质或养水草。新手可从裸缸或少量中性沙开始。" },
      ],
    },
    {
      name: "日常维护工具 (养鱼的“好帮手”)",
      items: [
        { name: "鱼食 (Fish Food)", description: "选择适合鱼种的优质饲料。" },
        { name: "养鱼专用困水桶 (至少2个)", description: "一个困水，一个换水排污，切勿混用。" },
        { name: "虹吸管/洗沙器 (Siphon/Gravel Cleaner)", description: "换水、吸污、清洁底砂。" },
        { name: "渔网 (Fish Net)", description: "捞鱼用，选择柔软细密的。" },
        { name: "刮藻刀/刷 (Algae Scraper/Brush)", description: "清除缸壁藻类。" },
      ],
    },
    {
      name: "水质处理与常备药品 (水质的“调理师”与“小药箱”)",
      items: [
        { name: "水质稳定剂/除氯剂", description: "去除自来水中余氯，新水入缸必备。" },
        { name: "硝化细菌制剂", description: "开缸或水质波动时辅助建立硝化系统。" },
        { name: "常见鱼药 (如白点净、黄粉)", description: "预备少量，以防不时之需，遵医嘱使用。" },
      ],
    },
    {
      name: "其他可选物品 (提升观赏与体验)",
      items: [
        { name: "背景板/纸", description: "增强观赏效果，遮挡背景。" },
        { name: "装饰物 (如沉木、假山)", description: "美化鱼缸，提供躲避场所，选择水族安全材质。" },
        { name: "氧气泵/气石", description: "高密度饲养或过滤增氧不足时使用。" },
        { name: "水质测试剂/笔", description: "监测pH、氨氮等指标，科学管理水质。" },
      ],
    },
  ];

  return (
    <ContentPageLayout title={pageTitle} imageUrl={imageUrl}>
      <section>
        <h2>万事开头“备”：您的养鱼启动装备清单</h2>
        <p>
          恭喜您即将开启奇妙的养鱼之旅！在把可爱的鱼儿请回家之前，一份周全的装备清单能让您的开局更加顺利。下面这份清单涵盖了从核心设备到日常维护的各类用品，助您轻松打造一个健康、美观的水下世界。
        </p>
      </section>

      {categories.map((category) => (
        <section key={category.name} className="mt-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">{category.name}</h3>
          <div className="space-y-4">
            {category.items.map((item) => (
              <div key={item.name} className="p-4 border rounded-lg shadow-sm bg-white">
                <h4 className="text-lg font-medium text-blue-600">{item.name}</h4>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="mt-10 bg-green-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-green-700 mb-3">新手采购小贴士：</h3>
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
          <li>
            <strong>不必一步到位：</strong> 先配齐核心设备（鱼缸、过滤、温控），其他可根据需求逐步添置。
          </li>
          <li>
            <strong>量力而行：</strong> 根据预算选择性价比高的产品，不必盲目追求昂贵品牌。
          </li>
          <li>
            <strong>安全第一：</strong> 所有电器设备务必选择正规品牌，注意用电安全和防水。
          </li>
          <li>
            <strong>咨询鱼友：</strong> 多向有经验的鱼友请教，或在水族论坛、商店咨询，避免购买不必要的物品。
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2>结语：装备齐全，信心满满</h2>
        <p>
          准备好这份清单上的物品，您就为成功养鱼打下了坚实的基础。记住，养鱼的乐趣在于过程，祝您在装备齐全后，尽情享受与鱼儿共处的每一天！
        </p>
      </section>
    </ContentPageLayout>
  );
}

