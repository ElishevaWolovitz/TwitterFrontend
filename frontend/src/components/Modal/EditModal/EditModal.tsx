import type { EditModalProps } from "./types";

const EditModal = <T extends object>({openModal, setOpenModal, editItem, children: ChildComponent, itemToEdit}: EditModalProps<T>) => {
    return (
        <>
            {openModal && (
                <div>
                    <ChildComponent {...itemToEdit} onClose={()=> setOpenModal(false)} editItem={editItem}/>
                </div>
            )}
        </>
    )
}

export { EditModal }