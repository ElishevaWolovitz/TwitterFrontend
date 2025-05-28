export type ListProps<T> = {
  items: T[];
  printItems: (item: T) => React.ReactNode;
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
};
