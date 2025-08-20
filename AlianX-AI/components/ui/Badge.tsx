
import React from 'react';
import { ScanStatus } from '../../types';

interface BadgeProps {
    status: ScanStatus;
}

export const Badge: React.FC<BadgeProps> = ({ status }) => {
    const statusColors: Record<ScanStatus, string> = {
        [ScanStatus.COMPLETED]: "bg-green-500/20 text-green-400",
        [ScanStatus.ANALYZING]: "bg-blue-500/20 text-blue-400",
        [ScanStatus.DISCOVERING_ASSETS]: "bg-cyan-500/20 text-cyan-400",
        [ScanStatus.PENDING]: "bg-yellow-500/20 text-yellow-400",
        [ScanStatus.FAILED]: "bg-red-500/20 text-red-400",
    };

    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[status]}`}>
            <svg className="-ml-0.5 mr-1.5 h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                <circle cx="4" cy="4" r="3" />
            </svg>
            {status}
        </span>
    );
};