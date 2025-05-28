import type { ListProps } from "./types";
import { map } from "lodash/fp";



const List = <T,>({items, printItems, onEdit, onDelete}: ListProps<T>) => {
    const createListItem = (item: T) => {
        return <li>
                    {printItems(item)}
                    {onEdit && (<button type="button" onClick={() => onEdit(item)}>Edit</button>)}
                    {onDelete && (<button type="button" onClick={() => onDelete(item)}>Delete</button>)}
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
