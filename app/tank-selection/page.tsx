import ContentPageLayout from "@/components/ContentPageLayout";

export default function TankSelectionPage() {
  const pageTitle = "鱼缸选择指南：为爱鱼打造舒适的家";
  const imageUrl = "/images/tank_selection_illustration.png";

  const tankShapes = [
    {
      name: "长方形鱼缸",
      pros: "最常见，观赏面广，易造景，水体稳定，易清洁。",
      cons: "-",
      recommendation: "新手首选，经典实用。",
    },
    {
      name: "正方形鱼缸",
      pros: "小型缸常见，适合桌面微景或少量小型鱼。",
      cons: "造景空间相对受限。",
      recommendation: "适合特定需求，如斗鱼单养。",
    },
    {
      name: "圆形鱼缸 (传统金鱼缸)",
      pros: "传统造型，部分人喜爱。",
      cons: "不利于水流循环，空间利用率低，可能影响鱼的视觉，过滤安装不便。",
      recommendation: "现代水族不推荐，尤其不适合新手。",
    },
    {
      name: "异形/创意缸",
      pros: "造型独特，观赏性强。",
      cons: "维护清洁难度大，水流和过滤设计可能复杂。",
      recommendation: "不适合新手，待有经验后再尝试。",
    },
  ];

  const tankMaterials = [
    {
      name: "普通玻璃",
      pros: "价格便宜。",
      cons: "透明度略差，侧面可能显绿色。",
      recommendation: "预算有限的基础选择。",
    },
    {
      name: "浮法玻璃",
      pros: "透明度优于普通玻璃，性价比高。",
      cons: "-",
      recommendation: "新手推荐，兼顾价格与观赏性。",
    },
    {
      name: "超白玻璃",
      pros: "透光率极高，观赏效果最佳，尤其适合水草造景。",
      cons: "价格相对较高。",
      recommendation: "追求极致观赏效果或水草玩家首选。",
    },
    {
      name: "亚克力 (Acrylic)",
      pros: "比玻璃轻，不易破碎，透光性好。",
      cons: "表面易刮花，长期使用可能发黄或变形。",
      recommendation: "适合有小孩或需要经常搬动的场景，注意保养。",
    },
    {
      name: "塑料 (Plastic)",
      pros: "轻便，便宜。",
      cons: "透明度差，易老化，不适合长期正式养鱼。",
      recommendation: "仅适用于临时容器或儿童玩具。",
    },
  ];

  return (
    <ContentPageLayout title={pageTitle} imageUrl={imageUrl}>
      <section>
        <h2>第一步：选对"房子"，养鱼成功一半</h2>
        <p>
          鱼缸是鱼儿的家，选择一个合适的鱼缸至关重要。它不仅影响鱼的健康和舒适度，也直接关系到您的观赏体验和日常维护的便捷性。让我们从鱼缸的<strong>形状、大小、材质</strong>三个核心要素入手，帮您做出明智选择。
        </p>
      </section>

      <section>
        <h2>一、鱼缸的形状：哪种更适合我？</h2>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">形状</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">优点</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">缺点</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">新手建议</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tankShapes.map((shape) => (
                <tr key={shape.name}>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">{shape.name}</td>
                  <td className="px-6 py-4">{shape.pros}</td>
                  <td className="px-6 py-4">{shape.cons}</td>
                  <td className="px-6 py-4 text-green-600 font-semibold">{shape.recommendation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-8">
        <h2>二、鱼缸的大小：越大越好吗？</h2>
        <p>
          水族圈有句老话：&ldquo;大水体，好养鱼&rdquo;。更大的水体意味着水质和水温更稳定，鱼儿的活动空间也更充足。对于新手而言，过小的鱼缸（如10升以下）水质极易波动，一旦出现问题，鱼儿几乎没有缓冲余地，维护难度直线上升。
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <strong>新手起步尺寸：</strong> 建议从长度<strong>30厘米（约1尺）以上，容量20-50升</strong>的鱼缸开始。如果空间和预算允许，60厘米的鱼缸会是更从容的选择。
          </li>
          <li>
            <strong>考虑因素：</strong>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li><strong>计划鱼种和数量：</strong> 不同鱼对空间需求不同，高密度饲养需要更大水体。</li>
              <li><strong>摆放空间：</strong> 确保有稳固、平整的台面或鱼缸柜。</li>
              <li><strong>个人预算：</strong> 鱼缸越大，配套设备（过滤、加热等）的功率和价格通常也越高。</li>
            </ul>
          </li>
        </ul>
        <p className="mt-2 bg-yellow-100 p-3 rounded-md text-yellow-800">
          <strong>新手误区：</strong>不要因为想&ldquo;试试水&rdquo;就买个迷你缸。小缸看似省钱省事，实则对新手技术要求更高，更容易&ldquo;翻车&rdquo;导致挫败感。
        </p>
      </section>

      <section className="mt-8">
        <h2>三、鱼缸的材质：哪种更清晰耐用？</h2>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">材质</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">优点</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">缺点</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">新手建议</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tankMaterials.map((material) => (
                <tr key={material.name}>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">{material.name}</td>
                  <td className="px-6 py-4">{material.pros}</td>
                  <td className="px-6 py-4">{material.cons}</td>
                  <td className="px-6 py-4 text-green-600 font-semibold">{material.recommendation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-8">
        <h2>额外考量：成品缸 vs. DIY组装</h2>
        <ul>
          <li><strong>成品缸/一体缸：</strong>通常集成了鱼缸、过滤、灯光，有时甚至加热棒。对新手来说开箱即用，比较省心。但缺点是设备通常是标配，后续升级或更换单个部件可能受限。</li>
          <li><strong>DIY组装：</strong>自己分别选购鱼缸、过滤器、灯具等设备。可以根据需求和预算灵活搭配，未来升级也更方便。但需要对各种设备有一定的了解。</li>
        </ul>
        <p className="mt-2">
          <strong>新手建议：</strong>如果不想太折腾，质量可靠的成品缸是不错的选择。如果乐于研究，DIY组装能带来更多定制乐趣和性价比。
        </p>
      </section>

      <section className="mt-8">
        <h2>总结：选缸三思，养鱼轻松</h2>
        <p>
          选择鱼缸是您养鱼旅程的基石。综合考虑您的<strong>预算、空间、计划饲养的鱼种以及个人偏好</strong>，选择一款最适合您的鱼缸。一个合适的"家"，能让您的鱼儿更健康，您的养鱼生活也更轻松愉快！
        </p>
      </section>
    </ContentPageLayout>
  );
}

