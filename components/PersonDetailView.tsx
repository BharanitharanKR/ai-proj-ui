import React, { useState } from 'react';
import { 
  ChevronRight, Sparkles, Send, ArrowLeft, 
  Github, Slack, CheckCircle2, MessageSquare, 
  Calendar, Clock, Filter, MoreHorizontal
} from 'lucide-react';
import { Ripple } from 'primereact/ripple';
import { TeamMember } from '../types';

interface PersonDetailViewProps {
  person: TeamMember;
  onBack: () => void;
}

const PersonDetailView: React.FC<PersonDetailViewProps> = ({ person, onBack }) => {
  const [activeTab, setActiveTab] = useState('Activity');
  const tabs = ['Activity', 'Key Moments', 'Goals'];

  // Mock heatmap data generation
  const generateHeatmap = (count: number, colorBase: string) => {
    return Array.from({ length: count }, (_, i) => {
      const intensity = Math.random();
      let opacity = 'opacity-10';
      if (intensity > 0.8) opacity = 'opacity-100';
      else if (intensity > 0.6) opacity = 'opacity-60';
      else if (intensity > 0.4) opacity = 'opacity-30';
      
      return <div key={i} className={`w-3.5 h-3.5 rounded-[3px] ${colorBase} ${opacity} transition-all hover:scale-125 cursor-help`} />;
    });
  };

  return (
    <div className="flex flex-col h-full bg-[#FCFAF7] animate-zen">
      {/* Zen Breadcrumbs */}
      <div className="px-12 py-8 flex items-center space-x-4 bg-white/30 backdrop-blur-md sticky top-0 z-30">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-white rounded-xl text-[#8A8D91] hover:text-[#1F2124] transition-all"
        >
          <ArrowLeft size={18} />
        </button>
        <div className="flex items-center space-x-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#8A8D91]">
           <span className="hover:text-[#8C9AB8] cursor-pointer">People</span>
           <ChevronRight size={12} className="opacity-40" />
           <span className="text-[#1F2124]">{person.name}</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row p-12 lg:px-20 lg:pb-20 gap-10 overflow-y-auto custom-scrollbar">
        {/* Main Profile & Activity Monolith */}
        <div className="flex-1 space-y-10">
           <div className="zen-card p-12">
              <div className="flex items-center justify-between mb-12">
                 <div className="flex items-center space-x-8">
                    <div className={`w-24 h-24 rounded-[32px] ${person.color} flex items-center justify-center text-white text-3xl font-black shadow-2xl shadow-black/10 transition-transform hover:rotate-3`}>
                       {person.initials}
                    </div>
                    <div>
                       <h1 className="text-4xl font-black text-[#1F2124] tracking-tighter mb-3">{person.name}</h1>
                       <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-2 px-4 py-1.5 bg-[#F9F7F4] rounded-full border border-black/[0.02]">
                             <div className="w-4 h-4 rounded-md bg-[#1F2124] flex items-center justify-center">
                                <span className="text-[8px] text-white font-bold">P</span>
                             </div>
                             <span className="text-[10px] font-black text-[#4D4F53] uppercase tracking-widest">{person.projects?.[0] || 'Pax-i'}</span>
                          </div>
                          <span className="text-[10px] font-extrabold text-[#8A8D91] uppercase tracking-widest ml-2">Registry ID: {person.id}00-A</span>
                       </div>
                    </div>
                 </div>
                 <button className="p-3 bg-[#F9F7F4] text-[#D1D1D1] hover:text-[#1F2124] rounded-2xl transition-all">
                    <MoreHorizontal size={20} />
                 </button>
              </div>

              {/* Navigation Tabs */}
              <div className="flex items-center space-x-12 border-b border-black/[0.03]">
                 {tabs.map(tab => (
                    <button
                       key={tab}
                       onClick={() => setActiveTab(tab)}
                       className={`pb-6 text-[13px] font-extrabold uppercase tracking-widest transition-all relative ${
                          activeTab === tab ? 'text-[#1F2124]' : 'text-[#8A8D91] hover:text-[#4D4F53]'
                       }`}
                    >
                       {tab}
                       {activeTab === tab && (
                          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#1F2124] rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.2)]" />
                       )}
                    </button>
                 ))}
              </div>

              {/* Activity Streams */}
              <div className="mt-14 space-y-16">
                 {/* Github Stream */}
                 <div className="space-y-6">
                    <div className="flex items-center justify-between">
                       <div className="flex items-center space-x-3">
                          <Github size={18} className="text-[#D4A373]" />
                          <p className="label-zen text-[#D4A373]">Github Activity Stream</p>
                       </div>
                       <Filter size={14} className="text-[#8A8D91] cursor-pointer hover:text-[#1F2124]" />
                    </div>
                    <div className="flex flex-wrap gap-1.5 p-8 bg-[#F9F7F4]/30 rounded-[28px] border border-black/[0.01]">
                       {generateHeatmap(280, 'bg-[#D4A373]')}
                    </div>
                 </div>

                 {/* Slack Stream */}
                 <div className="space-y-6">
                    <div className="flex items-center justify-between">
                       <div className="flex items-center space-x-3">
                          <Slack size={18} className="text-[#8C9AB8]" />
                          <p className="label-zen text-[#8C9AB8]">Slack Interaction Pulse</p>
                       </div>
                       <Filter size={14} className="text-[#8A8D91] cursor-pointer hover:text-[#1F2124]" />
                    </div>
                    <div className="flex flex-wrap gap-1.5 p-8 bg-[#F9F7F4]/30 rounded-[28px] border border-black/[0.01]">
                       {generateHeatmap(280, 'bg-[#8C9AB8]')}
                    </div>
                 </div>

                 {/* Jira Stream */}
                 <div className="space-y-6">
                    <div className="flex items-center justify-between">
                       <div className="flex items-center space-x-3">
                          <div className="w-4 h-4 bg-[#B5A1B7] rounded-[3px] flex items-center justify-center text-white text-[8px] font-black">J</div>
                          <p className="label-zen text-[#B5A1B7]">Jira Velocity Registry</p>
                       </div>
                       <Filter size={14} className="text-[#8A8D91] cursor-pointer hover:text-[#1F2124]" />
                    </div>
                    <div className="flex flex-wrap gap-1.5 p-8 bg-[#F9F7F4]/30 rounded-[28px] border border-black/[0.01]">
                       {generateHeatmap(280, 'bg-[#B5A1B7]')}
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* AI Insight Sidebar Monolith */}
        <div className="w-full lg:w-[420px] space-y-10">
           {/* Summary Section */}
           <div className="zen-card p-10 bg-[#FCFAF7] border-none shadow-2xl shadow-black/[0.03] flex flex-col h-full">
              <div className="flex items-center space-x-3 mb-10">
                 <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-[#B5A1B7] shadow-sm border border-[#B5A1B7]/10">
                    <Sparkles size={20} strokeWidth={2.5} />
                 </div>
                 <p className="label-zen text-[#B5A1B7]">AI Neural Summary</p>
              </div>

              <div className="p-8 bg-white rounded-[32px] shadow-sm border border-black/[0.015] mb-10">
                 <p className="text-[14px] leading-relaxed text-[#4D4F53] font-bold italic">
                   "{person.name}'s recent activity reflects a deep synchronization with system testing protocols. Core contributions are currently centered around webhook architecture and communication channel optimization."
                 </p>
                 <div className="mt-8 pt-6 border-t border-black/[0.03] flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                       <div className="w-2 h-2 rounded-full bg-[#A3B18A]"></div>
                       <span className="text-[9px] font-black text-[#A3B18A] uppercase tracking-widest">Optimized Output</span>
                    </div>
                    <span className="text-[9px] font-extrabold text-[#8A8D91]">Processed 4m ago</span>
                 </div>
              </div>

              {/* Chat Interaction */}
              <div className="space-y-6">
                 <div className="relative group">
                    <input 
                      type="text" 
                      placeholder="Inquire regarding performance..." 
                      className="w-full h-14 bg-white border border-black/[0.03] rounded-2xl px-6 pr-14 text-[13px] font-bold text-[#1F2124] placeholder:text-[#8A8D91] focus:outline-none focus:ring-8 focus:ring-[#B5A1B7]/5 transition-all shadow-sm"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-xl bg-[#1F2124] text-white flex items-center justify-center hover:bg-[#B5A1B7] transition-all">
                       <Send size={14} />
                    </button>
                 </div>
              </div>

              {/* Recent Registry Activity */}
              <div className="mt-14 space-y-8 flex-1">
                 <div className="flex items-center justify-between px-2">
                    <p className="label-zen text-[9px]">Recent Registry Logs</p>
                    <Calendar size={12} className="text-[#8A8D91]" />
                 </div>
                 
                 <div className="space-y-6">
                    <div className="flex items-start space-x-5 group cursor-pointer">
                       <div className="mt-1 w-2 h-2 rounded-full bg-[#A3B18A] shadow-[0_0_8px_#A3B18A] group-hover:scale-125 transition-transform"></div>
                       <div>
                          <p className="text-[13px] font-black text-[#1F2124] mb-1">Webhook Telemetry Verified</p>
                          <div className="flex items-center space-x-3 text-[#8A8D91]">
                             <Clock size={12} />
                             <span className="text-[10px] font-bold">14:38 PM</span>
                             <div className="w-1 h-1 rounded-full bg-black/[0.1]"></div>
                             <span className="text-[10px] font-bold">Registry-Alpha</span>
                          </div>
                       </div>
                    </div>

                    <div className="flex items-start space-x-5 group cursor-pointer">
                       <div className="mt-1 w-2 h-2 rounded-full bg-[#8C9AB8] shadow-[0_0_8px_#8C9AB8] group-hover:scale-125 transition-transform"></div>
                       <div>
                          <p className="text-[13px] font-black text-[#1F2124] mb-1">Slack Channel Sync Initiated</p>
                          <div className="flex items-center space-x-3 text-[#8A8D91]">
                             <Clock size={12} />
                             <span className="text-[10px] font-bold">12:22 PM</span>
                             <div className="w-1 h-1 rounded-full bg-black/[0.1]"></div>
                             <span className="text-[10px] font-bold">Ops-Core</span>
                          </div>
                       </div>
                    </div>

                    <div className="flex items-start space-x-5 group cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
                       <div className="mt-1 w-2 h-2 rounded-full bg-[#D4A373] shadow-[0_0_8px_#D4A373] group-hover:scale-125 transition-transform"></div>
                       <div>
                          <p className="text-[13px] font-black text-[#1F2124] mb-1">Legacy Commit Re-Index</p>
                          <div className="flex items-center space-x-3 text-[#8A8D91]">
                             <Clock size={12} />
                             <span className="text-[10px] font-bold">Yesterday</span>
                             <div className="w-1 h-1 rounded-full bg-black/[0.1]"></div>
                             <span className="text-[10px] font-bold">Github-API</span>
                          </div>
                       </div>
                    </div>
                 </div>

                 <button className="w-full py-4 rounded-2xl border border-dashed border-black/[0.05] text-[10px] font-black text-[#8A8D91] uppercase tracking-[0.2em] hover:bg-white hover:border-black/[0.1] transition-all mt-10">
                    Audit Full Lifecycle
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default PersonDetailView;