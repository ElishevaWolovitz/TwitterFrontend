export type ListProps<T> = {
  items: T[];
  printItem: (item: T) => string;
  editItem?: (item: T) => void;
  deleteItem?: (item: T) => void;
};
