
import { Scan, ScanStatus, ScanPolicy } from './types';

// A simple UUID v4 generator to avoid external dependencies.
export const uuidv4 = (): string => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
};

export const MOCK_SCANS: Scan[] = [
  {
    id: uuidv4(),
    target: "api.example.com",
    policy: ScanPolicy.BOUNTY,
    status: ScanStatus.COMPLETED,
    createdAt: "2024-07-28T10:00:00Z",
    findings: 12,
  },
  {
    id: uuidv4(),
    target: "webapp.prod",
    policy: ScanPolicy.RED_TEAM,
    status: ScanStatus.ANALYZING,
    createdAt: "2024-07-28T11:30:00Z",
    findings: 5,
  },
  {
    id: uuidv4(),
    target: "10.0.1.0/24",
    policy: ScanPolicy.COMPLIANCE,
    status: ScanStatus.DISCOVERING_ASSETS,
    createdAt: "2024-07-29T09:00:00Z",
    findings: 0,
  },
  {
    id: uuidv4(),
    target: "internal.corp",
    policy: ScanPolicy.RED_TEAM,
    status: ScanStatus.PENDING,
    createdAt: "2024-07-29T14:15:00Z",
    findings: 0,
  },
  {
    id: uuidv4(),
    target: "staging.example.com",
    policy: ScanPolicy.BOUNTY,
    status: ScanStatus.FAILED,
    createdAt: "2024-07-27T18:00:00Z",
    findings: 0,
  },
  {
    id: uuidv4(),
    target: "db-cluster.prod",
    policy: ScanPolicy.COMPLIANCE,
    status: ScanStatus.COMPLETED,
    createdAt: "2024-07-26T12:00:00Z",
    findings: 2,
  }
];