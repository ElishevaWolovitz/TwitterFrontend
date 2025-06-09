export type EditModalProps<T> = {
    openModal: boolean;
    setOpenModal: (open: boolean) => void;
    editItem: (item: T) => void;
    children: React.ComponentType<T>;
    itemToEdit:T;
}