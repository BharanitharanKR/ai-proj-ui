
import React from 'react';
import { 
  LayoutDashboard, Briefcase, Users, MessageSquare, 
  CreditCard, Plug, RefreshCw, HelpCircle,
  Slack, Github, Database, FileText, Chrome
} from 'lucide-react';
import { Project, ProjectStatus, NavItem, TeamMember, Integration } from './types';

export const MOCK_PEOPLE: TeamMember[] = [
  { id: '1', name: 'Akalya S', initials: 'AS', color: 'bg-slate-800', email: 'akalya.selvaraj@c1exchange.com', projects: ['Instacare', 'Pax-i'], accountName: 'C1X' },
  { id: '2', name: 'Amartya Mondal', initials: 'AM', color: 'bg-amber-800', email: 'amartya.mondal@c1exchange.com', projects: ['Pax-i'], accountName: 'C1X' },
  { id: '3', name: 'Arockia Franciska W', initials: 'AW', color: 'bg-indigo-600', position: 'Backend Dev', email: 'arockiafranciska.w@c1exchange.com', projects: ['Pax-i'], accountName: 'C1X' },
  { id: '4', name: 'Deeksha T', initials: 'DT', color: 'bg-cyan-500', email: 'deeksha.t@c1exchange.com', projects: ['Pax-i'], accountName: 'C1X' },
  { id: '5', name: 'Gaurav Singh', initials: 'GS', color: 'bg-blue-600', email: 'gaurav.singh@c1exchange.com', projects: ['TEST'], accountName: 'C1X' },
  { id: '6', name: 'Madhu Sankar S', initials: 'MS', color: 'bg-emerald-600', email: 'madhusankar.s@c1exchange.com', projects: ['Pax-i'], accountName: 'C1X' },
  { id: '7', name: 'maheshwaran.panchatcharam', initials: 'M', color: 'bg-orange-600', email: 'maheshwaran.panchatcharam@c1exchange.com', projects: ['Instacare', 'Instacare'], accountName: 'C1X' },
];

export const MOCK_PROJECTS: Project[] = [
  {
    id: '1',
    name: 'Pax-i',
    status: ProjectStatus.ON_TRACK,
    aiScore: 86,
    trend: 16.22,
    summary: 'The project is currently proceeding according to the optimized AI roadmap with high efficiency metrics.',
    members: MOCK_PEOPLE.slice(0, 5),
    chartData: [{ value: 40 }, { value: 35 }, { value: 55 }, { value: 45 }, { value: 70 }, { value: 65 }, { value: 86 }],
    integrations: { slack: 4, github: 4, jira: 1, googleDocs: 1 }
  },
  {
    id: '2',
    name: 'Instacare',
    status: ProjectStatus.AT_RISK,
    aiScore: 43,
    trend: -18.87,
    summary: 'Detected bottlenecks in resource allocation and dependency delays in the core infrastructure module.',
    members: MOCK_PEOPLE.slice(5, 7),
    chartData: [{ value: 80 }, { value: 75 }, { value: 60 }, { value: 55 }, { value: 50 }, { value: 45 }, { value: 43 }],
    integrations: { slack: 1, github: 1, jira: 1 }
  },
  { id: '3', name: 'test', status: ProjectStatus.GENERATING, aiScore: 0, trend: 0, members: [], chartData: [], integrations: { slack: 1 } },
  { id: '4', name: 'TEST', status: ProjectStatus.GENERATING, aiScore: 0, trend: 0, members: [MOCK_PEOPLE[4]], chartData: [], integrations: { slack: 1 } },
  { id: '5', name: 'TEST2', status: ProjectStatus.GENERATING, aiScore: 0, trend: 0, members: [], chartData: [], integrations: { jira: 1 } }
];

export const MOCK_INTEGRATIONS: Integration[] = [
  { id: '1', name: 'Jira', icon: <Chrome size={28} />, status: 'CONNECTED', lastUpdated: '12/29/25, 10:09 PM', logoColor: 'text-blue-500' },
  { id: '2', name: 'Slack', icon: <Slack size={28} />, status: 'CONNECTED', lastUpdated: '12/30/25, 1:32 PM', logoColor: 'text-rose-500' },
  { id: '3', name: 'GitHub', icon: <Github size={28} />, status: 'CONNECTED', lastUpdated: '12/29/25, 10:03 PM', logoColor: 'text-slate-900' },
  { id: '4', name: 'Drive', icon: <FileText size={28} />, status: 'CONNECTED', lastUpdated: '12/9/25, 4:58 PM', logoColor: 'text-emerald-500' },
];

export const CHAT_TOPICS = [
  "Welcome Executive", "Paxi Initiative Overview", "Welcome Message", "Pax-i Team Progress", 
  "Collaboration Highlights", "Collaboration Threads Started", "Team Channel Welcome", 
  "Team Channel Greetings", "Paxi Report Automation", "Project Status Overview"
];

export const NAV_ITEMS: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
  { id: 'projects', label: 'Projects', icon: <Briefcase size={20} /> },
  { id: 'people', label: 'People', icon: <Users size={20} /> },
  { id: 'ai-chat', label: 'AI Chat', icon: <MessageSquare size={20} /> },
  { id: 'accounts', label: 'Accounts', icon: <CreditCard size={20} /> },
  { id: 'integrations', label: 'Integrations', icon: <Plug size={20} />, category: 'ADMINISTRATION' },
  { id: 'sync', label: 'People Sync', icon: <RefreshCw size={20} />, category: 'ADMINISTRATION' },
  { id: 'admin-projects', label: 'Projects', icon: <Briefcase size={20} />, category: 'ADMINISTRATION' },
  { id: 'admin-accounts', label: 'Accounts', icon: <CreditCard size={20} />, category: 'ADMINISTRATION' },
  { id: 'help', label: 'Help', icon: <HelpCircle size={20} /> },
];
