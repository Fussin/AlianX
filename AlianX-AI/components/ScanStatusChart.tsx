
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Scan, ScanStatus } from '../types';

interface ScanStatusChartProps {
    scans: Scan[];
}

const COLORS = {
    [ScanStatus.COMPLETED]: '#22C55E',
    [ScanStatus.ANALYZING]: '#3B82F6',
    [ScanStatus.DISCOVERING_ASSETS]: '#06B6D4',
    [ScanStatus.PENDING]: '#EAB308',
    [ScanStatus.FAILED]: '#EF4444',
};

export const ScanStatusChart: React.FC<ScanStatusChartProps> = ({ scans }) => {
    const data = Object.values(ScanStatus).map(status => ({
        name: status,
        value: scans.filter(scan => scan.status === status).length,
    })).filter(item => item.value > 0);

    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Tooltip
                    contentStyle={{
                        background: '#1F2937',
                        border: '1px solid #374151',
                        borderRadius: '0.5rem',
                    }}
                    cursor={{ fill: 'rgba(255, 255, 255, 0.1)' }}
                />
                <Legend iconSize={10} />
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    stroke="#374151"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[entry.name as ScanStatus]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
};