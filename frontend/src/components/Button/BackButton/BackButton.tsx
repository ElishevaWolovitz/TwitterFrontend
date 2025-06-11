import { classes, navigate } from './consts';



const BackButton = () => {
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