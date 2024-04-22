import { Link } from 'react-router-dom';

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

    return (
        <Link to={link}>
            {icon}
            <p>{text}</p>
        </Link>
    );
}
