import type { CreateNewModalProps } from "./types"

const CreateNewModal =<T extends object>({openModal, setOpenModal, createNewItem, children: ChildComponent}: CreateNewModalProps<T>) => {
    return (
        <>
            {openModal && (
                <div>
                    <ChildComponent {...({} as T)}
                        onClose={()=> setOpenModal(false)} 
                        createNewItem={createNewItem}/>
                    <button type="button" onClick={() => setOpenModal(false)}>Cancel</button>
                </div>
            )}
        </>
    )
}

export { CreateNewModal }