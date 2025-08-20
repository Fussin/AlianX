
import React from 'react';
import { Scan, ScanStatus } from '../types';
import { StatCard } from './StatCard';
import { ScanStatusChart } from './ScanStatusChart';
import { FindingsTrendChart } from './FindingsTrendChart';
import { Card } from './ui/Card';

interface DashboardViewProps {
    scans: Scan[];
}

export const DashboardView: React.FC<DashboardViewProps> = ({ scans }) => {
    const totalScans = scans.length;
    const activeScans = scans.filter(s => s.status === ScanStatus.ANALYZING || s.status === ScanStatus.DISCOVERING_ASSETS).length;
    const totalFindings = scans.reduce((acc, s) => acc + s.findings, 0);
    const failedScans = scans.filter(s => s.status === ScanStatus.FAILED).length;

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Total Scans" value={totalScans} />
                <StatCard title="Active Scans" value={activeScans} />
                <StatCard title="Total Findings" value={totalFindings} />
                <StatCard title="Failed Scans" value={failedScans} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                <Card className="lg:col-span-2">
                    <h3 className="text-lg font-semibold text-white mb-4">Scans by Status</h3>
                    <div className="h-64">
                       <ScanStatusChart scans={scans} />
                    </div>
                </Card>
                <Card className="lg:col-span-3">
                    <h3 className="text-lg font-semibold text-white mb-4">Findings Trend</h3>
                     <div className="h-64">
                       <FindingsTrendChart scans={scans} />
                    </div>
                </Card>
            </div>
        </div>
    );
};