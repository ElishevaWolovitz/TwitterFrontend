import { map } from "lodash/fp";
import { navItems } from "./const";
import { createUseStyles } from 'react-jss';
import { Styles } from './styles';
import type { NavLinkType } from './types'
import ReturnToLastPageButton from "../Button/ReturnToLastPageButton";
import NavbarOption from "./NavbarOption";

const useStyles = createUseStyles(Styles);

const Navbar = () => {
    const classes = useStyles();
    const currentURL = ({isActive}:{isActive: boolean}) => {
        return `${classes.link} ${isActive ? classes.active : ""}`;
    }
    //should nav option be a different component? was giving me problems when i tried
    const handleNavbarOptions = (navItem: NavLinkType) => {
        return (
            <NavbarOption 
                key={navItem.to}
                navItem={navItem}
                currentURL={currentURL}
            />
        )
    }
    return (
    <nav className={classes.nav}>
        <ul className={classes.ul}>
            <li><ReturnToLastPageButton /></li>
            {map(handleNavbarOptions)(navItems)}
        </ul>
    </nav>
    );
    };

export { Navbar };