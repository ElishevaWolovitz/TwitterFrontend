import { createUseStyles } from 'react-jss';
import { Styles } from './styles';

export const navItems = [
    { to: "/", label: "Home" },
    { to: "/shmoozers", label: "Shmoozers" },
    { to: "/kibs", label: "Kibs" }
];

const useStyles = createUseStyles(Styles);
export const classes = useStyles();

export const nameActiveLink = ({isActive}:{isActive: boolean}) => {
        return `${classes.link} ${isActive ? classes.active : ""}`;
    }