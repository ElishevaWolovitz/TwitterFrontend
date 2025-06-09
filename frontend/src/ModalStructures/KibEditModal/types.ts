import type { KibType } from '../../types/kib.types';

export type KibEditModalProp = { 
    _id?: string;
    kibName: string;
    shmoozerId: string; 
    text: string;
    media?: string;
    likes?: number;
    createdAt?: Date;
    onClose: () => void;
    editItem: (item: KibType) => void;
}
