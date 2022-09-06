import { Link, useMatch, useResolvedPath  } from "react-router-dom"

const Nav = () => {
    return (
        <nav className="nav-bar">
            <ul>
                <li className="nav-logo">
                    <Link to="/">
                        <img src="/vectors/logo.svg" alt="Label A Logo" />
                    </Link>
                </li>
                <NavLink to="/">
                    <span className="material-symbols-outlined nav-icon">search</span>
                    <span className="nav-label">Artiesten zoeken</span>
                </NavLink>
                <NavLink to="/trending">
                    <span className="material-symbols-outlined nav-icon">local_fire_department</span>
                    <span className="nav-label">Trending</span>
                </NavLink>
                <NavLink to="/profile">
                    <span className="material-symbols-outlined nav-icon">account_circle</span>
                    <span className="nav-label">Mijn profiel</span>
                </NavLink>
            </ul>
        </nav>
    )
}

const NavLink = ({ to, children, ...props }) => {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname })
  
    return (
      <li className={isActive ? "nav-item nav-item-active" : "nav-item"}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }

export default Nav
