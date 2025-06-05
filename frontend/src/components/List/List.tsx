import type { ListProps } from "./types";
import { map } from "lodash/fp";



const List = <T,>({items, printItem, editItem, deleteItem}: ListProps<T>) => {
    const createListItem = (item: T & { _id: string }) => {
        return <li key={item._id ?? JSON.stringify(item)}>
                    {printItem(item)}
                    {editItem && (<button type="button" onClick={() => editItem(item)}>Edit</button>)}
                    {deleteItem && (<button type="button" onClick={() => deleteItem(item)}>Delete</button>)}
                </li>
    }
    return (
        <>
        <ul>
            {map(createListItem)(items)}
        </ul>
        </>
    )
}

export { List }
