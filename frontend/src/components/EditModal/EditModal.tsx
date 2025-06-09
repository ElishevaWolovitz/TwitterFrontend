import type { EditModalProps } from "./types";

const EditModal = <T extends object>({openModal, setOpenModal, children: ChildComponent, itemToEdit}: EditModalProps<T>) => {
    return (
        <>
            {openModal && (
                <div>
                    <ChildComponent {...itemToEdit} onClose={()=> setOpenModal(false)}/>
                    <button type="button" onClick={() => setOpenModal(false)}>Cancel</button>
                </div>
            )}
        </>
    )
}

export { EditModal }