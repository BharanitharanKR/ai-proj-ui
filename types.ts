
import React from 'react';

export enum ProjectStatus {
  ON_TRACK = 'On Track',
  AT_RISK = 'At Risk',
  GENERATING = 'Generating',
  PAUSED = 'Paused'
}

export interface TeamMember {
  id: string;
  name: string;
  avatar?: string;
  initials: string;
  color: string;
  position?: string;
  email?: string;
  projects?: string[];
  accountName?: string;
}

export interface Project {
  id: string;
  name: string;
  status: ProjectStatus;
  aiScore: number;
  trend: number;
  summary?: string;
  members: TeamMember[];
  chartData: { value: number }[];
  integrations?: {
    slack?: number;
    github?: number;
    jira?: number;
    googleDocs?: number;
  };
}

export interface NavItem {
  label: string;
  icon: React.ReactNode;
  id: string;
  category?: string;
}

export interface Integration {
  id: string;
  name: string;
  icon: React.ReactNode;
  status: 'CONNECTED' | 'DISCONNECTED';
  lastUpdated: string;
  logoColor: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}
