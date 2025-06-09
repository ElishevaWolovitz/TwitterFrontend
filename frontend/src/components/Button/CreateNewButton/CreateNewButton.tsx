import type { CreateNewButtonProps } from "./types"

const CreateNewButton =({onClick} :CreateNewButtonProps) => {
    return (
        <button type="button" onClick={() => onClick()}>Create New</button>
    )
}

export { CreateNewButton }