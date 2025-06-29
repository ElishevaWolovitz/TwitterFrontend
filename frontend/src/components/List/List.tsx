import type { ListProps } from "./types";
import { map } from "lodash/fp";
import Card from '../Card';
import { Styles } from './styles';


const List = <T extends object>({items, printItem, editItem, deleteItem, ModalChildrenComp}: ListProps<T>) => {
    const classes = Styles();
    const createListItems = (item: T) => {
        return (
            <li className={classes.listItem}>
                <Card
                    post={item}
                    printItem={printItem}
                    editItem={editItem}
                    deleteItem={deleteItem}
                    ModalChildrenComp={ModalChildrenComp}
                />
            </li>
        )
    }

    const listItemsJSX = map(createListItems)(items)
    return (
        <div className={classes.feed}>
            <ul className={classes.list}>
                {listItemsJSX}
            </ul>
        </div>
    )
}

export { List }
