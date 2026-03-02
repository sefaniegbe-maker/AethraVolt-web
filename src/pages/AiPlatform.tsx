import { motion } from 'framer-motion';
import { Brain, Database, Cpu, Zap, Activity, Network, Cloud, Lock, BarChart, ArrowRight, RefreshCw, Layers } from 'lucide-react';

export default function AiPlatform() {
  return (
    <div className="bg-slate-50 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-emerald-500 opacity-20 blur-[100px]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-6 border border-emerald-500/20">
              <Brain className="w-4 h-4" />
              <span>AethraOS 核心算法</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              驱动未来的<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">能源大脑</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
              基于深度强化学习与海量多维数据，AethraOS 能够实现毫秒级响应的全局能源优化，让每一度电都发挥最大价值。
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI Architecture Diagram */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI 架构图</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">端-边-云协同计算，构建高可靠、低延迟的智能能源网络。</p>
          </div>

          <div className="max-w-5xl mx-auto relative">
            {/* Architecture Visualization */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {/* Edge Layer */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm relative"
              >
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">边缘计算层 (Edge)</h3>
                <ul className="space-y-3 text-slate-600 text-sm">
                  <li className="flex items-center gap-2"><Activity className="w-4 h-4 text-emerald-500" /> 毫秒级数据采集</li>
                  <li className="flex items-center gap-2"><Activity className="w-4 h-4 text-emerald-500" /> 本地实时控制策略</li>
                  <li className="flex items-center gap-2"><Activity className="w-4 h-4 text-emerald-500" /> 离线自治运行能力</li>
                  <li className="flex items-center gap-2"><Activity className="w-4 h-4 text-emerald-500" /> 硬件级安全防护</li>
                </ul>
              </motion.div>

              {/* Network / Comm Layer */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 shadow-xl relative transform md:-translate-y-4"
              >
                <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-xl flex items-center justify-center mb-6">
                  <Network className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">AI 核心引擎 (Core)</h3>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li className="flex items-center gap-2"><Brain className="w-4 h-4 text-emerald-400" /> 深度强化学习模型</li>
                  <li className="flex items-center gap-2"><Brain className="w-4 h-4 text-emerald-400" /> 多目标优化算法</li>
                  <li className="flex items-center gap-2"><Brain className="w-4 h-4 text-emerald-400" /> 负荷与价格预测</li>
                  <li className="flex items-center gap-2"><Brain className="w-4 h-4 text-emerald-400" /> 联邦学习隐私保护</li>
                </ul>
              </motion.div>

              {/* Cloud Layer */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm relative"
              >
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <Cloud className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">云端协同层 (Cloud)</h3>
                <ul className="space-y-3 text-slate-600 text-sm">
                  <li className="flex items-center gap-2"><Database className="w-4 h-4 text-emerald-500" /> 海量数据湖存储</li>
                  <li className="flex items-center gap-2"><Database className="w-4 h-4 text-emerald-500" /> 全局策略下发</li>
                  <li className="flex items-center gap-2"><Database className="w-4 h-4 text-emerald-500" /> 跨站点协同调度</li>
                  <li className="flex items-center gap-2"><Database className="w-4 h-4 text-emerald-500" /> 模型持续迭代训练</li>
                </ul>
              </motion.div>
            </div>
            
            {/* Connecting Lines (Visible on md+) */}
            <div className="hidden md:block absolute top-1/2 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-blue-200 via-emerald-400 to-purple-200 -z-0"></div>
          </div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">多维数据来源</h2>
              <p className="text-slate-600 mb-8 text-lg">
                精准的预测来源于高质量的数据。AethraOS 实时接入超过 50 种数据源，构建全息能源数字孪生。
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "气象数据", desc: "温湿度、辐照度、风速等高精度气象预测", icon: Cloud },
                  { title: "市场信号", desc: "现货电价、分时电价、辅助服务市场价格", icon: BarChart },
                  { title: "设备状态", desc: "电池SOC、SOH、逆变器效率、实时温度", icon: Activity },
                  { title: "历史负荷", desc: "企业历史用电曲线、生产排班计划", icon: Database },
                  { title: "电网指令", desc: "需求响应信号、电网频率/电压波动", icon: Zap },
                  { title: "环境感知", desc: "厂区光照、人员分布、温控需求", icon: Layers },
                ].map((item, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 flex items-start gap-4">
                    <div className="bg-slate-100 p-2 rounded-lg text-slate-700">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-full border border-slate-200 absolute inset-0 animate-[spin_60s_linear_infinite]"></div>
              <div className="aspect-square rounded-full border border-slate-200 absolute inset-8 animate-[spin_40s_linear_infinite_reverse]"></div>
              <div className="aspect-square rounded-full border border-slate-200 absolute inset-16 animate-[spin_20s_linear_infinite]"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-emerald-500 rounded-full shadow-2xl shadow-emerald-500/30 flex items-center justify-center text-white z-10">
                  <Database className="w-12 h-12" />
                </div>
              </div>
              
              {/* Floating Data Nodes */}
              <div className="absolute top-[10%] left-[20%] w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-500"><Cloud className="w-5 h-5" /></div>
              <div className="absolute bottom-[20%] right-[10%] w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-purple-500"><BarChart className="w-5 h-5" /></div>
              <div className="absolute top-[30%] right-[15%] w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-orange-500"><Zap className="w-5 h-5" /></div>
              <div className="absolute bottom-[15%] left-[15%] w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-rose-500"><Activity className="w-5 h-5" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Logic */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">深度学习逻辑</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">从数据感知到自主决策的完整闭环。</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-2 border-slate-200 ml-4 md:ml-0 md:left-1/2 md:-translate-x-1/2 space-y-12">
              {[
                { step: "01", title: "数据清洗与特征工程", desc: "剔除异常值，提取时间序列特征、气象特征与周期性特征，构建高维特征空间。" },
                { step: "02", title: "多模态预测模型", desc: "采用 LSTM 与 Transformer 结合的网络架构，分别对光伏出力、负荷需求、电价走势进行滚动预测。" },
                { step: "03", title: "强化学习决策 (DDPG/PPO)", desc: "将储能系统视为智能体(Agent)，在模拟环境中不断试错，以收益最大化、电池寿命损耗最小化为奖励函数(Reward)进行策略学习。" },
                { step: "04", title: "安全约束与规则兜底", desc: "在 AI 输出的连续动作空间上，叠加物理约束（如SOC上下限、最大充放电功率）和硬性规则，确保系统绝对安全。" }
              ].map((item, i) => (
                <div key={i} className={`relative flex items-center md:w-1/2 ${i % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8 md:justify-end'}`}>
                  <div className="absolute left-[-9px] md:left-auto md:right-[-9px] w-4 h-4 rounded-full bg-emerald-500 border-4 border-white shadow-sm z-10"></div>
                  <div className={`bg-slate-50 p-6 rounded-2xl border border-slate-200 w-full ml-6 md:ml-0 ${i % 2 === 0 ? '' : 'md:text-right'}`}>
                    <span className="text-emerald-500 font-mono font-bold text-sm mb-2 block">STEP {item.step}</span>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dispatch Model (Octopus Energy Style) */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">智能调度模型</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">动态响应市场价格与电网需求，实现价值最大化。</p>
          </div>

          <div className="max-w-5xl mx-auto bg-slate-800 rounded-3xl p-8 border border-slate-700 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-emerald-400">动态套利与需量管理</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-1">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">谷电时段 (低电价)</h4>
                      <p className="text-slate-400 text-sm">系统自动识别电价低谷，控制储能系统满功率充电，储备廉价电能。</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 mt-1">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">峰电时段 (高电价)</h4>
                      <p className="text-slate-400 text-sm">在电价高峰期，储能系统放电供负载使用，减少从电网购买高价电。</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 mt-1">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">需量控制 (防超限)</h4>
                      <p className="text-slate-400 text-sm">实时监测企业总负荷，当逼近申报需量时，储能紧急放电削峰，避免高额需量电费罚款。</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Chart Visualization */}
              <div className="bg-slate-900 rounded-xl p-6 border border-slate-700 relative">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm text-slate-400 font-mono">24H 调度曲线模拟</span>
                  <div className="flex gap-2">
                    <span className="flex items-center gap-1 text-xs text-slate-400"><div className="w-2 h-2 bg-blue-500 rounded-full"></div>电价</span>
                    <span className="flex items-center gap-1 text-xs text-slate-400"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div>储能动作</span>
                  </div>
                </div>
                
                {/* Simulated Chart Area */}
                <div className="h-48 relative flex items-end gap-1">
                  {Array.from({ length: 24 }).map((_, i) => {
                    // Simulate price curve (high in day, low at night)
                    const isHighPrice = i >= 9 && i <= 11 || i >= 18 && i <= 21;
                    const isLowPrice = i >= 0 && i <= 6;
                    const priceHeight = isHighPrice ? '80%' : isLowPrice ? '20%' : '50%';
                    
                    // Simulate battery action
                    const actionColor = isLowPrice ? 'bg-blue-500' : isHighPrice ? 'bg-orange-500' : 'bg-slate-600';
                    const actionHeight = isLowPrice ? '40%' : isHighPrice ? '60%' : '10%';
                    
                    return (
                      <div key={i} className="flex-1 flex flex-col justify-end items-center gap-1 group relative">
                        {/* Tooltip */}
                        <div className="absolute -top-10 bg-slate-800 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                          {i}:00 - {isLowPrice ? '充电' : isHighPrice ? '放电' : '待机'}
                        </div>
                        {/* Battery Action Bar */}
                        <div className={`w-full ${actionColor} rounded-t-sm opacity-80`} style={{ height: actionHeight }}></div>
                        {/* Price Line Point (Simulated) */}
                        <div className="absolute w-1.5 h-1.5 bg-white rounded-full z-10" style={{ bottom: priceHeight }}></div>
                      </div>
                    );
                  })}
                  {/* Price Line Connector (Simulated with SVG) */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                    <path d="M 0,150 Q 50,150 100,100 T 200,40 T 300,100 T 400,40 T 500,150" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                  </svg>
                </div>
                <div className="flex justify-between mt-2 text-xs text-slate-500 font-mono">
                  <span>00:00</span>
                  <span>12:00</span>
                  <span>24:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Self-Optimization Mechanism (Tesla Style) */}
      <section className="py-24 bg-[#0a0a0a] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">自优化机制</h2>
            <p className="text-slate-400 text-lg">
              AethraOS 不是一个静态的系统。它通过影子模式和持续学习，不断进化，适应不断变化的电网环境和用户习惯。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Code / Terminal View */}
            <div className="bg-[#141414] rounded-xl border border-[#333] overflow-hidden font-mono text-sm flex flex-col">
              <div className="bg-[#1f1f1f] px-4 py-2 flex items-center gap-2 border-b border-[#333]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-[#888] text-xs ml-2">aethra_optimizer.py</span>
              </div>
              <div className="p-6 text-[#ccc] flex-1 overflow-x-auto">
                <pre className="leading-relaxed">
<span className="text-purple-400">def</span> <span className="text-blue-400">shadow_mode_evaluation</span>(current_policy, new_policy, env_data):
    <span className="text-green-600">"""
    Run new policy in shadow mode alongside current policy
    to evaluate performance without affecting real hardware.
    """</span>
    current_reward = current_policy.evaluate(env_data)
    new_reward = new_policy.evaluate(env_data)
    
    <span className="text-purple-400">if</span> new_reward &gt; current_reward * <span className="text-orange-400">1.05</span>:
        <span className="text-blue-400">trigger_ota_update</span>(new_policy)
        <span className="text-purple-400">return</span> <span className="text-orange-400">True</span>
        
    <span className="text-purple-400">return</span> <span className="text-orange-400">False</span>

<span className="text-[#888]"># Continuous learning loop</span>
<span className="text-purple-400">while</span> <span className="text-orange-400">True</span>:
    telemetry = <span className="text-blue-400">fetch_fleet_data</span>()
    updated_model = <span className="text-blue-400">train_ppo_agent</span>(telemetry)
    <span className="text-blue-400">shadow_mode_evaluation</span>(active_model, updated_model, telemetry)
                </pre>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <div className="bg-[#141414] p-6 rounded-xl border border-[#333] hover:border-emerald-500/50 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <RefreshCw className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-lg font-bold">影子模式 (Shadow Mode)</h3>
                </div>
                <p className="text-[#888] text-sm leading-relaxed">
                  新算法在后台以“影子模式”运行，接收真实的传感器数据但不输出实际控制指令。通过对比影子模型与当前运行模型的收益，验证新算法的有效性。
                </p>
              </div>
              
              <div className="bg-[#141414] p-6 rounded-xl border border-[#333] hover:border-emerald-500/50 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Cloud className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-lg font-bold">OTA 无感升级</h3>
                </div>
                <p className="text-[#888] text-sm leading-relaxed">
                  当影子模式验证新模型能带来至少 5% 的收益提升时，系统将通过安全的 OTA 通道将新模型下发至边缘控制器，实现算法的无缝迭代。
                </p>
              </div>

              <div className="bg-[#141414] p-6 rounded-xl border border-[#333] hover:border-emerald-500/50 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Database className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-lg font-bold">联邦学习 (Federated Learning)</h3>
                </div>
                <p className="text-[#888] text-sm leading-relaxed">
                  汇聚海量站点的运行特征，在不共享用户隐私数据的前提下，实现全局模型的联合训练，让每一个站点都能分享全网的智慧。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
