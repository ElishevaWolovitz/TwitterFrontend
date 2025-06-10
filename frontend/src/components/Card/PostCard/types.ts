import type { ReactNode } from 'react';

export type PostCardProps<T> = {
    post: T;
    printItem: (item: T) => ReactNode;
    editItem?: (item: T) => void;
    deleteItem?: (item: T) => void;
    ModalChildrenComp?: React.ComponentType<T & { onClose: () => void } & { editItem: (item: T) => void }>;
}
