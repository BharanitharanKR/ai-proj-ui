import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import DashboardView from './components/DashboardView';
import ProjectDetailView from './components/ProjectDetailView';
import PersonDetailView from './components/PersonDetailView';
import IntegrationsView from './components/IntegrationsView';
import AIChatView from './components/AIChatView';
import PeopleView from './components/PeopleView';
import ProjectsView from './components/ProjectsView';
import AccountsView from './components/AccountsView';
import { Project, TeamMember } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedPerson, setSelectedPerson] = useState<TeamMember | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const triggerTransition = (callback: () => void) => {
    setIsTransitioning(true);
    setTimeout(() => {
      callback();
      setIsTransitioning(false);
    }, 300);
  };

  const handleProjectSelect = (project: Project) => {
    triggerTransition(() => {
      setSelectedProject(project);
      setSelectedPerson(null);
      setActiveTab('project-detail');
    });
  };

  const handlePersonSelect = (person: TeamMember) => {
    triggerTransition(() => {
      setSelectedPerson(person);
      setSelectedProject(null);
      setActiveTab('person-detail');
    });
  };

  const changeTab = (id: string) => {
    triggerTransition(() => {
      setActiveTab(id);
      setSelectedProject(null);
      setSelectedPerson(null);
    });
  };

  const renderContent = () => {
    if (activeTab === 'project-detail' && selectedProject) {
      return (
        <ProjectDetailView 
          project={selectedProject} 
          onBack={() => changeTab('projects')} 
        />
      );
    }

    if (activeTab === 'person-detail' && selectedPerson) {
      return (
        <PersonDetailView 
          person={selectedPerson} 
          onBack={() => changeTab('people')} 
        />
      );
    }

    switch (activeTab) {
      case 'dashboard':
        return <DashboardView />;
      case 'projects':
      case 'admin-projects':
        return <ProjectsView onSelectProject={handleProjectSelect} />;
      case 'integrations':
        return <IntegrationsView />;
      case 'ai-chat':
        return <AIChatView />;
      case 'people':
        return <PeopleView isAdmin={false} onSelectPerson={handlePersonSelect} />;
      case 'sync':
        return <PeopleView isAdmin={true} onSelectPerson={handlePersonSelect} />;
      case 'accounts':
      case 'admin-accounts':
        return <AccountsView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#FCFAF7]">
      <Sidebar 
        activeId={activeTab} 
        setActiveId={changeTab} 
      />
      <main className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <div 
          className={`flex-1 overflow-y-auto custom-scrollbar bg-[#FCFAF7] transition-all duration-500 ${
            isTransitioning ? 'opacity-0 scale-[0.99] translate-y-2' : 'opacity-100 scale-100 translate-y-0'
          }`}
        >
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;