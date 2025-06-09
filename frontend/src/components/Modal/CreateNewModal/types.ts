export type CreateNewModalProps<T> = {
    openModal: boolean;
    setOpenModal: (open: boolean) => void;
    createNewItem: (item: T) => void;
    children: React.ComponentType<T & { onClose: () => void } & { createNewItem: (item: T) => void }>;
}