import { createUseStyles } from 'react-jss';
import { Styles } from './styles';
import type { EditButtonProps } from "./types";

const useStyles = createUseStyles(Styles);

const EditButton = ({ onClick }: EditButtonProps) => {
  const classes = useStyles();
  return (
    <button type="button" className={classes.button} onClick={onClick}>
      Edit
    </button>
  )
};

export { EditButton };
