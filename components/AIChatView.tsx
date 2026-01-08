import React, { useState } from 'react';
import { CHAT_TOPICS } from '../constants';
import { Plus, Send, Sparkles, User, Hash, Info, ChevronRight, MessageCircle, Activity } from 'lucide-react';

const AIChatView: React.FC = () => {
  const [activeTopic, setActiveTopic] = useState(CHAT_TOPICS[0]);

  return (
    <div className="flex h-full bg-[#FCFAF7] animate-zen">
      {/* Topics Sidebar - Refined Zen Style */}
      <div className="w-[320px] border-r border-black/[0.03] flex flex-col bg-[#F9F7F4]/50 backdrop-blur-md">
        <div className="p-10 pb-6">
          <div className="flex items-center space-x-3 text-[10px] font-black text-[#8A8D91] uppercase tracking-[0.3em] mb-10">
            <Activity size={16} className="text-[#B5A1B7]" />
            <span>Neural Control</span>
          </div>
          <button className="w-full bg-[#1F2124] text-white rounded-[20px] flex items-center justify-center space-x-4 py-4.5 font-black text-[12px] uppercase tracking-widest shadow-2xl shadow-black/10 hover:bg-[#B5A1B7] transition-all transform active:scale-95 mb-12">
            <Plus size={18} strokeWidth={3} />
            <span>New Inquiry</span>
          </button>
          <div className="label-zen text-[#8A8D91] ml-2 mb-6 opacity-40 text-[9px] tracking-[0.4em]">NEURAL THREADS</div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 space-y-1 custom-scrollbar pb-10">
          {CHAT_TOPICS.map((topic) => (
            <button
              key={topic}
              onClick={() => setActiveTopic(topic)}
              className={`w-full text-left px-5 py-4 rounded-xl text-[14px] font-bold transition-all duration-300 flex items-center space-x-4 mb-1 group ${
                activeTopic === topic 
                ? 'bg-white text-[#1F2124] shadow-[0_8px_20px_-8px_rgba(0,0,0,0.05)] border border-black/[0.01]' 
                : 'text-[#8A8D91] hover:text-[#1F2124] hover:bg-black/[0.01]'
              }`}
            >
              <Hash size={15} className={activeTopic === topic ? 'text-[#B5A1B7]' : 'text-[#D1D1D1] group-hover:text-[#B5A1B7]'} strokeWidth={3} />
              <span className="truncate tracking-tight">{topic}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-white relative overflow-hidden">
        {/* Subtle Violet Backdrop Glow */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#B5A1B7]/5 to-transparent pointer-events-none"></div>

        <div className="px-14 py-10 border-b border-black/[0.02] flex items-center justify-between bg-white/70 backdrop-blur-2xl sticky top-0 z-20">
          <div className="flex items-center space-x-8">
             <div className="w-14 h-14 rounded-[22px] bg-[#B5A1B7] text-white flex items-center justify-center shadow-2xl shadow-[#B5A1B7]/20 transform hover:-rotate-6 transition-transform duration-700">
                <Sparkles size={24} strokeWidth={2} />
             </div>
             <div>
                <h4 className="text-2xl font-black text-[#1F2124] tracking-tighter flex items-center">
                  Paxi Copilot 
                  <span className="ml-4 px-3 py-1 bg-[#F4EFF6] text-[#B5A1B7] text-[10px] font-black uppercase tracking-widest rounded-lg border border-[#B5A1B7]/10">Stable v4.2</span>
                </h4>
                <div className="flex items-center text-[11px] text-[#8A8D91] font-bold uppercase tracking-widest mt-2">
                  <div className="w-2 h-2 rounded-full bg-[#A3B18A] mr-3 pulse-soft"></div>
                  Neural Sync: Optimal (88ms)
                </div>
             </div>
          </div>
          <button className="w-12 h-12 rounded-[18px] border border-black/[0.04] flex items-center justify-center text-[#D1D1D1] hover:text-[#1F2124] transition-all hover:bg-[#F9F7F4]">
            <Info size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-14 py-14 space-y-16 custom-scrollbar relative z-10">
           <div className="flex justify-end items-start space-x-8">
              <div className="bg-[#1F2124] text-white px-10 py-6 rounded-[32px] rounded-tr-none text-[16px] font-bold max-w-[65%] shadow-2xl shadow-black/5 leading-relaxed tracking-tight">
                 Provide a summarized report on <span className="text-[#B5A1B7]">Pax-i Infrastructure</span> sync integrity and highlight any deviations detected in Node Alpha cluster.
              </div>
              <div className="w-12 h-12 rounded-[18px] bg-[#F9F7F4] border border-black/[0.02] flex items-center justify-center flex-shrink-0 text-[#8A8D91] shadow-sm font-black text-[11px]">
                AS
              </div>
           </div>

           <div className="flex items-start space-x-8">
              <div className="w-12 h-12 rounded-[18px] bg-[#B5A1B7] text-white flex items-center justify-center flex-shrink-0 shadow-2xl shadow-[#B5A1B7]/20">
                 <Sparkles size={22} strokeWidth={2} />
              </div>
              <div className="space-y-12 max-w-[85%]">
                 <p className="text-[18px] leading-relaxed text-[#1F2124] font-bold tracking-tight opacity-90">
                    Initializing telemetry scan... Pulse validation for <span className="text-[#B5A1B7] underline decoration-2 underline-offset-8">Pax-i Core</span> is reporting an operational health of <span className="text-[#A3B18A] font-black">98.4%</span>.
                 </p>
                 <div className="zen-card p-12 space-y-10 bg-[#FCFAF7] border-none shadow-2xl shadow-black/[0.015]">
                    <p className="label-zen text-[#B5A1B7] font-black tracking-[0.3em]">NEURAL INSIGHTS</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="space-y-3">
                        <p className="label-zen text-[#8A8D91] opacity-50 text-[9px] tracking-[0.2em] font-black">Latency Response</p>
                        <p className="text-3xl font-black text-[#1F2124] tracking-tighter">88ms <span className="text-sm font-bold text-[#8A8D91]">Avg</span></p>
                      </div>
                      <div className="space-y-3">
                        <p className="label-zen text-[#8A8D91] opacity-50 text-[9px] tracking-[0.2em] font-black">Integrity Level</p>
                        <p className="text-3xl font-black text-[#A3B18A] tracking-tighter">Peak Stable</p>
                      </div>
                      <div className="col-span-full border-t border-black/[0.03] pt-10">
                        <div className="flex justify-between items-center mb-6">
                           <p className="label-zen text-[#8A8D91] opacity-50 font-black">Resource Saturation</p>
                           <p className="text-[14px] font-black text-[#1F2124]">42% Cluster Load</p>
                        </div>
                        <div className="w-full h-2.5 bg-black/[0.04] rounded-full overflow-hidden shadow-inner">
                           <div className="h-full bg-[#B5A1B7] rounded-full transition-all duration-1000" style={{ width: '42%' }} />
                        </div>
                      </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Neural Input Sanctuary */}
        <div className="p-14 bg-white border-t border-black/[0.02]">
           <div className="relative max-w-6xl mx-auto flex items-center space-x-8">
              <div className="relative flex-1 group">
                 <div className="absolute left-8 top-1/2 -translate-y-1/2 text-[#D1D1D1] group-focus-within:text-[#B5A1B7] transition-all duration-500">
                    <Hash size={20} strokeWidth={3} />
                 </div>
                 <input 
                  type="text" 
                  placeholder="Inquire with Copilot regarding organizational telemetry..." 
                  className="w-full pl-20 pr-32 py-6 bg-[#F9F7F4]/40 border border-black/[0.03] rounded-[32px] text-[16px] font-bold text-[#1F2124] placeholder:text-[#8A8D91] focus:outline-none focus:bg-white focus:border-[#B5A1B7] focus:ring-[12px] focus:ring-[#B5A1B7]/5 transition-all shadow-sm"
                />
                <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex items-center space-x-3 bg-white px-4 py-2 rounded-xl border border-black/[0.02] shadow-sm">
                   <div className="w-2 h-2 rounded-full bg-[#A3B18A]"></div>
                   <span className="text-[10px] font-black text-[#8A8D91] uppercase tracking-widest">Neural Active</span>
                </div>
              </div>
              <button className="w-20 h-20 bg-[#1F2124] text-white rounded-[28px] flex items-center justify-center hover:bg-[#B5A1B7] transition-all shadow-2xl shadow-black/10 transform hover:scale-105 active:scale-95">
                <Send size={28} strokeWidth={2.5} />
              </button>
           </div>
           <p className="text-center text-[10px] text-[#8A8D91] mt-10 font-black uppercase tracking-[0.4em] opacity-40">
             Copilot v4.2 processing real-time distributed telemetry streams
           </p>
        </div>
      </div>
    </div>
  );
};

export default AIChatView;