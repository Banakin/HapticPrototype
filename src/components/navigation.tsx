import { useLocation } from 'react-router-dom';
import { Navbar, NavbarItem } from '@/components/navbar';
import BackNav from '@/components/back-nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faGear, faPenToSquare, faMedal } from '@fortawesome/free-solid-svg-icons';

function Navigation() {
    const { pathname } = useLocation();

    if (['/', '/manage', '/leaderboard', '/settings'].includes(pathname)) {
        return (
            <Navbar>
                <NavbarItem link="/" icon={<FontAwesomeIcon icon={faHouse} />} text="Home" />
                <NavbarItem link="/manage" icon={<FontAwesomeIcon icon={faPenToSquare} />} text="Manage" />
                <NavbarItem link="/leaderboard" icon={<FontAwesomeIcon icon={faMedal} />} text="Leaderboard" />
                <NavbarItem link="/settings" icon={<FontAwesomeIcon icon={faGear} />} text="Settings" />
            </Navbar>
        );
    } else {
        return <BackNav />;
    }
}

export default Navigation;
