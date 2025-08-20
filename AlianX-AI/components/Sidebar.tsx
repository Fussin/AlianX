
import React from 'react';
import { ChimeraLogo, DashboardIcon, ScansIcon } from './Icons';

interface SidebarProps {
    activeView: string;
    setActiveView: (view: string) => void;
}

const NavItem: React.FC<{
    icon: React.ReactNode;
    label: string;
    isActive: boolean;
    onClick: () => void;
}> = ({ icon, label, isActive, onClick }) => (
    <li
        onClick={onClick}
        className={`flex items-center p-3 my-1 rounded-lg cursor-pointer transition-colors duration-200 ${
            isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
        }`}
    >
        {icon}
        <span className="ml-4 font-medium">{label}</span>
    </li>
);

export const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView }) => {
    return (
        <aside className="w-64 flex-shrink-0 bg-gray-800 p-4 flex flex-col">
            <div className="flex items-center mb-10 px-2">
                <ChimeraLogo className="h-10 w-10 text-blue-500" />
                <h1 className="text-xl font-bold ml-3 text-white">Project Chimera</h1>
            </div>
            <nav>
                <ul>
                    <NavItem 
                        icon={<DashboardIcon />} 
                        label="Dashboard" 
                        isActive={activeView === 'dashboard'} 
                        onClick={() => setActiveView('dashboard')} 
                    />
                    <NavItem 
                        icon={<ScansIcon />} 
                        label="Scans" 
                        isActive={activeView === 'scans'} 
                        onClick={() => setActiveView('scans')} 
                    />
                </ul>
            </nav>
            <div className="mt-auto p-2 text-center text-gray-400 text-xs">
                <p>&copy; 2024 Chimera Security</p>
                <p>v1.0.0</p>
            </div>
        </aside>
    );
};