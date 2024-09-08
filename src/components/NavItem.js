function NavItem(props) {
    return (
        <li class="nav-item">
            <a class="nav-link" href={props.link}>{props.name}</a>
        </li>
    );
}

export default NavItem;