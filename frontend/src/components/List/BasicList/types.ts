export type BasicListProps<T> = {
  items: T[];
  printItem: (item: T, index: number) => React.ReactNode;
};
