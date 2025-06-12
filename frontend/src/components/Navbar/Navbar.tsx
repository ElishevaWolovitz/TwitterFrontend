import { map } from "lodash/fp";
import { createUseStyles } from 'react-jss';
import { Styles } from './styles';
import NavListOption from "./NavListOption";
import BackButton from "../Button/BackButton";
import type { NavLinkType } from './types'
import { navItems } from "./const";

const Navbar = () => {
    const useStyles = createUseStyles(Styles);
    const classes = useStyles();
    const nameActiveLink = ({isActive}:{isActive: boolean}) => {
        return `${classes.link} ${isActive ? classes.active : ""}`;
    }
    const handleMapNavItems = (navItem: NavLinkType) => <NavListOption to={navItem.to} label={navItem.label} nameActiveLink={nameActiveLink}/>;
    return (
    <nav className={classes.nav}>
        <ul className={classes.ul}>
            <li><BackButton /></li>
            {map(handleMapNavItems)(navItems)}
        </ul>
    </nav>
    );
};

export { Navbar }; 