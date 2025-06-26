import { partial } from "lodash/fp"
import type { CreateNewModalProps } from "./types"

const CreateNewModal =<T extends object>({
    setOpenModal, createNewItem, children: ChildComponent}: CreateNewModalProps<T>) => {
        return (
            <div>
                <ChildComponent {...({} as T)}
                    onClose={partial(setOpenModal, [false])} 
                    createNewItem={createNewItem}/>
            </div>
        )
}

export { CreateNewModal }