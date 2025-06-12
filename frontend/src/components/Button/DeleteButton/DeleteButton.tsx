import type { DeleteButtonProps } from "./types";

const DeleteButton =({onClick}: DeleteButtonProps) => {
    return (
        <button type="button" onClick={onClick}>
            Delete
        </button>
    )
}

export { DeleteButton }