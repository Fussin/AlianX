
import React, { useState, useCallback, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { DashboardView } from './components/DashboardView';
import { ScansView } from './components/ScansView';
import { getScans, createScan } from './api';
import { Scan, ScanPolicy } from './types';

const App: React.FC = () => {
    const [activeView, setActiveView] = useState('dashboard');
    const [scans, setScans] = useState<Scan[]>([]);

    const fetchScans = useCallback(async () => {
        try {
            const fetchedScans = await getScans();
            setScans(fetchedScans);
        } catch (error) {
            console.error("Error fetching scans:", error);
        }
    }, []);

    useEffect(() => {
        fetchScans();
        const interval = setInterval(fetchScans, 5000); // Poll every 5 seconds
        return () => clearInterval(interval);
    }, [fetchScans]);

    const handleAddScan = useCallback(async (target: string, policy: ScanPolicy) => {
        try {
            await createScan(target, policy);
            fetchScans(); // Refresh the list after adding
        } catch (error) {
            console.error("Error creating scan:", error);
        }
    }, [fetchScans]);

    const renderView = () => {
        switch (activeView) {
            case 'dashboard':
                return <DashboardView scans={scans} />;
            case 'scans':
                return <ScansView scans={scans} onAddScan={handleAddScan} />;
            default:
                return <DashboardView scans={scans} />;
        }
    };

    return (
        <div className="flex h-screen bg-gray-900 text-gray-100">
            <Sidebar activeView={activeView} setActiveView={setActiveView} />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-900 p-6 md:p-8">
                    {renderView()}
                </main>
            </div>
        </div>
    );
};

export default App;