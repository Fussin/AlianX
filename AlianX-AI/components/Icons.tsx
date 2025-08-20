
import React from 'react';

interface IconProps {
  className?: string;
}

export const ChimeraLogo: React.FC<IconProps> = ({ className = "h-8 w-auto" }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 10 L90 50 L50 90 L10 50 Z" stroke="currentColor" strokeWidth="8" strokeLinejoin="round" />
        <path d="M50 10 L70 30 L50 50 L30 30 Z" fill="#3B82F6" />
        <path d="M50 90 L70 70 L50 50 L30 70 Z" fill="#3B82F6" />
        <path d="M10 50 L30 30 L50 50 L30 70 Z" fill="#2563EB" />
        <path d="M90 50 L70 30 L50 50 L70 70 Z" fill="#2563EB" />
    </svg>
);


export const DashboardIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect width="7" height="9" x="3" y="3" rx="1"/>
        <rect width="7" height="5" x="14" y="3" rx="1"/>
        <rect width="7" height="9" x="14" y="12" rx="1"/>
        <rect width="7" height="5" x="3" y="16" rx="1"/>
    </svg>
);

export const ScansIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M10 10.42 14 5a2 2 0 1 1 3.53 1.47l-3.53 3.53a2 2 0 0 1-2.83 0Z"/><path d="m14 14-4 4.08a2 2 0 0 1-2.83 0L2.5 13.41a2 2 0 0 1 0-2.83L6.58 6.5a2 2 0 0 1 2.83 0L14 10.58a2 2 0 0 1 0 2.83Z"/><path d="M14 5a2 2 0 1 1 3.53 1.47l-3.53 3.53a2 2 0 0 1-2.83 0Z"/><path d="M17 17 22 12"/>
    </svg>
);

export const PlusIcon: React.FC<IconProps> = ({ className = "h-5 w-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M5 12h14"/><path d="M12 5v14"/>
    </svg>
);

export const CloseIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
    </svg>
);