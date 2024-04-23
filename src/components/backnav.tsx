import { useNavigate } from 'react-router-dom';

import '@/styles/navbar.scss';

// Navbar
// type NavBackProps = { children: React.ReactNode };

function NavBack() {
    const navigate = useNavigate();
    // const { children } = props;

    return <button onClick={() => navigate(-1)}>Back</button>;
}

export default NavBack;
