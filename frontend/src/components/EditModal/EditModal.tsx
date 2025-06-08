import type { EditModalProps } from "./types";

const EditModal = ({openModal, setOpenModal}: EditModalProps) => {
    return (
        <>
            {openModal && (
                <div>
                    <h2>Edit Item</h2>
                    {/* Form or content for editing goes here */}
                    <form>
                        <label htmlFor="itemName">Item Name:</label>
                        <input type="text" id="itemName" name="itemName" />
                        <button type="submit">Save</button>
                        <button type="button" onClick={() => setOpenModal(false)}>Cancel</button>
                    </form>
                </div>
            )}
        </>
    )
}

export { EditModal }