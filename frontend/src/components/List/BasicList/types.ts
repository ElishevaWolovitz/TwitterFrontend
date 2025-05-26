export type BasicListProps<T> = {
  items: T[];
  printItems: (item: T, index: number) => React.ReactNode;
};
