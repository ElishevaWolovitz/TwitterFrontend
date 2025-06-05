import type { ReactNode } from "react";

export type SearchBarProps<T> = {
    items: T[];
    filterItems: (items: T[], query: string) => T[];
    printItem: (item: T) => ReactNode;
    editItem?: (item: T) => void;
    deleteItem?: (item: T) => void;
}