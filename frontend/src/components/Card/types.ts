import type { ReactNode } from 'react';

export type CardProps<T> = {
    post: T;
    printItem: (item: T) => ReactNode;
    editItem?: (item: T) => void;
    deleteItem?: (item: T) => void;
    EditItemModal?: React.ComponentType<T & { onClose: () => void } & { editItem: (item: T) => void }>;
}
