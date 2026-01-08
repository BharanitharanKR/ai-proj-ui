import React from 'react';
import { NAV_ITEMS } from '../constants';

interface SidebarProps {
  activeId: string;
  setActiveId: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeId, setActiveId }) => {
  const mainItems = NAV_ITEMS.filter(item => !item.category && item.id !== 'help');
  const adminItems = NAV_ITEMS.filter(item => item.category === 'ADMINISTRATION');

  const renderItem = (item: typeof NAV_ITEMS[0]) => {
    const isActive = activeId === item.id;
    return (
      <button
        key={item.id}
        onClick={() => setActiveId(item.id)}
        className={`relative flex items-center w-full px-5 py-3.5 text-[14px] transition-all duration-500 mb-1 group rounded-xl ${
          isActive 
            ? 'bg-white text-[#1F2124] shadow-[0_8px_20px_-10px_rgba(0,0,0,0.1)] border border-black/[0.03]' 
            : 'text-[#8A8D91] hover:text-[#1F2124] hover:bg-black/[0.015]'
        }`}
      >
        <div className={`mr-4 transition-all duration-500 ${isActive ? 'text-[#8C9AB8] scale-110' : 'text-[#D1D1D1] group-hover:text-[#8C9AB8]'}`}>
          {React.cloneElement(item.icon as React.ReactElement<any>, { 
            size: 19, 
            strokeWidth: isActive ? 2.5 : 2
          })}
        </div>
        <span className={`font-black tracking-tight ${isActive ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}>
          {item.label}
        </span>
        {isActive && (
          <div className="absolute left-0 w-1.5 h-5 bg-[#8C9AB8] rounded-full shadow-[0_0_10px_rgba(140,154,184,0.2)]" />
        )}
      </button>
    );
  };

  return (
    <aside className="w-[300px] h-screen bg-[#F9F7F4] border-r border-black/[0.04] flex flex-col z-40 p-10">
      <div className="mb-14 px-2">
         <div className="flex items-center space-x-5 mb-12 group cursor-pointer">
            <div className="w-11 h-11 bg-[#1F2124] rounded-[14px] flex items-center justify-center text-white transition-all duration-700 group-hover:bg-[#8C9AB8] group-hover:rotate-6">
               <span className="font-bold text-lg">P</span>
            </div>
            <div>
               <p className="text-[20px] font-black text-[#1F2124] tracking-tighter leading-none">Paxi</p>
               <p className="label-zen mt-2 opacity-50 text-[8px] tracking-[0.3em]">Botanical Core</p>
            </div>
         </div>
         <div className="label-zen ml-2 opacity-40 text-[9px] tracking-[0.4em] font-black">INTELLIGENCE</div>
      </div>

      <nav className="space-y-1">
        {mainItems.map(renderItem)}
      </nav>

      <div className="mt-14">
        <div className="px-5 mb-6">
           <p className="label-zen opacity-40 text-[9px] tracking-[0.4em] font-black uppercase">ADMINISTRATION</p>
        </div>
        <nav className="space-y-1">
          {adminItems.map(renderItem)}
        </nav>
      </div>

      <div className="mt-auto">
         <div className="p-8 rounded-[32px] bg-white border border-black/[0.015] shadow-2xl shadow-black/[0.01] relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-3">
                 <div className="w-2 h-2 rounded-full bg-[#A3B18A] animate-pulse"></div>
                 <p className="label-zen text-[#A3B18A] text-[9px] font-black">Sync Stable</p>
              </div>
              <p className="text-[12px] text-[#4D4F53] leading-relaxed font-bold italic opacity-80">
                Infrastructure nodes reporting nominal telemetry.
              </p>
            </div>
         </div>
      </div>
    </aside>
  );
};

export default Sidebar;