import ContentPageLayout from "@/components/ContentPageLayout";

export default function RoutineMaintenanceGuidePage() {
  const pageTitle = "鱼缸的日常“体检”与“大扫除”：维护指南";
  const imageUrl = "/images/routine_maintenance_guide_illustration.png";

  const dailyTasks = [
    {
      task: "观察鱼只状态 (Observe Fish)",
      details: "检查鱼儿是否活跃、体色是否正常、有无外伤或异常行为（如摩擦身体、呼吸急促、漂浮异常等）。早晚各一次，喂食时是最佳观察时机。",
      icon: "👀",
    },
    {
      task: "检查设备运行 (Check Equipment)",
      details: "确保过滤器、加热棒、灯具等设备正常工作，水流、水温是否正常。",
      icon: "⚙️",
    },
    {
      task: "移除明显残饵和漂浮物 (Remove Debris)",
      details: "喂食后及时捞出未吃完的食物，清除水面漂浮的杂物。",
      icon: "🗑️",
    },
  ];

  const weeklyTasks = [
    {
      task: "换水 (Water Change)",
      details: "每周换掉鱼缸总水量的1/4至1/3。使用困好的新水，注意新水与缸内水的温差不宜过大（一般不超过2℃）。换水时可用虹吸管吸走底床的粪便和污物。",
      frequency: "每周1次",
      icon: "💧🔄",
    },
    {
      task: "清洁缸壁 (Clean Tank Walls)",
      details: "用刮藻刀或鱼缸刷清除缸壁上的藻类和污垢。",
      frequency: "每周1次或按需",
      icon: "🧼",
    },
    {
      task: "修剪水草 (Prune Plants - if applicable)",
      details: "移除枯黄叶片，修剪过于茂盛的水草，保持水草健康和鱼缸美观。",
      frequency: "按需",
      icon: "🌿✂️",
    },
    {
      task: "检查水质参数 (Test Water Parameters - optional but recommended)",
      details: "定期检测pH、亚硝酸盐(NO2)、硝酸盐(NO3)等关键水质指标，尤其是在新开缸或鱼只状态不佳时。",
      frequency: "每周或每两周1次",
      icon: "🧪",
    },
  ];

  const monthlyBimonthlyTasks = [
    {
      task: "清洗过滤器材 (Clean Filter Media)",
      details: "每月或每两个月清洗一次过滤器中的物理滤材（如过滤棉）。生化滤材（如陶瓷环、生化球）不宜频繁清洗，若需清洗也应用原缸水轻轻漂洗，避免杀死过多硝化细菌。过滤棉等消耗品需定期更换。",
      frequency: "每月或隔月1次",
      icon: "🔧",
    },
    {
      task: "彻底清洁底床 (Deep Clean Substrate - if needed)",
      details: "对于铺设底砂的鱼缸，可根据污染情况，每隔数月进行一次较彻底的底床清洁（如使用洗沙器）。水草缸不宜过度翻动底床。",
      frequency: "按需，数月一次",
      icon: "🧹",
    },
    {
      task: "检查并清洁水管、加热棒等设备 (Inspect & Clean Equipment Parts)",
      details: "检查水泵进水口、水管连接处是否通畅，加热棒是否有水垢附着等，并进行相应清洁。",
      frequency: "每月或隔月1次",
      icon: "🔩",
    },
  ];

  const maintenanceTips = [
    "<strong>规律性是关键：</strong>养成规律的维护习惯，比偶尔一次的“大扫除”效果更好。",
    "<strong>避免过度清洁：</strong>鱼缸是一个微型生态系统，过度清洁会破坏已建立的硝化系统，对鱼不利。",
    "<strong>使用专用工具：</strong>养鱼工具应专用，避免交叉污染。",
    "<strong>注意安全：</strong>操作电器设备（如加热棒、水泵）时，务必先断开电源。",
    "<strong>记录维护日志：</strong>可以简单记录每次换水、清洗滤材的日期和水质检测结果，有助于追踪鱼缸状态。",
    "<strong>根据鱼缸情况调整：</strong>不同大小、不同饲养密度、不同类型的鱼缸，其维护频率和侧重点可能有所不同，需灵活调整。",
  ];

  return (
    <ContentPageLayout title={pageTitle} imageUrl={imageUrl}>
      <section>
        <h2>引言：勤劳的双手，换来鱼儿的健康家园</h2>
        <p>
          一个稳定、洁净、美观的鱼缸环境，离不开主人日常的精心维护。规律的日常管理和定期清洁，是预防鱼病、保持水质、让鱼儿健康生活的基石。本指南将带您了解鱼缸日常维护的各项任务和技巧，让您的养鱼生活更加从容有序。
        </p>
      </section>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">每日“打卡”：养鱼人的日常功课</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dailyTasks.map((task) => (
            <div key={task.task} className="p-4 border rounded-lg shadow-sm bg-white">
              <h4 className="text-lg font-medium text-blue-600 flex items-center">
                <span className="text-2xl mr-2">{task.icon}</span>
                {task.task}
              </h4>
              <p className="text-xs text-gray-600 mt-1">{task.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">每周“小扫除”：保持水清鱼靓</h3>
        <div className="space-y-4">
          {weeklyTasks.map((task) => (
            <div key={task.task} className="p-4 border rounded-lg shadow-sm bg-gray-50 flex items-start">
              <span className="text-3xl mr-4 text-green-500">{task.icon}</span>
              <div>
                <h4 className="text-lg font-medium text-gray-700">{task.task} <span className="text-xs text-gray-500">({task.frequency})</span></h4>
                <p className="text-sm text-gray-600 mt-1">{task.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">每月/隔月“深度保养”：巩固生态平衡</h3>
        <div className="space-y-4">
          {monthlyBimonthlyTasks.map((task) => (
            <div key={task.task} className="p-4 border rounded-lg shadow-sm bg-blue-50 flex items-start">
              <span className="text-3xl mr-4 text-blue-500">{task.icon}</span>
              <div>
                <h4 className="text-lg font-medium text-gray-700">{task.task} <span className="text-xs text-gray-500">({task.frequency})</span></h4>
                <p className="text-sm text-gray-600 mt-1">{task.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 bg-yellow-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-yellow-700 mb-3">鱼缸维护黄金法则</h3>
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
          {maintenanceTips.map((tip, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: tip }} />
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2>结语：维护得当，养鱼无忧</h2>
        <p>
          规律且正确的日常维护是成功养鱼的关键。通过持之以恒的努力，您不仅能为爱鱼创造一个理想的生存环境，更能从中体会到打理“水下微缩世界”的乐趣和成就感。记住，一个健康的鱼缸始于日常的点滴呵护。
        </p>
      </section>
    </ContentPageLayout>
  );
}

