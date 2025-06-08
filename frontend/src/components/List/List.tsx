import type { ListProps } from "./types";
import { map } from "lodash/fp";
import { useState } from "react";
import EditModal from '../../components/EditModal';



const List = <T,>({items, printItem, editItem, deleteItem}: ListProps<T>) => {
    const [openEditModal, setOpenEditModal] = useState(false);
    const createListItem = (item: T & { _id: string }) => {
        return <li key={item._id ?? JSON.stringify(item)}>
                    {printItem(item)}
                    {editItem && (<button type="button" onClick={() => setOpenEditModal(true)}>Edit</button>)}
                    {deleteItem && (<button type="button" onClick={() => deleteItem(item)}>Delete</button>)}
                </li>
    }
    return (
        <>
            <ul>
                {map(createListItem)(items)}
            </ul>
            {openEditModal && <EditModal openModal={openEditModal} setOpenModal={setOpenEditModal} />}
        </>
    )
}

export { List }
