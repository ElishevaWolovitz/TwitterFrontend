import { map } from "lodash/fp";
import { NavLink } from "react-router-dom";
import { navItems } from "./const";
import { createUseStyles } from 'react-jss';
import { Styles } from './styles';
import type { NavLinkType } from './types'
import BackButton from "../Button/BackButton";


const useStyles = createUseStyles(Styles);

const Navbar = () => {
    const classes = useStyles();
    const nameActiveLink = ({isActive}:{isActive: boolean}) => {
        return `${classes.link} ${isActive ? classes.active : ""}`;
    }
    //should nav option be a different component? was giving me problems when i tried
    const createNavListOption = (navItem: NavLinkType) => {
        return (
            <li key={navItem.to}>
                <NavLink
                    to={navItem.to}
                    className={nameActiveLink}
                >
                    {navItem.label}
                </NavLink> 
            </li>
        )
    }
    return (
    <nav className={classes.nav}>
        <ul className={classes.ul}>
            <li><BackButton /></li>
            {map(createNavListOption)(navItems)}
        </ul>
    </nav>
    );
    };

export { Navbar };