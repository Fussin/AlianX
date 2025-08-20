
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Scan } from '../types';

interface FindingsTrendChartProps {
    scans: Scan[];
}

export const FindingsTrendChart: React.FC<FindingsTrendChartProps> = ({ scans }) => {
    const data = scans
        .filter(s => s.findings > 0)
        .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
        .slice(-10) // show last 10 scans with findings
        .map(scan => ({
            name: new Date(scan.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
            findings: scan.findings,
        }));

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#D1D5DB" fontSize={12} />
                <YAxis stroke="#D1D5DB" fontSize={12} />
                <Tooltip
                     contentStyle={{
                        background: '#1F2937',
                        border: '1px solid #374151',
                        borderRadius: '0.5rem',
                    }}
                    cursor={{ fill: 'rgba(255, 255, 255, 0.1)' }}
                />
                <Legend />
                <Bar dataKey="findings" fill="#3B82F6" />
            </BarChart>
        </ResponsiveContainer>
    );
};