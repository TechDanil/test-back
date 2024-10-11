export interface IUser {
    id: number;
    full_name: string;
    role: ROLE
    efficiency: EFFICIENCY
}

export type ROLE = 'admin' | 'user' | 'developer';

export type EFFICIENCY = 'low' | 'medium' | 'high';
