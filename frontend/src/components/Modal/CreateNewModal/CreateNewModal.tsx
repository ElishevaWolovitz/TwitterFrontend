import type { CreateNewModalProps } from "./types"

const CreateNewModal =<T extends object>({setOpenModal, createNewItem, children: ChildComponent}: CreateNewModalProps<T>) => {
    return (
        <>
            <div>
                <ChildComponent {...({} as T)}
                    onClose={()=> setOpenModal(false)} 
                    createNewItem={createNewItem}/>
                <button type="button" onClick={() => setOpenModal(false)}>Cancel</button>
            </div>
        </>
    )
}

export { CreateNewModal }