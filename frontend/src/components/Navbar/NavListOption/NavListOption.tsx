import type { NavLinkType } from '../types';
import { NavLink } from "react-router-dom";
import { nameActiveLink } from '../const';

const NavListOption = (navItem: NavLinkType) => {
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

export { NavListOption}