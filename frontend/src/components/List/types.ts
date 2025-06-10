import type { ReactNode } from "react";

export type ListProps<T> = {
  items: Array<T & { _id: string }>;
  loading: boolean;
  printItem: (item: T) => ReactNode;
  editItem?: (item: T) => void;
  deleteItem?: (item: T) => void;
  ModalChildrenComp?: React.ComponentType<T & { onClose: () => void } & { editItem: (item: T) => void }>;
};
