import type { EditModalProps } from "./types";

const EditModal = <T extends object>({openModal, setOpenModal, children: ChildComponent, itemToEdit}: EditModalProps<T>) => {
    const onSubmit = (data: T) => {
            console.log("Form submitted:", data);
        };
    return (
        <>
            {openModal && (
                <div>
                    <form onSubmit={(e) => { e.preventDefault(); onSubmit(itemToEdit); }}>
                        <ChildComponent {...itemToEdit} />
                        <button type="submit">Submit</button>
                    </form>
                    <button type="button" onClick={() => setOpenModal(false)}>Cancel</button>
                </div>
            )}
        </>
    )
}

export { EditModal }