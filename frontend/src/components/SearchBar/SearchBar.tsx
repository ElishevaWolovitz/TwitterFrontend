import { useState } from "react"; 
import type { SearchBarProps } from "./types";
import List from '../List';
import { Styles } from './styles';



const SearchBar =<T extends object>({items, filterItems, printItem, editItem, deleteItem, ModalChildrenComp}: SearchBarProps<T>) => {
    const [query, setQuery] = useState('');
    const classes = Styles(); 
    //Q: is it okay for me to run filterItems here with query before an input has been inputted? because it is going to be rerended? 
    const filteredItems = filterItems(items, query); 
    return (
        <>
            <div className={classes.searchBarContainer}>
                <span className={classes.icon}>🔍</span>
                <input
                    className={classes.input}
                    type="text"
                    placeholder="Search kib names..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
            <List 
                items={filteredItems}
                printItem={printItem}
                editItem={editItem}
                deleteItem={deleteItem}
                ModalChildrenComp={ModalChildrenComp}
            />
        </>
    )
}

export { SearchBar }
