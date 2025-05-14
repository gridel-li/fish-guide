import ContentPageLayout from "@/components/ContentPageLayout";

export default function BeginnerSpeciesPage() {
  const pageTitle = "新手鱼种推荐：轻松入门的观赏鱼伙伴";
  const imageUrl = "/images/beginner_species_illustration.png";

  const fishSpecies = [
    {
      name: "孔雀鱼 (Guppy)",
      description: "色彩斑斓，尾鳍飘逸，繁殖能力强，是新手缸中的“常青树”。直接产小鱼，观赏性与互动性俱佳。",
      careLevel: "非常容易",
      size: "3-5厘米",
      temperament: "温和",
      notes: "喜欢弱碱性水质，注意避免与大型或攻击性强的鱼混养。",
    },
    {
      name: "斑马鱼 (Zebra Danio)",
      description: "体表有标志性条纹，活泼好动，喜欢群游。对水温适应范围广，非常皮实耐养。",
      careLevel: "非常容易",
      size: "4-6厘米",
      temperament: "温和，群居",
      notes: "建议至少饲养5-6条，以展现其群游习性。",
    },
    {
      name: "玛丽鱼 (Molly Fish)",
      description: "品种多样（黑玛丽、金玛丽等），体质强健，部分品种能啃食油膜和藻类。卵胎生，易繁殖。",
      careLevel: "容易",
      size: "5-10厘米",
      temperament: "温和",
      notes: "喜欢偏硬的水质，可适当添加少量水族盐。",
    },
    {
      name: "米奇鱼 (Platy / Mickey Mouse Fish)",
      description: "尾柄有可爱的“米老鼠”图案，色彩鲜艳，活泼好动。与孔雀鱼、玛丽鱼一样易于饲养和繁殖。",
      careLevel: "容易",
      size: "4-6厘米",
      temperament: "温和",
      notes: "适应性强，对水质要求不高。",
    },
    {
      name: "泰国斗鱼 (Betta Fish) - 雄鱼需单养",
      description: "鳍帆夸张，色彩华丽。拥有迷鳃器官，可直接呼吸空气，对溶氧要求不高。",
      careLevel: "容易",
      size: "5-7厘米",
      temperament: "雄鱼好斗，雌鱼相对温和",
      notes: "雄鱼必须单独饲养，避免与任何其他鱼（尤其颜色鲜艳或鳍条飘逸的）混养。适合小型桌面缸。",
    },
    {
      name: "迷你鹦鹉鱼 (Mini Blood Parrot Cichlid)",
      description: "体型圆胖可爱，颜色鲜红或橘红。性格相对活泼，但有时有一定领域性。",
      careLevel: "容易",
      size: "5-8厘米",
      temperament: "略有领域性",
      notes: "注意与小型温顺鱼混养时的空间和躲避物。",
    },
    {
      name: "白云金丝鱼 (White Cloud Mountain Minnow)",
      description: "中国原生鱼，体态优美，耐低温，无需加热棒也能在多数室温下良好生存。",
      careLevel: "非常容易",
      size: "3-4厘米",
      temperament: "温和，群居",
      notes: "适合小型缸或无加温设备的鱼缸。",
    },
    {
      name: "红绿灯鱼 (Neon Tetra) - 需稳定水质",
      description: "体表有亮丽的霓虹线条，群游效果极佳。对水质突变较敏感。",
      careLevel: "中等",
      size: "3-4厘米",
      temperament: "温和，群居",
      notes: "建议在硝化系统完全稳定后再引入，至少饲养6条以上。",
    },
    {
      name: "观背青鳉 (Japanese Rice Fish / Medaka)",
      description: "小型耐寒鱼，从上方观赏其背部花纹独特。适合小型缸、桌面缸甚至部分室外容器。",
      careLevel: "非常容易",
      size: "2-4厘米",
      temperament: "温和",
      notes: "对水质要求不高，适应性强。",
    },
  ];

  return (
    <ContentPageLayout title={pageTitle} imageUrl={imageUrl}>
      <section>
        <h2>挑选您的第一批“水中萌宠”</h2>
        <p>
          踏入养鱼世界，选择合适的“开缸鱼”至关重要。理想的新手鱼种应具备皮实耐养、对水质波动容忍度高、性格温和、易于照料等特点。下面为您精选了几款广受好评的新手友好型观赏鱼，希望能帮助您找到心仪的伙伴。
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {fishSpecies.map((fish) => (
          <div key={fish.name} className="border p-4 rounded-lg shadow hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">{fish.name}</h3>
            <p className="text-sm text-gray-700 mb-1"><strong>特点：</strong>{fish.description}</p>
            <p className="text-sm text-gray-700 mb-1"><strong>饲养难度：</strong><span className="font-medium">{fish.careLevel}</span></p>
            <p className="text-sm text-gray-700 mb-1"><strong>成体大小：</strong>{fish.size}</p>
            <p className="text-sm text-gray-700 mb-1"><strong>性格：</strong>{fish.temperament}</p>
            {fish.notes && <p className="text-sm text-gray-600 mt-2 bg-gray-100 p-2 rounded"><strong>新手小贴士：</strong>{fish.notes}</p>}
          </div>
        ))}
      </div>

      <section className="mt-8">
        <h2>新手选鱼黄金法则：</h2>
        <ul>
          <li><strong>少量开始：</strong>无论选择哪种鱼，初次入缸数量不宜过多，给硝化系统和自己一个适应的过程。</li>
          <li><strong>健康至上：</strong>购买时仔细观察，选择体表无伤、鳍条完整、游动活泼、呼吸均匀的健康个体。</li>
          <li><strong>了解习性：</strong>在混养前，务必了解不同鱼种的体型差异、食性、对水质水温的要求以及是否具有攻击性。</li>
          <li><strong>耐心检疫：</strong>新鱼入缸前最好进行1-2周的单独检疫，以防带入病菌。</li>
        </ul>
        <p className="mt-4">
          选择合适的鱼种是成功养鱼的第一步。祝您能找到心仪的“水中精灵”，开启愉快的养鱼生活！
        </p>
      </section>
    </ContentPageLayout>
  );
}

