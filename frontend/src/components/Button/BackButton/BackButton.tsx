import { useNavigate } from 'react-router-dom';
import { createUseStyles } from "react-jss";
import { Styles } from "./styles";

const useStyles = createUseStyles(Styles);

const BackButton = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1); 
    };
    return (
        <button className={classes.button} type="button" onClick={handleClick}>
            &#8592;
        </button>
    );
};

export { BackButton };