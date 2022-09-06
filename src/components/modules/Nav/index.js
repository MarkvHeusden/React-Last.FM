import { Link, useMatch, useResolvedPath  } from "react-router-dom"
import { NavBar, NavItem, NavLogo, NavLabel } from "./styled"

const Nav = () => {
    return (
        <NavBar>
            <ul>
                <NavLogo>
                    <Link to="/">
                        <img src="/vectors/logo.svg" alt="Label A Logo" />
                    </Link>
                </NavLogo>
                <NavLink to="/">
                    <span className="material-symbols-outlined nav-icon">search</span>
                    <NavLabel>Artiesten zoeken</NavLabel>
                </NavLink>
                <NavLink to="/trending">
                    <span className="material-symbols-outlined nav-icon">local_fire_department</span>
                    <NavLabel>Trending</NavLabel>
                </NavLink>
                <NavLink to="/profile">
                    <span className="material-symbols-outlined nav-icon">account_circle</span>
                    <NavLabel>Mijn profiel</NavLabel>
                </NavLink>
            </ul>
        </NavBar>
    )
}

const NavLink = ({ to, children, ...props }) => {
    const resolvedPath = useResolvedPath(to)
    const active = useMatch({ path: resolvedPath.pathname })
  
    return (
      <NavItem active={active}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </NavItem>
    )
  }

export default Nav
