
import React, { useState, useCallback } from 'react';
import { ScanPolicy } from '../types';
import { Modal } from './ui/Modal';
import { Input } from './ui/Input';
import { Select } from './ui/Select';
import { Button } from './ui/Button';

interface NewScanModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAddScan: (target: string, policy: ScanPolicy) => void;
}

export const NewScanModal: React.FC<NewScanModalProps> = ({ isOpen, onClose, onAddScan }) => {
    const [target, setTarget] = useState('');
    const [policy, setPolicy] = useState<ScanPolicy>(ScanPolicy.BOUNTY);

    const handleSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        if (target.trim()) {
            onAddScan(target, policy);
            setTarget('');
            setPolicy(ScanPolicy.BOUNTY);
            onClose();
        }
    }, [target, policy, onAddScan, onClose]);

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Initiate New Scan">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="target" className="block mb-2 text-sm font-medium text-gray-300">Target</label>
                    <Input
                        id="target"
                        name="target"
                        type="text"
                        value={target}
                        onChange={(e) => setTarget(e.target.value)}
                        placeholder="e.g., api.example.com, 10.0.1.0/24"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="policy" className="block mb-2 text-sm font-medium text-gray-300">Scan Policy</label>
                    <Select
                        id="policy"
                        name="policy"
                        value={policy}
                        onChange={(e) => setPolicy(e.target.value as ScanPolicy)}
                    >
                        {Object.values(ScanPolicy).map((p) => (
                            <option key={p} value={p}>{p}</option>
                        ))}
                    </Select>
                </div>
                <div className="flex justify-end pt-4 space-x-2">
                    <Button type="button" variant="secondary" onClick={onClose}>Cancel</Button>
                    <Button type="submit">Start Scan</Button>
                </div>
            </form>
        </Modal>
    );
};