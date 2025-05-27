export type BasicListProps<T> = {
  items: T[];
  printItems: (item: T) => React.ReactNode;
};
