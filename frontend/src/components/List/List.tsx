import type { ListProps } from "./types";
import { map } from "lodash/fp";
import Card from '../Card';
import Loading from '../Loading';



const List = <T extends object>({items, loading, printItem, editItem, deleteItem, ModalChildrenComp}: ListProps<T>) => {
    const handleMap = (item: T) => {
        return (
            <>
                {loading ? (
                    <Loading count={1} /> 
                ) : ( 
                    <Card
                        post={item}
                        printItem={printItem}
                        editItem={editItem}
                        deleteItem={deleteItem}
                        ModalChildrenComp={ModalChildrenComp}
                    />
                )}
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
