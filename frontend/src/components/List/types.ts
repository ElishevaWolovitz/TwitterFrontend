import type { ReactNode } from "react";

export type ListProps<T> = {
  items: T[];
  printItem: (item: T) => ReactNode;
  editItem?: (item: T) => void;
  deleteItem?: (item: T) => void;
};
