export type EditModalProps<T> = {
    openModal: boolean;
    setOpenModal: (open: boolean) => void;
    children: React.ComponentType<T>;
    itemToEdit:T;
}