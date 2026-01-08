import React from 'react';
import { 
  Activity, Zap, ShieldCheck, 
  ArrowUpRight, Layers, Globe
} from 'lucide-react';
import { 
  ResponsiveContainer, AreaChart, Area, 
} from 'recharts';

const DASHBOARD_DATA = Array.from({ length: 40 }, (_, i) => ({ val: 60 + Math.random() * 20 }));

const DashboardView: React.FC = () => {
  return (
    <div className="p-12 lg:p-24 space-y-20 animate-zen max-w-[1600px] mx-auto">
      {/* Botanical Header with Enhanced Hierarchy */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-4 text-[11px] font-black text-[#8C9AB8] uppercase tracking-[0.3em] mb-6">
             <div className="w-3 h-3 rounded-full bg-[#8C9AB8]/10 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8C9AB8] animate-pulse"></div>
             </div>
             <span>Registry Vitality</span>
          </div>
          <h1 className="text-7xl font-black text-[#1F2124] tracking-tighter leading-[0.95]">Platform <span className="text-[#8A8D91] italic font-light">Equilibrium</span></h1>
          <p className="text-[19px] text-[#4D4F53] font-bold mt-10 leading-relaxed">
            Synthesized telemetry across distributed clusters. Neural health remains in <span className="text-[#1F2124] font-black underline decoration-[#A3B18A] decoration-4 underline-offset-8">optimal alignment</span>.
          </p>
        </div>
        <div className="flex items-center space-x-8 bg-white p-6 rounded-[32px] shadow-2xl shadow-black/[0.02] border border-black/[0.01]">
           <div className="flex -space-x-3">
              {['AS', 'MS', 'DT', 'AM'].map((n, i) => (
                <div key={i} className={`w-12 h-12 rounded-full border-4 border-white bg-[#F9F7F4] flex items-center justify-center text-[10px] font-black text-[#8A8D91] shadow-xl shadow-black/5`}>
                  {n}
                </div>
              ))}
           </div>
           <div className="h-8 w-[1px] bg-black/[0.08]" />
           <div>
              <p className="label-zen text-[9px] mb-1.5 opacity-50 font-black">Active Nodes</p>
              <p className="text-2xl font-black text-[#1F2124] tracking-tighter">1,244</p>
           </div>
        </div>
      </div>

      {/* Primary Analytics Layer */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="zen-card p-16 lg:col-span-2 group overflow-hidden">
           <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-16">
              <div className="space-y-10">
                 <p className="label-zen text-[#8C9AB8] font-black tracking-widest">Stability Gradient</p>
                 <div className="flex items-baseline space-x-5">
                    <h2 className="text-8xl font-black text-[#1F2124] tracking-tighter">94.2</h2>
                    <div className="flex items-center space-x-3 text-[#A3B18A] px-5 py-2 bg-[#F0F4E8] rounded-xl border border-[#A3B18A]/10 shadow-lg shadow-[#A3B18A]/5">
                       <ArrowUpRight size={18} strokeWidth={3} />
                       <span className="text-[12px] font-black tracking-widest uppercase">Nominal</span>
                    </div>
                 </div>
                 <p className="text-[16px] font-bold text-[#4D4F53] leading-relaxed max-w-sm italic opacity-90">
                   "Core infrastructure reflects steady-state frequencies across all distributed organizational nodes."
                 </p>
              </div>
              <div className="flex-1 h-64 w-full max-w-md opacity-80 group-hover:opacity-100 transition-opacity duration-1000">
                 <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={DASHBOARD_DATA}>
                       <defs>
                          <linearGradient id="indigoGrad" x1="0" y1="0" x2="0" y2="1">
                             <stop offset="0%" stopColor="#8C9AB8" stopOpacity={0.5}/>
                             <stop offset="100%" stopColor="#8C9AB8" stopOpacity={0}/>
                          </linearGradient>
                       </defs>
                       <Area 
                        type="monotone" 
                        dataKey="val" 
                        stroke="#8C9AB8" 
                        strokeWidth={4} 
                        fill="url(#indigoGrad)" 
                        dot={false} 
                      />
                    </AreaChart>
                 </ResponsiveContainer>
              </div>
           </div>
        </div>

        <div className="zen-card p-14 flex flex-col justify-between bg-[#1F2124] border-none text-white shadow-2xl shadow-black/20">
           <div className="space-y-8">
              <p className="label-zen text-white opacity-40 font-black tracking-widest">Observations</p>
              <h3 className="text-4xl font-bold tracking-tight leading-snug">Zero<br/><span className="italic font-light opacity-50 text-3xl">Variance Logged</span></h3>
           </div>
           <div className="mt-12 p-8 bg-white/5 rounded-[28px] border border-white/10 backdrop-blur-sm">
              <p className="text-[14px] font-bold text-white/90 leading-relaxed italic">
                 Neural sync is holding at a synchronized frequency. No deviations detected in current telemetry.
              </p>
           </div>
        </div>
      </div>

      {/* Metric Grid with Tactical Hierarchy */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
         {[
           { label: 'Latency Pulse', val: '88ms', icon: Globe, c: 'text-indigo', bg: 'indigo' },
           { label: 'Flow Health', val: '99.4%', icon: Activity, c: 'text-olive', bg: 'olive' },
           { label: 'Variance Risk', val: '0.02%', icon: ShieldCheck, c: 'text-ochre', bg: 'ochre' },
           { label: 'Intelligence', val: 'v4.2', icon: Layers, c: 'text-violet', bg: 'violet' },
           { label: 'Sync velocity', val: '1.2gb/s', icon: Zap, c: 'text-slate', bg: 'slate' },
         ].map((item, i) => (
           <div key={i} className="zen-card p-12 group overflow-hidden hover:bg-black/[0.005]">
              <div 
                className={`w-14 h-14 rounded-[18px] bg-white border border-black/[0.03] flex items-center justify-center mb-10 transition-all duration-700 group-hover:scale-90 group-hover:rotate-6 ${item.c} shadow-sm group-hover:shadow-md`}
              >
                 <item.icon size={22} strokeWidth={2} />
              </div>
              <p className="label-zen mb-3 opacity-50 font-black tracking-[0.2em]">{item.label}</p>
              <h4 className="text-3xl font-black text-[#1F2124] tracking-tighter">{item.val}</h4>
              
              <div className="mt-8 h-1.5 w-full bg-black/[0.04] rounded-full overflow-hidden">
                <div className={`h-full bg-${item.bg} rounded-full transition-all duration-1000`} style={{ width: '75%', opacity: 0.8 }}></div>
              </div>
           </div>
         ))}
      </div>
    </div>
  );
};

export default DashboardView;