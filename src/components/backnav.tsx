import { useNavigate } from 'react-router-dom';

import '@/styles/back.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

// Navbar
// type NavBackProps = { children: React.ReactNode };

function NavBack() {
    const navigate = useNavigate();
    // const { children } = props;

    return (
        <button className="back" onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon={faChevronLeft} /> Back
        </button>
    );
}

export default NavBack;
