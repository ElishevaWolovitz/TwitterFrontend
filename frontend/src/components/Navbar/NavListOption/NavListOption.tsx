import { NavLink } from "react-router-dom";
import type { NavListOptionProps } from './types';

const NavListOption = ({to, label, nameActiveLink}: NavListOptionProps) => {
        return (
            <li key={to}>
                <NavLink
                    to={to}
                    className={nameActiveLink}
                >
                    {label}
                </NavLink> 
            </li>
        )
}

export { NavListOption}