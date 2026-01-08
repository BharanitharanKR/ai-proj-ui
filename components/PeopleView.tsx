import React from 'react';
import { MOCK_PEOPLE } from '../constants';
import { Search, Filter, Download, Plus, RefreshCw, Trash2, Edit3, ChevronLeft, ChevronRight, Briefcase, Activity } from 'lucide-react';
import { TeamMember } from '../types';

interface PeopleViewProps {
  isAdmin?: boolean;
  onSelectPerson?: (person: TeamMember) => void;
}

const PeopleView: React.FC<PeopleViewProps> = ({ isAdmin, onSelectPerson }) => {
  return (
    <div className="p-12 lg:p-24 space-y-16 animate-zen max-w-[1600px] mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div className="max-w-xl">
          <div className="flex items-center space-x-4 text-[11px] font-black text-[#8C9AB8] uppercase tracking-[0.3em] mb-6">
             <div className="p-2 bg-[#EEF1F6] rounded-lg">
                <Activity size={16} />
             </div>
             <span>Registry Sync</span>
          </div>
          <h2 className="text-6xl font-black text-[#1F2124] tracking-tighter leading-none">
            {isAdmin ? 'Workforce Intelligence' : 'Team Ecosystem'}
          </h2>
          <p className="text-[#4D4F53] text-[18px] font-bold mt-8 leading-relaxed">
            Synthesizing real-time performance across <span className="text-[#1F2124] font-black underline decoration-[#A3B18A] decoration-2 underline-offset-8">distributed human nodes</span>.
          </p>
        </div>

        <div className="flex items-center space-x-4">
           <button className="btn-zen bg-white border border-black/[0.04] h-14 px-8 shadow-sm hover:bg-[#F9F7F4] transition-all">
              <Download size={18} />
              <span className="text-[12px] font-black uppercase tracking-widest">Registry Sync</span>
           </button>
           <button className="btn-zen btn-zen-primary h-14 px-10 shadow-2xl shadow-black/10">
              {isAdmin ? <RefreshCw size={20} /> : <Plus size={20} />}
              <span className="text-[13px] font-black uppercase tracking-widest">{isAdmin ? 'Re-Sync Cluster' : 'Provision User'}</span>
           </button>
        </div>
      </div>

      {/* Main Registry Table */}
      <div className="zen-card overflow-hidden shadow-2xl shadow-black/[0.01]">
        <div className="p-10 border-b border-black/[0.015] flex items-center justify-between bg-[#F9F7F4]/30 backdrop-blur-sm">
           <div className="relative w-full max-w-lg group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-[#D1D1D1] group-focus-within:text-[#1F2124] transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Search node identity..." 
                className="w-full pl-16 pr-6 h-14 bg-white border border-black/[0.03] rounded-2xl text-[14px] font-bold text-[#1F2124] focus:outline-none focus:ring-8 focus:ring-[#8C9AB8]/5 transition-all shadow-sm"
              />
           </div>
           <div className="flex items-center space-x-10">
              <button className="flex items-center space-x-3 text-[#8A8D91] hover:text-[#1F2124] font-black text-[11px] uppercase tracking-widest transition-colors">
                <Filter size={18} />
                <span>Filters</span>
              </button>
              <div className="h-10 w-[1px] bg-black/[0.05]" />
              <div className="text-[12px] font-black text-[#1F2124] uppercase tracking-[0.2em]">
                <span className="text-[#8A8D91] mr-3 opacity-50">Nodes:</span>{MOCK_PEOPLE.length}
              </div>
           </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#F9F7F4]/20">
                <th className="px-12 py-8 label-zen text-[#8A8D91] font-black tracking-[0.2em]">Identity</th>
                <th className="px-12 py-8 label-zen text-[#8A8D91] font-black tracking-[0.2em]">Heartbeat</th>
                <th className="px-12 py-8 label-zen text-[#8A8D91] font-black tracking-[0.2em]">Ecosystem</th>
                <th className="px-12 py-8 label-zen text-[#8A8D91] text-right font-black tracking-[0.2em]">Ops</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/[0.015]">
              {MOCK_PEOPLE.map((person, i) => {
                const statusStyles = [
                  { color: 'text-[#A3B18A]', bg: 'bg-[#F0F4E8]', border: 'border-[#A3B18A]/10', label: 'Synced' },
                  { color: 'text-[#D4A373]', bg: 'bg-[#FBF4E9]', border: 'border-[#D4A373]/10', label: 'Awaiting' },
                  { color: 'text-[#8C9AB8]', bg: 'bg-[#EEF1F6]', border: 'border-[#8C9AB8]/10', label: 'Active' }
                ];
                const state = statusStyles[i % 3];
                
                return (
                  <tr 
                    key={person.id} 
                    className="hover:bg-[#F9F7F4]/50 transition-all group cursor-pointer"
                    onClick={() => onSelectPerson?.(person)}
                  >
                    <td className="px-12 py-9">
                      <div className="flex items-center space-x-6">
                        <div className={`w-14 h-14 rounded-[20px] ${person.color} flex items-center justify-center text-white font-black text-[14px] shadow-lg group-hover:scale-105 transition-transform duration-500`}>
                          {person.initials}
                        </div>
                        <div>
                          <p className="text-[18px] font-black text-[#1F2124] tracking-tighter leading-none group-hover:text-[#8C9AB8] transition-colors">{person.name}</p>
                          <p className="text-[12px] text-[#8A8D91] font-bold mt-2 opacity-60 truncate max-w-[200px]">{person.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-12 py-9">
                      <div className={`inline-flex items-center px-4 py-1.5 rounded-xl ${state.bg} ${state.border} border text-[10px] font-black uppercase tracking-widest ${state.color}`}>
                        <div className={`w-2 h-2 rounded-full mr-2 pulse-soft ${state.color === 'text-[#A3B18A]' ? 'bg-[#A3B18A]' : 'bg-current'}`}></div>
                        {state.label}
                      </div>
                    </td>
                    <td className="px-12 py-9">
                       <div className="flex -space-x-3">
                          {person.projects?.map((p, pi) => (
                            <div key={pi} className="w-11 h-11 rounded-xl bg-white border border-black/[0.04] flex items-center justify-center text-[#8C9AB8] shadow-sm transition-all hover:-translate-y-1 hover:z-20 group-hover:bg-[#F9F7F4]">
                               <Briefcase size={18} strokeWidth={2} />
                            </div>
                          ))}
                       </div>
                    </td>
                    <td className="px-12 py-9 text-right">
                       <div className="flex items-center justify-end space-x-4">
                          <button className="w-11 h-11 flex items-center justify-center text-[#D1D1D1] hover:text-[#1F2124] hover:bg-white rounded-xl shadow-sm border border-transparent hover:border-black/[0.04] transition-all transform hover:scale-105"><Edit3 size={18} /></button>
                          <button className="w-11 h-11 flex items-center justify-center text-[#D1D1D1] hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all transform hover:scale-105"><Trash2 size={18} /></button>
                       </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="px-12 py-8 bg-[#F9F7F4]/20 flex items-center justify-between border-t border-black/[0.015]">
           <p className="text-[11px] font-black text-[#8A8D91] uppercase tracking-[0.4em]">
             Registry integrity: <span className="text-[#A3B18A]">99.2% Sync Pulse</span>
           </p>
           <div className="flex items-center space-x-6">
              <button className="p-3 text-[#D1D1D1] hover:text-[#1F2124] transition-colors"><ChevronLeft size={24} /></button>
              <div className="flex items-center space-x-4">
                 <button className="w-11 h-11 rounded-xl bg-[#1F2124] text-white font-black text-[13px] shadow-2xl shadow-black/20">1</button>
                 <button className="w-11 h-11 rounded-xl hover:bg-white text-[#8A8D91] font-black text-[13px] border border-transparent hover:border-black/[0.04]">2</button>
              </div>
              <button className="p-3 text-[#D1D1D1] hover:text-[#1F2124] transition-colors"><ChevronRight size={24} /></button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleView;