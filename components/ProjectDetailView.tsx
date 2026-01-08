import React, { useState } from 'react';
import { 
  ChevronRight, Sparkles, Box, Info, Github as GithubIcon, 
  Slack as SlackIcon, Zap, ShieldCheck, Activity, Users, 
  ArrowLeft, MessageSquare, Send, Clock, Calendar, TrendingUp,
  Layout
} from 'lucide-react';
import { 
  ResponsiveContainer, AreaChart, Area
} from 'recharts';
import { Project } from '../types';

// Mock data for the charts to match the wavy look in the screenshot
const WAVE_DATA_1 = [
  { val: 40 }, { val: 60 }, { val: 45 }, { val: 70 }, { val: 85 }, { val: 65 }, { val: 90 }, { val: 80 }
];
const WAVE_DATA_2 = [
  { val: 60 }, { val: 50 }, { val: 70 }, { val: 55 }, { val: 45 }, { val: 65 }, { val: 50 }, { val: 60 }
];
const WAVE_DATA_3 = [
  { val: 30 }, { val: 45 }, { val: 40 }, { val: 60 }, { val: 75 }, { val: 85 }, { val: 95 }, { val: 90 }
];
const WAVE_DATA_4 = [
  { val: 50 }, { val: 55 }, { val: 52 }, { val: 58 }, { val: 60 }, { val: 85 }, { val: 75 }, { val: 80 }
];

interface ProjectDetailViewProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({ project, onBack }) => {
  const [activeTab, setActiveTab] = useState('Overview');
  const tabs = ['Overview', 'Key Moments', 'Alerts', 'Reports', 'Teams', 'Sprints', 'Settings'];

  return (
    <div className="flex h-full bg-[#FCFAF7] animate-zen overflow-hidden">
      {/* Main Scrollable Area */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 lg:p-8 space-y-8">
        
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-3 text-[12px] font-medium text-[#8A8D91]">
          <div className="w-6 h-6 rounded-full border border-black/[0.05] flex items-center justify-center cursor-pointer hover:bg-white transition-all" onClick={onBack}>
             <ArrowLeft size={12} />
          </div>
          <span className="cursor-pointer hover:text-[#1F2124]" onClick={onBack}>Projects</span>
          <ChevronRight size={14} className="opacity-30" />
          <span className="text-[#1F2124]">{project.name}</span>
        </div>

        {/* Project Title Header */}
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-[#EEF1F6] rounded-lg flex items-center justify-center text-[#526384]">
            <Box size={20} strokeWidth={2.5} />
          </div>
          <h1 className="text-3xl font-bold text-[#1F2124] tracking-tight">{project.name}</h1>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center space-x-8 border-b border-black/[0.05] relative">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-[13px] font-bold transition-all relative ${
                activeTab === tab ? 'text-[#526384]' : 'text-[#8A8D91] hover:text-[#4D4F53]'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-[#526384]" />
              )}
            </button>
          ))}
        </div>

