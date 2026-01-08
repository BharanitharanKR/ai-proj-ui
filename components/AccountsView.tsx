import React from 'react';
import { MOCK_PEOPLE } from '../constants';
import { CreditCard, DollarSign, ArrowUpRight, ArrowDownRight, MoreVertical, Plus, Filter, Search, ShieldCheck, ChevronRight } from 'lucide-react';

const AccountsView: React.FC = () => {
  const accounts = Array.from(new Set(MOCK_PEOPLE.map(p => p.accountName))).filter(Boolean);

  return (
    <div className="p-12 lg:p-24 space-y-20 animate-zen max-w-[1600px] mx-auto">
      {/* Zen Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div className="max-w-xl">
          <div className="flex items-center space-x-4 text-[11px] font-black text-[#8A8D91] uppercase tracking-[0.3em] mb-6">
             <div className="w-3 h-3 rounded-full bg-[#E3D5CA]/30 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#E3D5CA]"></div>
             </div>
             <span>Fiscal Intelligence</span>
          </div>
          <h2 className="text-6xl font-black text-[#1F2124] tracking-tighter leading-none">Financial <span className="text-[#8A8D91] italic font-light">Ecosystem</span></h2>
          <p className="text-[#4D4F53] text-[18px] font-bold mt-8 leading-relaxed">
            Manage enterprise billing, quotas, and <span className="text-[#E3D5CA] font-extrabold underline decoration-2 underline-offset-8">fiscal node health</span>.
          </p>
        </div>
        <button className="btn-zen btn-zen-primary h-14 px-10 shadow-2xl shadow-black/10">
          <Plus size={20} strokeWidth={3} />
          <span className="text-[13px] font-black uppercase tracking-widest">New Fiscal Node</span>
        </button>
      </div>

      {/* Fiscal Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          { label: 'Burn Rate', val: '$42,400', trend: '-2.4%', up: false, c: 'text-[#1F2124]', bg: 'bg-[#F9F7F4]' },
          { label: 'Cloud Credits', val: '14.2M', trend: '+12%', up: true, c: 'text-[#A3B18A]', bg: 'bg-[#F0F4E8]' },
          { label: 'Project Budget', val: '$1.2M', trend: 'Balanced', up: true, c: 'text-[#8C9AB8]', bg: 'bg-[#EEF1F6]' },
        ].map((m, idx) => (
          <div key={idx} className="zen-card p-12 group border-black/[0.015]">
             <p className="label-zen text-[#8A8D91] mb-4 font-black tracking-[0.2em] opacity-60">{m.label}</p>
             <div className="flex items-baseline justify-between mb-8">
                <h4 className={`text-4xl font-black ${m.c} tracking-tighter group-hover:scale-105 transition-transform origin-left duration-700`}>{m.val}</h4>
                <div className={`flex items-center text-[10px] font-black ${m.up ? 'text-[#A3B18A]' : 'text-[#D4A373]'} ${m.bg} px-3 py-1.5 rounded-xl border border-black/[0.015]`}>
                  {m.up ? <ArrowUpRight size={14} className="mr-2" /> : <ArrowDownRight size={14} className="mr-2" />}
                  {m.trend}
                </div>
             </div>
             <div className="h-1.5 w-full bg-black/[0.03] rounded-full overflow-hidden">
                <div className={`h-full bg-current rounded-full transition-all duration-1000 ${m.c}`} style={{ width: idx === 0 ? '60%' : '80%', opacity: 0.4 }}></div>
             </div>
          </div>
        ))}
      </div>

      {/* Accounts Registry Registry */}
      <div className="zen-card overflow-hidden shadow-2xl shadow-black/[0.01]">
         <div className="p-10 border-b border-black/[0.015] flex items-center justify-between bg-[#F9F7F4]/30">
            <h4 className="label-zen text-[#1F2124] font-black tracking-[0.3em]">Enterprise Accounts</h4>
            <div className="flex items-center space-x-8">
              <Search size={20} className="text-[#D1D1D1] hover:text-[#1F2124] transition-colors cursor-pointer" />
              <Filter size={20} className="text-[#D1D1D1] hover:text-[#1F2124] transition-colors cursor-pointer" />
            </div>
         </div>
         <div className="grid grid-cols-1 divide-y divide-black/[0.015]">
            {accounts.map((acc, i) => (
              <div key={i} className="p-12 flex items-center justify-between hover:bg-[#F9F7F4]/40 transition-all group cursor-pointer">
                 <div className="flex items-center space-x-10">
                    <div className="w-20 h-20 bg-white border border-black/[0.015] rounded-[28px] flex items-center justify-center text-[#8C9AB8] font-black text-2xl shadow-sm group-hover:rotate-6 transition-all duration-700 group-hover:bg-[#FCFAF7]">
                       {acc?.[0]}
                    </div>
                    <div>
                       <h5 className="text-2xl font-black text-[#1F2124] tracking-tighter">{acc}</h5>
                       <div className="flex items-center space-x-4 mt-3">
                          <span className="text-[11px] font-black text-[#8A8D91] uppercase tracking-[0.2em] opacity-60">Active License</span>
                          <div className="w-1.5 h-1.5 rounded-full bg-black/[0.08]"></div>
                          <span className="text-[11px] font-black text-[#8C9AB8] uppercase tracking-[0.2em]">Tier 3 Enterprise</span>
                       </div>
                    </div>
                 </div>
                 <div className="flex items-center space-x-16">
                    <div className="text-right">
                       <p className="label-zen text-[#8A8D91] mb-2 opacity-40 font-black tracking-[0.2em]">Consumption</p>
                       <p className="text-2xl font-black text-[#1F2124] tracking-tighter">88.4%</p>
                    </div>
                    <div className="flex items-center space-x-5">
                       <div className="px-5 py-2.5 bg-[#F0F4E8] border border-[#A3B18A]/10 rounded-2xl text-[#A3B18A] text-[11px] font-black uppercase tracking-widest flex items-center shadow-sm">
                          <ShieldCheck size={16} className="mr-2" />
                          Validated
                       </div>
                       <button className="p-3 text-[#D1D1D1] hover:text-[#1F2124] hover:bg-white rounded-xl transition-all"><MoreVertical size={20} /></button>
                    </div>
                 </div>
              </div>
            ))}
         </div>
         
         <div className="p-8 bg-[#F9F7F4]/20 flex justify-center">
            <button className="text-[11px] font-black text-[#8A8D91] uppercase tracking-[0.4em] hover:text-[#1F2124] transition-all flex items-center">
               View Full Fiscal Ledger
               <ChevronRight size={14} className="ml-2 opacity-40" />
            </button>
         </div>
      </div>
    </div>
  );
};

export default AccountsView;