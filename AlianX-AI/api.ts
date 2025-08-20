import axios from 'axios';
import { Scan, ScanPolicy } from './types';

const API_BASE_URL = 'http://127.0.0.1:8888/api';

export const getScans = async (): Promise<Scan[]> => {
    const response = await axios.get(`${API_BASE_URL}/scans`);
    return response.data;
};

export const createScan = async (target: string, policy: ScanPolicy): Promise<Scan> => {
    const response = await axios.post(`${API_BASE_URL}/scans`, { target, policy });
    return response.data;
};
