import ContentPageLayout from "@/components/ContentPageLayout";

export default function BudgetingPage() {
  const pageTitle = "养鱼预算规划：新手如何明智地花钱";
  const imageUrl = "/images/budgeting_illustration.png";

  return (
    <ContentPageLayout title={pageTitle} imageUrl={imageUrl}>
      <section>
        <h2>养鱼要花多少钱？一份清晰的预算指南</h2>
        <p>
          “养鱼是不是很贵？”这是许多新手常问的问题。答案是：丰俭由人。您可以花几百元入门，也可以投入成千上万打造专业级水族箱。关键在于<strong>明智规划，按需消费</strong>。本篇将帮您梳理养鱼的主要开销，并提供一些实用的省钱技巧。
        </p>
      </section>

      <section>
        <h2>一、初期一次性投入：打造您的第一个水族世界</h2>
        <p>这是开缸时需要准备的主要设备和材料。价格范围仅供参考，具体因品牌、尺寸、材质等因素浮动较大。</p>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">项目</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">说明</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">参考价格 (元)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">新手建议</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">鱼缸</td>
                <td className="px-6 py-4">玻璃或亚克力材质，常见尺寸30-60cm</td>
                <td className="px-6 py-4">50 - 500+</td>
                <td className="px-6 py-4">从30-40cm标准方缸或成品小缸开始</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">过滤器</td>
                <td className="px-6 py-4">上滤、瀑布、滤筒、水妖精等</td>
                <td className="px-6 py-4">30 - 300+</td>
                <td className="px-6 py-4">小型缸可选瀑布或水妖精，性价比高</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">加热棒</td>
                <td className="px-6 py-4">热带鱼必备，保持水温</td>
                <td className="px-6 py-4">20 - 100+</td>
                <td className="px-6 py-4">选择功率匹配鱼缸大小的</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">照明灯</td>
                <td className="px-6 py-4">观赏或养水草用</td>
                <td className="px-6 py-4">30 - 200+</td>
                <td className="px-6 py-4">初期若不养阳性水草，普通LED夹灯即可</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">温度计</td>
                <td className="px-6 py-4">监测水温</td>
                <td className="px-6 py-4">5 - 20</td>
                <td className="px-6 py-4">必备，普通玻璃温度计即可</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">鱼</td>
                <td className="px-6 py-4">选择皮实易养的品种</td>
                <td className="px-6 py-4">2 - 50+/条</td>
                <td className="px-6 py-4">孔雀鱼、斑马鱼、玛丽鱼等，少量开始</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">底砂/泥 (可选)</td>
                <td className="px-6 py-4">美观、种水草用</td>
                <td className="px-6 py-4">20 - 100+/包</td>
                <td className="px-6 py-4">新手可选择裸缸或少量中性底砂</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">其他工具</td>
                <td className="px-6 py-4">渔网、水桶、刮藻刀、滴管等</td>
                <td className="px-6 py-4">30 - 100</td>
                <td className="px-6 py-4">按需购买基本款</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4">
          <strong>新手入门套装（30-40cm缸）大致预算：</strong> 200 - 600元。这通常能满足基本饲养需求。
        </p>
      </section>

      <section>
        <h2>二、日常持续性开销：养鱼的“水电煤”</h2>
        <p>这些是养鱼过程中需要持续投入的费用：</p>
        <ul>
          <li>
            <strong>鱼食：</strong>根据鱼种和数量，选择合适的颗粒饲料、薄片或冷冻活饵。每月约 <strong>10 - 50元</strong>。
          </li>
          <li>
            <strong>电费：</strong>过滤器24小时运行，加热棒（冬季常用）、灯具（每日数小时）。每月约 <strong>10 - 30元</strong> (小型缸估算)。
          </li>
          <li>
            <strong>水费：</strong>每周换水产生，费用较低。
          </li>
          <li>
            <strong>水质维护品 (可选但推荐)：</strong>
            <ul>
              <li>水质稳定剂（除氯用）：每次换水添加，一瓶可用较久，约20-50元/瓶。</li>
              <li>硝化细菌制剂：开缸或水质波动时使用，约20-60元/瓶。</li>
            </ul>
          </li>
          <li>
            <strong>消耗品：</strong>如过滤棉需定期更换，约5-20元/次。
          </li>
          <li>
            <strong>鱼药 (预备)：</strong>准备一些广谱鱼药以备不时之需，如黄粉、白点净等，约20-50元。
          </li>
        </ul>
        <p>
          <strong>每月大致运营成本：</strong> 30 - 150元 (不含突发鱼病治疗等大额支出)。
        </p>
      </section>

      <section>
        <h2>三、新手省钱小妙招</h2>
        <ul>
          <li>
            <strong>从简开始：</strong>选择小型、结构简单的鱼缸和皮实便宜的鱼种，如孔雀鱼、斑马鱼，先积累经验。
          </li>
          <li>
            <strong>二手淘货：</strong>在本地鱼友群、闲鱼等平台，常能淘到性价比高的二手鱼缸和设备。务必彻底清洗消毒后再使用。
          </li>
          <li>
            <strong>理性消费：</strong>不盲目追求昂贵品牌或不必要的“神器”，很多国产平价设备也能满足需求。
          </li>
          <li>
            <strong>DIY乐趣：</strong>简单的鱼缸背景板、隔离盒等可以尝试自己动手制作。
          </li>
          <li>
            <strong>预防为主：</strong>精心维护水质，科学喂食，能大大降低鱼生病的概率，从而节省药费和精力。
          </li>
          <li>
            <strong>多看多学：</strong>参考鱼友经验，避免走弯路，少交“学费”。
          </li>
        </ul>
      </section>

      <section>
        <h2>总结：预算是规划，乐趣是无价</h2>
        <p>
          清晰的预算规划能让您的养鱼之路更从容。记住，养鱼的真正乐趣在于与这些小生命的互动和对水下微缩世界的探索，而并非金钱投入的多少。祝您在合理预算内，享受到最大的养鱼乐趣！
        </p>
      </section>
    </ContentPageLayout>
  );
}

