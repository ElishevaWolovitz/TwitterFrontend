import { NavLink } from "react-router-dom";
import { navItems } from "./const";


const Navbar = () => {
    return (
    <nav>
        <ul>
        {navItems.map((item) => (
            <li key={item.to}>
                <NavLink to={item.to}>
                    {item.label}
                </NavLink>
            </li>
        ))}
        </ul>
    </nav>
    );
};

export { Navbar };