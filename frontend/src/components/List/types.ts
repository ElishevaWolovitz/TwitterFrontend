export type ListProps<T> = {
  items: T[];
  printItems: (item: T) => string;
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
};
