export type KibEditModalProp = { 
    _id?: string;
    kibName: string;
    shmoozerId: string; 
    text: string;
    media?: string;
    likes?: number;
    createdAt?: Date;
    onClose: () => void;
}

export type KibType = { 
    _id?: string;
    kibName: string;
    shmoozerId: string; 
    text: string;
    media?: string;
    likes?: number;
    createdAt?: Date;
}