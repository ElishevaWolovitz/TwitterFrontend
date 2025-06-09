import { useState } from "react"; 
import type { SearchBarProps } from "./types";
import List from '../List';

const SearchBar =<T extends object>({items, filterItems, printItem, editItem, deleteItem, editModalChildren}: SearchBarProps<T>) => {
    const [query, setQuery] = useState('');
    //Q: is it okay for me to run filterItems here with query before an input has been inputted? because it is going to be rerended? 
    const filteredItems = filterItems(items, query); 
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search kib names..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <List 
                items={filteredItems}
                printItem={printItem}
                editItem={editItem}
                deleteItem={deleteItem}
                editModalChildren={editModalChildren}
            />
        </div>
    )
}

export { SearchBar }
