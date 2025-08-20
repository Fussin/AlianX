
import React from 'react';

export const Header: React.FC = () => {
    return (
        <header className="flex-shrink-0 bg-gray-800 border-b border-gray-700 px-6 py-4">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-white">Security Dashboard</h2>
                <div className="flex items-center">
                    <img 
                        className="h-10 w-10 rounded-full object-cover" 
                        src="https://picsum.photos/100" 
                        alt="User Avatar"
                    />
                </div>
            </div>
        </header>
    );
};