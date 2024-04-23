import { Link } from 'react-router-dom';

import '@/styles/button.scss';

type ButtonProps = {
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    to?: string;
    type?: 'button' | 'submit' | 'reset' | undefined;
};

function Button(props: ButtonProps) {
    const { children, onClick, to, type } = props;

    if (onClick && to) throw new Error('Cannot pass both onClick and to properties at the same time.');

    if (to)
        return (
            <Link className="button" to={to}>
                {children}
            </Link>
        );
    else
        return (
            <button className="button" onClick={onClick} type={type}>
                {children}
            </button>
        );
}

export default Button;
