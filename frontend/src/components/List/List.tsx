import type { ListProps } from "./types";
import { map } from "lodash/fp";
import Card from '../Card';



const List = <T extends object>({items, printItem, editItem, deleteItem, ModalChildrenComp}: ListProps<T>) => {
    const handleMap = (item: T) => {
        return (
            <>
                <Card
                    post={item}
                    printItem={printItem}
                    editItem={editItem}
                    deleteItem={deleteItem}
                    ModalChildrenComp={ModalChildrenComp}
                />
        </>)
    }
    return (
        <>
            <ul>
                {map(handleMap)(items)}
            </ul>
        </>
    )
}

export { List }
