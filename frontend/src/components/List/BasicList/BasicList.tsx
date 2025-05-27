import type { BasicListProps } from "./types";
import { map } from "lodash/fp";



const BasicList = <T,>({items, printItems}: BasicListProps<T>) => {
    const createListItem = (item: T) => {
        return <li>{printItems(item)}</li>
    }
    return (
        <>
        <ul>
            {map(createListItem)(items)}
        </ul>
        </>
    )
}

export { BasicList }
