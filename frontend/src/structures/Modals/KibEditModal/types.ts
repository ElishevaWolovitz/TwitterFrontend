import type { KibType } from '../../../types/kib.types';

export type KibEditModalProp = KibType & { 
    onClose: () => void;
    editItem: (item: KibType) => void;
}
