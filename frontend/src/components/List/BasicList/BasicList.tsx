import type { BasicListProps } from "./types";

const BasicList = <T,>({items, printItems}: BasicListProps<T>) => {
  return (
    <>
    <ul>
      {items.map((item, idx) => (
        <li key={idx}>{printItems(item, idx)}</li>
      ))}
    </ul>
    </>
  )
}

export { BasicList }
