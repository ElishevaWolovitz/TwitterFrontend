export type CreateNewModalProps<T> = {
    setOpenModal: (open: boolean) => void;
    createNewItem: (item: T) => void;
    children: React.ComponentType<T & { onClose: () => void } & { createNewItem: (item: T) => void }>;
}