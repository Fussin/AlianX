
import React, { useState } from 'react';
import { Scan, ScanPolicy } from '../types';
import { ScansTable } from './ScansTable';
import { NewScanModal } from './NewScanModal';
import { Button } from './ui/Button';
import { PlusIcon } from './Icons';
import { Card } from './ui/Card';

interface ScansViewProps {
    scans: Scan[];
    onAddScan: (target: string, policy: ScanPolicy) => void;
}

export const ScansView: React.FC<ScansViewProps> = ({ scans, onAddScan }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold">Scans</h2>
                <Button onClick={() => setIsModalOpen(true)}>
                    <PlusIcon className="mr-2 h-5 w-5" />
                    New Scan
                </Button>
            </div>
            <Card>
                <ScansTable scans={scans} />
            </Card>
            <NewScanModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAddScan={onAddScan}
            />
        </div>
    );
};