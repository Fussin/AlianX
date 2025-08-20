
import React from 'react';
import { Scan } from '../types';
import { Badge } from './ui/Badge';

interface ScansTableProps {
    scans: Scan[];
}

export const ScansTable: React.FC<ScansTableProps> = ({ scans }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left text-gray-300">
                <thead className="text-xs text-gray-100 uppercase bg-gray-700">
                    <tr>
                        <th scope="col" className="px-6 py-3">Target</th>
                        <th scope="col" className="px-6 py-3">Policy</th>
                        <th scope="col" className="px-6 py-3">Status</th>
                        <th scope="col" className="px-6 py-3">Findings</th>
                        <th scope="col" className="px-6 py-3">Created At</th>
                    </tr>
                </thead>
                <tbody>
                    {scans.map((scan) => (
                        <tr key={scan.id} className="bg-gray-800 border-b border-gray-700 hover:bg-gray-700/50">
                            <td className="px-6 py-4 font-mono text-white">{scan.target}</td>
                            <td className="px-6 py-4">{scan.policy}</td>
                            <td className="px-6 py-4"><Badge status={scan.status} /></td>
                            <td className="px-6 py-4 text-center">{scan.findings}</td>
                            <td className="px-6 py-4">{new Date(scan.createdAt).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};