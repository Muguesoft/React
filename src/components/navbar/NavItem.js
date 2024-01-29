const NavItem = ({hreftxt,description}) => {
    return (
        <li className="nav-item">
              <a className="nav-link p-3 item-menu-a" href={hreftxt}>{description}</a>
        </li>
    )
};

export default NavItem;