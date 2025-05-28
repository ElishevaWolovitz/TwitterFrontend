import { useState } from "react"; 
import { map } from "lodash/fp";
import type { SearchBarProps } from "./types";

const SearchBar =<T,>({items, filterItems, printItem}: SearchBarProps<T>) => {
    const [query, setQuery] = useState('');
    //Q: is it okay for me to run filterItems here with query before an input has been inputted? because it is going to be rerended? 
    const filteredItems = filterItems(items, query); 
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search tweets..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <ul>
                {map(printItem)(filteredItems)}
            </ul>
        </div>
    )
}

export { SearchBar }
