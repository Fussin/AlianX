
import React from 'react';
import { Card } from './ui/Card';

interface StatCardProps {
    title: string;
    value: string | number;
}

export const StatCard: React.FC<StatCardProps> = ({ title, value }) => {
    return (
        <Card>
            <h4 className="text-sm font-medium text-gray-300">{title}</h4>
            <p className="text-3xl font-bold text-white mt-1">{value}</p>
        </Card>
    );
};