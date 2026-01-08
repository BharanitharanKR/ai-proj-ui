import React from 'react';
import { MOCK_INTEGRATIONS } from '../constants';
import { Plug, ExternalLink, Plus, ChevronRight, Activity, Globe, Box } from 'lucide-react';

const IntegrationsView: React.FC = () => {
  return (
    <div className="p-12 lg:p-24 space-y-20 animate-zen max-w-[1600px] mx-auto">
      {/* Zen Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div className="max-w-xl">
          <div className="flex items-center space-x-4 text-[11px] font-black text-[#8C9AB8] uppercase tracking-[0.3em] mb-6">
            <span>Infrastructure</span>
            <ChevronRight size={12} className="opacity-40" />
            <span className="text-[#1F2124]">Intelligence Sources</span>
          </div>
          <h2 className="text-6xl font-black text-[#1F2124] tracking-tighter leading-none">Connected <span className="text-[#8A8D91] italic font-light">Telemetry</span></h2>
          <p className="text-[#4D4F53] text-[18px] font-bold mt-8 leading-relaxed">
            Harmonize external data sources with the <span className="text-[#A3B18A] font-extrabold underline decoration-2 underline-offset-8">Paxi neural core</span>.
          </p>
        </div>
        <button className="btn-zen btn-zen-primary h-14 px-10 shadow-2xl shadow-black/10">
          <Plus size={20} strokeWidth={3} />
          <span className="text-[13px] font-black uppercase tracking-widest">Integrate Module</span>
        </button>
      </div>

      {/* Integration Grid with Mineral Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {MOCK_INTEGRATIONS.map((tool) => (
          <div key={tool.id} className="zen-card p-10 flex flex-col justify-between h-[320px] group border-black/[0.015]">
            <div className="flex justify-between items-start">
              <div className={`w-16 h-16 rounded-[22px] bg-white border border-black/[0.03] flex items-center justify-center transition-all duration-700 ${tool.logoColor} shadow-sm group-hover:scale-95 group-hover:-rotate-3`}>
                {React.cloneElement(tool.icon as React.ReactElement<any>, { size: 32, strokeWidth: 1.5 })}
              </div>
              <div className={`status-pill ${tool.status === 'CONNECTED' ? 'success' : 'info'} text-[9px] font-black`}>
                <div className={`w-1.5 h-1.5 rounded-full mr-2 ${tool.status === 'CONNECTED' ? 'bg-[#A3B18A] animate-pulse' : 'bg-[#8C9AB8]'}`}></div>
                {tool.status}
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-2xl font-black text-[#1F2124] tracking-tighter group-hover:text-[#8C9AB8] transition-colors">{tool.name}</h3>
              <p className="label-zen text-[#8A8D91] mt-3 opacity-60 text-[9px] tracking-[0.2em] font-black">
                Registry Pulse: {tool.lastUpdated}
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-black/[0.03] flex items-center justify-between">
              <button className="text-[11px] font-black text-[#8C9AB8] uppercase tracking-widest hover:text-[#1F2124] flex items-center transition-all">
                <span>Configure Node</span>
                <ChevronRight size={14} className="ml-2 opacity-40" />
              </button>
              <div className="w-2 h-2 rounded-full bg-[#A3B18A]/30"></div>
            </div>
          </div>
        ))}

        {/* Add New Source Botanical Card */}
        <button className="zen-card p-10 flex flex-col items-center justify-center space-y-6 bg-[#F9F7F4]/30 border-2 border-dashed border-black/[0.05] hover:bg-white hover:border-[#8C9AB8]/40 transition-all group h-[320px]">
           <div className="w-16 h-16 rounded-[24px] bg-white flex items-center justify-center text-[#D1D1D1] group-hover:text-[#8C9AB8] transition-all shadow-sm border border-black/[0.02] group-hover:rotate-12">
              <Plus size={32} strokeWidth={2.5} />
           </div>
           <div className="text-center">
              <span className="text-sm font-black text-[#8A8D91] group-hover:text-[#1F2124] uppercase tracking-[0.3em] block mb-2">Expansion</span>
              <span className="text-[11px] font-bold text-[#D1D1D1] block italic">Provision New Telemetry Node</span>
           </div>
        </button>
      </div>

      {/* Sync Status Monolith */}
      <div className="zen-card p-12 bg-[#1F2124] text-white border-none overflow-hidden group shadow-2xl shadow-black/20">
         <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#8C9AB8]/10 to-transparent pointer-events-none"></div>
         <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
            <div className="flex items-center space-x-10">
               <div className="w-20 h-20 rounded-[28px] bg-white/5 backdrop-blur-xl flex items-center justify-center text-[#8C9AB8] border border-white/10 group-hover:scale-110 transition-transform duration-700">
                  <Globe size={40} strokeWidth={1} />
               </div>
               <div>
                  <h4 className="text-3xl font-black tracking-tighter">Ecosystem Sync Threshold</h4>
                  <p className="text-[#8A8D91] text-[14px] font-bold mt-2 uppercase tracking-[0.2em] opacity-80">99.8% Connectivity across all active cloud nodes</p>
               </div>
            </div>
            <button className="h-14 px-10 bg-white text-[#1F2124] rounded-[20px] text-[13px] font-black uppercase tracking-widest hover:bg-[#F9F7F4] transition-all shadow-2xl shadow-black/40">
               Audit Cluster Status
            </button>
         </div>
      </div>
    </div>
  );
};

export default IntegrationsView;