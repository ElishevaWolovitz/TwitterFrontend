import type { ListProps } from "./types";
import { map } from "lodash/fp";
import { useState } from "react";
import EditModal from '../../components/EditModal';



const List = <T extends object>({items, printItem, editItem, deleteItem, editModalChildren}: ListProps<T>) => {
    const [openEditModal, setOpenEditModal] = useState(false);
    const [itemToEdit, setItemToEdit] = useState<T | null>(null);

    const handleEditClick = (item: T) => {
        setItemToEdit(item);
        setOpenEditModal(true);
    };

    const createListItem = (item: T & { _id: string }) => {
        return <li key={item._id ?? JSON.stringify(item)}>
                    {printItem(item)}
                    {editItem && (<button type="button" onClick={() => handleEditClick(item)}>Edit</button>)}
                    {deleteItem && (<button type="button" onClick={() => deleteItem(item)}>Delete</button>)}
                </li>
    }
    return (
        <>
            <ul>
                {map(createListItem)(items)}
            </ul>
            {openEditModal && itemToEdit && editModalChildren && editItem && (
                <EditModal 
                    openModal={openEditModal} 
                    setOpenModal={setOpenEditModal} 
                    editItem={editItem}
                    children={editModalChildren} 
                    itemToEdit={itemToEdit}
                />
            )}
        </>
    )
}

export { List }
