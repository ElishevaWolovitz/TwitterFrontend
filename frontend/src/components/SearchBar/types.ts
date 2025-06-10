import type { ReactNode } from "react";

export type SearchBarProps<T> = {
    items: T[];
    filterItems: (items: T[], query: string) => Array<T & { _id: string }>;
    printItem: (item: T) => ReactNode;
    editItem?: (item: T) => void;
    deleteItem?: (item: T) => void;
    ModalChildrenComp?: React.ComponentType<T & { onClose: () => void } & { editItem: (item: T) => void }>;
}