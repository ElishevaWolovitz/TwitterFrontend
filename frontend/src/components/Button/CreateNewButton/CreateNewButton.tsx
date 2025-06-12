import { Styles } from './styles';
import type { CreateNewButtonProps } from "./types"


const CreateNewButton =({onClick} :CreateNewButtonProps) => {
    const classes = Styles();
    return (
        <button type="button" className={classes.button} onClick={() => onClick()}>Create New</button>
    )
}

export { CreateNewButton }