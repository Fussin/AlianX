
export enum ScanStatus {
  PENDING = "PENDING",
  DISCOVERING_ASSETS = "DISCOVERING ASSETS",
  ANALYZING = "ANALYZING",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
}

export enum ScanPolicy {
  BOUNTY = "Bounty",
  RED_TEAM = "Red Team",
  COMPLIANCE = "Compliance",
}

export interface Scan {
  id: string;
  target: string;
  policy: ScanPolicy;
  status: ScanStatus;
  createdAt: string;
  findings: number;
}