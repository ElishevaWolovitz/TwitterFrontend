import { createUseStyles } from 'react-jss';
import { Styles } from './styles';
import type { CreateNewButtonProps } from "./types"

const useStyles = createUseStyles(Styles);

const CreateNewButton =({onClick} :CreateNewButtonProps) => {
    const classes = useStyles();
    return (
        <button type="button" className={classes.button} onClick={() => onClick()}>Create New</button>
    )
}

export { CreateNewButton }