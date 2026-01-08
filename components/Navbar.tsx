import React from 'react';
import { ChevronDown, Layers, Bell, Settings, Search, Plus } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <header className="h-20 glass-header sticky top-0 flex items-center justify-between px-16 z-50">
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-4 cursor-pointer group">
          <div className="w-9 h-9 bg-[#1F2124] rounded-[10px] flex items-center justify-center text-white transition-all duration-500 group-hover:bg-[#8C9AB8]">
             <Layers size={18} strokeWidth={1.5} />
          </div>
          <div className="flex flex-col">
            <span className="text-[18px] font-bold text-[#1F2124] tracking-tight leading-none">Paxi<span className="text-[#9A9DA1] font-light">.ai</span></span>
          </div>
        </div>
        <div className="h-5 w-[1px] bg-black/[0.05]"></div>
        <div className="flex items-center space-x-2 text-[#5C5E62] font-bold text-[12px] tracking-tight hover:text-[#1F2124] transition-colors cursor-pointer">
           <span>Default Hub</span>
           <ChevronDown size={14} />
        </div>
      </div>

      <div className="flex-1 max-w-md mx-10">
        <div className="relative group">
          <Search size={15} className="absolute left-5 top-1/2 -translate-y-1/2 text-[#9A9DA1] group-focus-within:text-[#1F2124] transition-colors" />
          <input 
            type="text" 
            placeholder="Search organizational telemetry..." 
            className="w-full h-11 bg-black/[0.03] border border-transparent rounded-full pl-12 pr-6 text-[13px] font-medium text-[#1F2124] placeholder:text-[#9A9DA1] focus:outline-none focus:bg-white focus:border-black/[0.05] focus:ring-4 focus:ring-black/[0.02] transition-all"
          />
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <button className="btn-zen btn-zen-primary h-10 px-5">
           <Plus size={16} strokeWidth={3} />
           <span className="text-[12px]">Initiate</span>
        </button>
        
        <div className="h-6 w-[1px] bg-black/[0.05]"></div>

        <div className="flex items-center space-x-6">
          <button className="text-[#9A9DA1] hover:text-[#1F2124] relative p-1 transition-colors">
            <Bell size={18} strokeWidth={2.2} />
            <div className="absolute top-0 right-0 w-2 h-2 bg-[#D4A373] rounded-full border-2 border-white shadow-sm"></div>
          </button>
          
          <div className="flex items-center space-x-4 cursor-pointer group p-0.5">
            <div className="text-right hidden xl:block">
              <p className="text-[13px] font-bold text-[#1F2124] leading-none">Akalya S.</p>
              <p className="label-zen mt-1.5 opacity-40 text-[8px] tracking-[0.2em] origin-right">Lead Curator</p>
            </div>
            <div className="w-10 h-10 rounded-[12px] bg-[#8C9AB8] flex items-center justify-center text-white font-bold text-[10px] tracking-widest shadow-lg shadow-[#8C9AB8]/10 group-hover:scale-95 transition-all">
               AS
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;