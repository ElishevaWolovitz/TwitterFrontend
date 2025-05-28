export type SearchBarProps<T> = {
    items: T[];
    filterItems: (items: T[], query: string) => T[];
    printItem: (item: T) => React.ReactNode;
}