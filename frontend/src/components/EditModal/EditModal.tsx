import type { EditModalProps } from "./types";
import { partial } from 'lodash/fp';

const EditModal = <T extends object>({openModal, setOpenModal, editItem, children: ChildComponent, itemToEdit}: EditModalProps<T>) => {
    return (
        <>
            {openModal && (
                <div>
                    <ChildComponent {...itemToEdit} 
                        onClose={partial(setOpenModal, [false])} 
                        editItem={editItem}/>
                </div>
            )}
        </>
    )
}

export { EditModal }