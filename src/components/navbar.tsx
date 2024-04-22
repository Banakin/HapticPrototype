import { Link, useLocation } from 'react-router-dom';

import '@/styles/navbar.scss';

// Navbar
type NavbarProps = { children: React.ReactNode };

export function Navbar(props: NavbarProps) {
    const { children } = props;

    return <div className="navbar">{children}</div>;
}

// Navbar Items
type NavbarItemProps = {
    link: string;
    icon: React.ReactNode;
    text: string;
};

export function NavbarItem(props: NavbarItemProps) {
    const { link, icon, text } = props;
    const { pathname } = useLocation();

    return (
        <Link to={link} className={`item${pathname === link ? ' active' : ''}`}>
            {icon}
            <p>{text}</p>
        </Link>
    );
}
