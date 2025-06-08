import type { EditModalProps } from "./types";

const EditModal = ({openModal, setOpenModal, children}: EditModalProps) => {
    return (
        <>
            {openModal && (
                <div>
                    <h2>Edit Item</h2>
                    {children}
                    <button type="button" onClick={() => setOpenModal(false)}>Cancel</button>
                </div>
            )}
        </>
    )
}

export { EditModal }