export type SearchBarProps<T> = {
    items: T[];
    filterItems: (items: T[], query: string) => T[];
    printItem: (item: T) => string;
    editItem?: (item: T) => void;
    deleteItem?: (item: T) => void;
}