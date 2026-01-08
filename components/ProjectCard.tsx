import React from 'react';
import { Project, ProjectStatus } from '../types';
import { MoreHorizontal, TrendingUp, TrendingDown, ArrowRight, Github, Slack } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area } from 'recharts';

interface ProjectCardProps {
  project: Project;
  onSelect?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const isPositive = project.trend > 0;

  const getStatusConfig = () => {
    switch(project.status) {
      case ProjectStatus.ON_TRACK: return { class: 'success', label: 'Aligned', color: '#A3B18A' };
      case ProjectStatus.AT_RISK: return { class: 'warning', label: 'Deviation', color: '#D4A373' };
      case ProjectStatus.GENERATING: return { class: 'purple', label: 'Synthesis', color: '#B5A1B7' };
      default: return { class: 'info', label: project.status, color: '#8C9AB8' };
    }
  };

  const status = getStatusConfig();

  return (
    <div className="zen-card p-10 flex flex-col h-full group">
      <div className="flex justify-between items-start mb-8">
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-3 mb-4">
            <span className={`status-pill ${status.class}`}>
              {status.label}
            </span>
            <span className="text-[9px] font-bold text-[#9A9DA1] uppercase tracking-widest opacity-60">ID-{project.id}</span>
          </div>
          <h3 className="text-[17px] font-bold text-[#1F2124] truncate tracking-tight group-hover:text-[#8C9AB8] transition-colors duration-300">
            {project.name}
          </h3>
        </div>
        <button className="p-2 text-[#D1D1D1] hover:text-[#1F2124] hover:bg-[#F9F7F4] rounded-xl transition-all">
          <MoreHorizontal size={18} />
        </button>
      </div>

      <div className="flex-1 space-y-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="label-zen mb-2 opacity-50">Pulse Index</p>
            <div className="flex items-baseline space-x-2">
              <span className="text-4xl font-bold text-[#1F2124] tracking-tighter">{project.aiScore}</span>
              <div className={`flex items-center space-x-1 text-[11px] font-bold ${isPositive ? 'text-[#A3B18A]' : 'text-[#D4A373]'}`}>
                {isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                <span>{isPositive ? '+' : ''}{project.trend}%</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-3 text-[#D1D1D1]">
             <Github size={16} strokeWidth={1.5} />
             <Slack size={16} strokeWidth={1.5} />
          </div>
        </div>

        {/* Botanical Waveform */}
        <div className="h-14 w-full opacity-40 group-hover:opacity-100 transition-opacity duration-700">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={project.chartData.length ? project.chartData : [{value: 0}]}>
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke={status.color} 
                strokeWidth={2.5} 
                fill={status.color}
                fillOpacity={0.03}
                dot={false} 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="p-5 bg-[#F9F7F4]/50 rounded-[20px] group-hover:bg-white transition-all border border-black/[0.01]">
          <p className="text-[12px] leading-relaxed text-[#5C5E62] font-medium italic">
            {project.summary || 'Awaiting telemetry sync...'}
          </p>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-black/[0.03] flex items-center justify-between">
        <div className="flex -space-x-2">
          {project.members.slice(0, 3).map((member) => (
            <div 
              key={member.id} 
              className={`w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-bold text-white shadow-sm ring-1 ring-black/[0.03] ${member.color}`}
            >
              {member.initials}
            </div>
          ))}
        </div>
        <button 
          onClick={onSelect}
          className="btn-zen btn-zen-primary text-[10px] uppercase tracking-widest px-5 h-9"
        >
          <span>Examine</span>
          <ArrowRight size={14} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;