        {/* 2x2 Metric Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          
          {/* Card 1: Execution Velocity */}
          <div className="zen-card p-8 flex flex-col border border-black/[0.05]">
            <div className="flex items-start space-x-4 mb-4">
              <div className="mt-1 text-[#8A8D91]"><Zap size={20} /></div>
              <div>
                <h3 className="text-[15px] font-bold text-[#4D4F53]">Execution Velocity</h3>
                <p className="text-[12px] text-[#8A8D91] italic">The project is progressing at a good pace!</p>
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-7xl font-light text-[#526384]">93</span>
              <div className="h-20 w-1/2">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={WAVE_DATA_1}>
                    <defs>
                      <linearGradient id="velocityGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8C9AB8" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#8C9AB8" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="val" stroke="#8C9AB8" strokeWidth={2} fill="url(#velocityGrad)" dot={false} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[ {l: 'Cycle Time', v: '88'}, {l: 'PR Turnaround', v: '99'}, {l: 'Timeliness', v: '86'} ].map(item => (
                <div key={item.l} className="bg-[#F9F7F4] p-4 rounded-xl text-center border border-black/[0.02]">
                  <p className="text-2xl font-bold text-[#526384] mb-1">{item.v}</p>
                  <p className="text-[11px] font-bold text-[#8A8D91]">{item.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Resource Utilization */}
          <div className="zen-card p-8 flex flex-col border border-black/[0.05]">
            <div className="flex items-start space-x-4 mb-4">
              <div className="mt-1 text-[#8A8D91]"><Activity size={20} /></div>
              <div>
                <h3 className="text-[15px] font-bold text-[#4D4F53]">Resource Utilization</h3>
                <p className="text-[12px] text-[#8A8D91] italic">There are many over and underutilized persons in the project.</p>
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-7xl font-light text-[#526384]">64</span>
              <div className="h-20 w-1/2">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={WAVE_DATA_2}>
                    <defs>
                      <linearGradient id="resourceGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#A3B18A" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#A3B18A" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="val" stroke="#A3B18A" strokeWidth={2} fill="url(#resourceGrad)" dot={false} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="mt-4 border border-black/[0.05] rounded-lg overflow-hidden grid grid-cols-3 text-center">
               <div className="bg-[#FBF4E9]/30 py-2 border-r border-black/[0.05]">
                 <span className="text-[10px] font-black text-[#D4A373] uppercase tracking-widest">Low</span>
               </div>
               <div className="bg-[#F0F4E8]/30 py-2 border-r border-black/[0.05]">
                 <span className="text-[10px] font-black text-[#A3B18A] uppercase tracking-widest">Normal</span>
               </div>
               <div className="bg-[#FDF2F2]/30 py-2">
                 <span className="text-[10px] font-black text-rose-500 uppercase tracking-widest">High</span>
               </div>
               
               <div className="py-4 border-r border-black/[0.05] flex justify-center">
                  <div className="flex -space-x-1">
                    {project.members.slice(0, 4).map((m, i) => (
                      <div key={i} className={`w-6 h-6 rounded-full border border-white ${m.color} flex items-center justify-center text-[7px] text-white font-bold`}>{m.initials}</div>
                    ))}
                  </div>
               </div>
               <div className="py-4 border-r border-black/[0.05] flex justify-center">
                  <div className="flex -space-x-1">
                    {project.members.slice(2, 6).map((m, i) => (
                      <div key={i} className={`w-6 h-6 rounded-full border border-white ${m.color} flex items-center justify-center text-[7px] text-white font-bold`}>{m.initials}</div>
                    ))}
                    <div className="w-6 h-6 rounded-full border border-white bg-slate-200 flex items-center justify-center text-[7px] text-slate-500 font-bold">+2</div>
                  </div>
               </div>
               <div className="py-4 flex justify-center">
                  <div className="flex -space-x-1">
                    {project.members.slice(0, 3).map((m, i) => (
                      <div key={i} className={`w-6 h-6 rounded-full border border-white ${m.color} flex items-center justify-center text-[7px] text-white font-bold`}>{m.initials}</div>
                    ))}
                  </div>
               </div>
            </div>
          </div>

          {/* Card 3: Team Engagement */}
          <div className="zen-card p-8 flex flex-col border border-black/[0.05]">
            <div className="flex items-start space-x-4 mb-4">
              <div className="mt-1 text-[#8A8D91]"><Users size={20} /></div>
              <div>
                <h3 className="text-[15px] font-bold text-[#4D4F53]">Team Engagement</h3>
                <p className="text-[12px] text-[#8A8D91] italic">Engagement is at a good level with timely responses!</p>
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-7xl font-light text-[#526384]">71</span>
              <div className="h-20 w-1/2">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={WAVE_DATA_3}>
                    <defs>
                      <linearGradient id="engagementGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#B5A1B7" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#B5A1B7" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="val" stroke="#B5A1B7" strokeWidth={2} fill="url(#engagementGrad)" dot={false} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
               <div className="bg-[#F9F7F4] p-5 rounded-xl border border-black/[0.02]">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 border border-[#8C9AB8] flex items-center justify-center text-[7px] text-[#8C9AB8]">J</div>
                    <span className="text-[11px] font-black text-[#4D4F53] uppercase tracking-widest">Jira</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[11px] font-medium text-[#8A8D91]">
                      <span>Avg Response Time</span>
                      <span className="text-[#1F2124] font-bold">10 hrs</span>
                    </div>
                    <div className="flex justify-between text-[11px] font-medium text-[#8A8D91]">
                      <span>Avg Closing Time</span>
                      <span className="text-[#1F2124] font-bold">4.5 days</span>
                    </div>
                  </div>
               </div>
               <div className="bg-[#F9F7F4] p-5 rounded-xl border border-black/[0.02]">
                  <div className="flex items-center space-x-2 mb-4">
                    <SlackIcon size={14} className="text-[#8C9AB8]" />
                    <span className="text-[11px] font-black text-[#4D4F53] uppercase tracking-widest">Slack</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[11px] font-medium text-[#8A8D91]">
                      <span>Avg Daily Messages</span>
                      <span className="text-[#1F2124] font-bold">118</span>
                    </div>
                    <div className="flex justify-between text-[11px] font-medium text-[#8A8D91]">
                      <span>Avg Response Time</span>
                      <span className="text-[#1F2124] font-bold">3 mins</span>
                    </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Card 4: Quality & Stability */}
          <div className="zen-card p-8 flex flex-col border border-black/[0.05]">
            <div className="flex items-start space-x-4 mb-4">
              <div className="mt-1 text-[#8A8D91]"><ShieldCheck size={20} /></div>
              <div>
                <h3 className="text-[15px] font-bold text-[#4D4F53]">Quality & Stability</h3>
                <p className="text-[12px] text-[#8A8D91] italic">The project is stable and has a good quality.</p>
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-7xl font-light text-[#526384]">83</span>
              <div className="h-20 w-1/2">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={WAVE_DATA_4}>
                    <defs>
                      <linearGradient id="qualityGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#D4A373" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#D4A373" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="val" stroke="#D4A373" strokeWidth={2} fill="url(#qualityGrad)" dot={false} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[ {l: 'Stability', v: '85'}, {l: 'Quality', v: '91'}, {l: 'Alignment', v: '77'} ].map(item => (
                <div key={item.l} className="bg-[#F9F7F4] p-4 rounded-xl text-center border border-black/[0.02]">
                  <p className="text-2xl font-bold text-[#526384] mb-1">{item.v}</p>
                  <p className="text-[11px] font-bold text-[#8A8D91]">{item.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Score and Top Contributors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="zen-card p-8 border border-black/[0.05]">
              <div className="flex items-center space-x-2 mb-8">
                 <span className="text-[13px] font-black text-[#1F2124] uppercase tracking-widest">AI Score</span>
                 <Info size={14} className="text-[#8A8D91]" />
              </div>
              <div className="space-y-8">
                 <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-[11px] font-bold text-[#8A8D91]">Timeliness</span>
                      <Info size={12} className="text-[#D1D1D1]" />
                    </div>
                    <div className="w-full h-1.5 bg-black/[0.03] rounded-full">
                       <div className="h-full bg-[#1F2124] rounded-full" style={{ width: '85%' }}></div>
                    </div>
                 </div>
              </div>
           </div>

           <div className="zen-card p-8 border border-black/[0.05]">
              <div className="flex items-center justify-between mb-8">
                 <span className="text-[13px] font-black text-[#1F2124] uppercase tracking-widest">Top Contributors</span>
              </div>
              <div className="space-y-6">
                 <div className="grid grid-cols-2 text-[10px] font-bold text-[#8A8D91] uppercase tracking-widest border-b border-black/[0.03] pb-2">
                    <span>Name</span>
                    <div className="flex justify-end space-x-6">
                       <GithubIcon size={12} />
                       <SlackIcon size={12} />
                       <Layout size={12} />
                    </div>
                 </div>
                 {/* List top contributors */}
                 <div className="space-y-4">
                    <p className="text-[11px] text-[#8A8D91] italic">Contributor list sync in progress...</p>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* Right Sidebar: AI Summary */}
      <div className="w-full lg:w-[420px] bg-white border-l border-black/[0.05] flex flex-col shadow-xl">
        <div className="p-6 border-b border-black/[0.05] flex items-center space-x-3">
           <Sparkles size={18} className="text-rose-500" />
           <span className="text-[13px] font-black text-rose-500 uppercase tracking-widest">AI Summary</span>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-10">
           {/* Summary Placeholder */}
           <div className="py-4">
              <p className="text-[13px] font-medium text-[#8A8D91]">Project summary not found</p>
           </div>

           {/* Chat Input */}
           <div className="flex items-center space-x-2">
              <div className="flex-1 relative">
                <input 
                  type="text" 
                  placeholder="Ask your questions here" 
                  className="w-full h-11 bg-white border border-black/[0.1] rounded-lg px-4 text-[12px] font-medium text-[#1F2124] placeholder:text-[#8A8D91] focus:outline-none focus:border-[#526384] transition-all"
                />
              </div>
              <button className="px-4 h-11 bg-[#8C9AB8] text-white text-[11px] font-black uppercase tracking-widest rounded-lg hover:bg-[#526384] transition-all">
                Chat
              </button>
           </div>

           {/* Progress Section */}
           <div className="space-y-6">
              <h3 className="text-[13px] font-black text-[#1F2124] uppercase tracking-widest">Progress</h3>
              <div className="space-y-10 pt-2">
                 <div className="relative">
                    <div className="flex justify-between text-[11px] font-bold text-[#4D4F53] mb-2">
                       <span>Tickets</span>
                       <span>44</span>
                    </div>
                    <div className="w-full h-1.5 bg-black/[0.03] rounded-full">
                       <div className="h-full bg-[#8C9AB8] rounded-full" style={{ width: '100%' }}></div>
                    </div>
                    <div className="absolute left-0 -bottom-5 flex flex-col items-center">
                       <span className="text-[9px] font-black text-[#8A8D91]">▲ 0</span>
                    </div>
                 </div>

                 <div className="relative pt-4">
                    <div className="flex justify-between text-[11px] font-bold text-[#4D4F53] mb-2">
                       <span>Time</span>
                       <span>394</span>
                    </div>
                    <div className="w-full h-1.5 bg-black/[0.03] rounded-full">
                       <div className="h-full bg-[#A3B18A] rounded-full" style={{ width: '70%' }}></div>
                    </div>
                    <div className="absolute left-[70%] -bottom-5 flex flex-col items-center">
                       <div className="w-[1px] h-2 bg-black/[0.2]"></div>
                       <span className="text-[9px] font-black text-[#8A8D91]">▲ 281</span>
                    </div>
                 </div>
              </div>
           </div>

           {/* Recent Activity */}
           <div className="space-y-6 pt-8">
              <h3 className="text-[13px] font-black text-[#1F2124] uppercase tracking-widest">Recent Activity</h3>
              <div className="space-y-8">
                 <div className="space-y-4">
                    <p className="text-[11px] font-black text-[#8A8D91] uppercase tracking-[0.2em]">Monday, Jan 5</p>
                    <div className="space-y-6">
                       <div className="flex items-center space-x-4">
                          <span className="text-[10px] font-medium text-[#8A8D91] w-16">04:38 PM</span>
                          <SlackIcon size={14} className="text-[#526384]" />
                          <p className="text-[12px] font-medium text-[#4D4F53] truncate flex-1">
                             <span className="font-bold text-[#1F2124]">Deeksha T</span> - test...
                          </p>
                       </div>
                       <div className="flex items-center space-x-4">
                          <span className="text-[10px] font-medium text-[#8A8D91] w-16">04:29 PM</span>
                          <SlackIcon size={14} className="text-[#526384]" />
                          <p className="text-[12px] font-medium text-[#4D4F53] truncate flex-1">
                             <span className="font-bold text-[#1F2124]">Deeksha T</span> - webhook testinggg...
                          </p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailView;