import type { ReactNode } from "react";

export type ListProps<T> = {
  items: Array<T & { _id: string }>;
  printItem: (item: T) => ReactNode;
  editItem?: (item: T) => void;
  deleteItem?: (item: T) => void;
  editModalChildren?: React.ComponentType<T>;
};
