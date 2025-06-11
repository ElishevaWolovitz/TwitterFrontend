import { useNavigate } from 'react-router-dom';
import { createUseStyles } from "react-jss";
import { Styles } from "./styles";

const useStyles = createUseStyles(Styles);
export const classes = useStyles();

export const navigate = useNavigate();