import React, { useState } from 'react';
import { MOCK_PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';
import { Plus, Search, Edit3, Box, ChevronLeft, ChevronRight, Activity, Globe } from 'lucide-react';
import { Project } from '../types';

interface ProjectsViewProps {
  onSelectProject?: (project: Project) => void;
  isAdminView?: boolean;
}

const ProjectsView: React.FC<ProjectsViewProps> = ({ onSelectProject, isAdminView = false }) => {
  const [filter, setFilter] = useState<string>('All');

  if (isAdminView) {
    return (
      <div className="p-12 lg:p-20 space-y-16 animate-zen">
        {/* Admin Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
               <div className="w-14 h-14 bg-white border border-black/[0.03] rounded-[20px] text-[#8C9AB8] flex items-center justify-center shadow-2xl shadow-black/[0.02]">
                  <Box size={24} strokeWidth={1.5} />
               </div>
               <h2 className="text-4xl font-black text-[#1F2124] tracking-tighter">Projects</h2>
            </div>
            <p className="text-[#8A8D91] text-[16px] font-bold max-w-lg leading-relaxed">
              Create and manage your organization's projects from the <span className="text-[#1F2124]">centralized administrative node</span>.
            </p>
          </div>

          <button className="btn-zen btn-zen-primary h-14 px-10 flex items-center space-x-3 shadow-2xl shadow-indigo-100 transform hover:scale-105 transition-all">
             <Plus size={20} strokeWidth={3} />
             <span className="text-[13px] font-black uppercase tracking-widest">Add New Project</span>
          </button>
        </div>

        {/* Registry Table Section */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-[18px] font-black text-[#1F2124] tracking-tight">Accessible Projects ({MOCK_PROJECTS.length})</h3>
            <div className="relative w-full max-w-sm group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-[#D1D1D1] group-focus-within:text-[#1F2124] transition-colors" size={16} />
              <input 
                type="text" 
                placeholder="Search project identity..." 
                className="w-full pl-14 pr-6 h-12 bg-white border border-black/[0.06] rounded-2xl text-[14px] font-bold text-[#1F2124] placeholder:text-[#D1D1D1] focus:outline-none focus:border-[#8C9AB8] transition-all"
              />
            </div>
          </div>

          <div className="zen-card overflow-hidden shadow-2xl shadow-black/[0.01]">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[#F9F7F4]/60 border-b border-black/[0.015]">
                    <th className="px-12 py-8 label-zen text-[#8A8D91] font-black tracking-[0.2em]">Project Name</th>
                    <th className="px-10 py-8 label-zen text-[#8A8D91] font-black tracking-[0.2em]">Slack Channels</th>
                    <th className="px-10 py-8 label-zen text-[#8A8D91] font-black tracking-[0.2em]">GitHub Repositories</th>
                    <th className="px-10 py-8 label-zen text-[#8A8D91] font-black tracking-[0.2em]">Jira Projects</th>
                    <th className="px-10 py-8 label-zen text-[#8A8D91] font-black tracking-[0.2em]">Docs</th>
                    <th className="px-10 py-8 label-zen text-[#8A8D91] font-black tracking-[0.2em]">Team Members</th>
                    <th className="px-10 py-8 label-zen text-[#8A8D91] text-center tracking-[0.2em]">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/[0.015]">
                  {MOCK_PROJECTS.map((project) => (
                    <tr 
                      key={project.id} 
                      className="hover:bg-[#F9F7F4]/40 transition-all group cursor-pointer"
                      onClick={() => onSelectProject?.(project)}
                    >
                      <td className="px-12 py-9">
                        <span className="text-[16px] font-black text-[#1F2124] tracking-tighter group-hover:text-[#8C9AB8] transition-colors duration-300">
                          {project.name}
                        </span>
                      </td>
                      <td className="px-10 py-9">
                        <span className="text-[15px] font-bold text-[#4D4F53]">
                          {project.integrations?.slack || '-'}
                        </span>
                      </td>
                      <td className="px-10 py-9">
                        <span className="text-[15px] font-bold text-[#4D4F53]">
                          {project.integrations?.github || '-'}
                        </span>
                      </td>
                      <td className="px-10 py-9">
                        <span className="text-[15px] font-bold text-[#4D4F53]">
                          {project.integrations?.jira || '-'}
                        </span>
                      </td>
                      <td className="px-10 py-9">
                        <span className="text-[15px] font-bold text-[#4D4F53]">
                          {project.integrations?.googleDocs || '-'}
                        </span>
                      </td>
                      <td className="px-10 py-9">
                        <span className="text-[15px] font-bold text-[#4D4F53]">
                          {project.members.length || '-'}
                        </span>
                      </td>
                      <td className="px-10 py-9 text-center">
                        <div className="flex justify-center">
                          <button className="p-3 text-[#D1D1D1] hover:text-[#1F2124] hover:bg-white rounded-[14px] transition-all shadow-sm border border-transparent hover:border-black/[0.04]">
                            <Edit3 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="px-12 py-8 flex items-center justify-center space-x-8 border-t border-black/[0.015] bg-[#F9F7F4]/20">
               <p className="text-[13px] font-bold text-[#8A8D91]">Showing 1 to {MOCK_PROJECTS.length} of {MOCK_PROJECTS.length} entries</p>
               <div className="flex items-center space-x-4">
                  <button className="p-2 text-[#D1D1D1] hover:text-[#1F2124] transition-colors"><ChevronLeft size={20} /></button>
                  <button className="w-10 h-10 rounded-xl bg-[#1F2124] text-white text-[12px] font-black shadow-xl shadow-black/10">1</button>
                  <button className="p-2 text-[#D1D1D1] hover:text-[#1F2124] transition-colors"><ChevronRight size={20} /></button>
               </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-12 lg:p-24 space-y-16 animate-zen">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-xl">
          <div className="flex items-center space-x-3 text-[11px] font-black text-[#8C9AB8] uppercase tracking-[0.3em] mb-4">
             <div className="w-3 h-3 rounded-full bg-[#8C9AB8]/20 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8C9AB8]"></div>
             </div>
             <span>Portfolio Intelligence</span>
          </div>
          <h2 className="text-5xl font-black text-[#1F2124] tracking-tighter">Infrastructure Nodes</h2>
          <p className="text-[18px] text-[#4D4F53] font-bold mt-6 leading-relaxed">
            Synthesized overview of active organizational telemetry.
          </p>
        </div>
        <button className="btn-zen btn-zen-primary h-14 px-10 shadow-2xl shadow-indigo-100 transform hover:scale-105 transition-all">
          <Plus size={20} strokeWidth={3} />
          <span className="text-[13px] font-black uppercase tracking-widest">Initiate Node</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 pb-20">
        {MOCK_PROJECTS.map(p => (
          <ProjectCard 
            key={p.id} 
            project={p} 
            onSelect={() => onSelectProject?.(p)} 
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsView;