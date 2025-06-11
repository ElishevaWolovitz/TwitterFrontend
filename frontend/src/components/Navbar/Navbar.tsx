import { map } from "lodash/fp";
import NavListOption from "./NavListOption";
import { navItems, classes } from "./const";
import type { NavLinkType } from './types'
import BackButton from "../Button/BackButton";



const Navbar = () => {
    const handleMapNavItems = (navItem: NavLinkType) => <NavListOption to={navItem.to} label={navItem.label}/>;
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