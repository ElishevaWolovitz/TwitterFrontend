import { createUseStyles } from 'react-jss';
import { Styles } from './styles';
import type { DeleteButtonProps } from "./types";

const useStyles = createUseStyles(Styles);

const DeleteButton =({onClick}: DeleteButtonProps) => {
    const classes = useStyles();
    return (
        <button type="button" className={classes.button} onClick={onClick}>
            Delete
        </button>
    )
}

export { DeleteButton }