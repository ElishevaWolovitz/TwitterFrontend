import type { DeleteButtonProps } from "./types";

const DeleteButton =({onClick}: DeleteButtonProps) => {
    return (
        <button type="button" onClick={onClick} aria-label="Delete">
            Delete
        </button>
    )
}

export { DeleteButton }