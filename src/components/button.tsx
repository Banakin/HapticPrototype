import { Link } from 'react-router-dom';

import '@/styles/button.scss';

type ButtonProps = {
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    to?: string;
    type?: 'button' | 'submit' | 'reset' | undefined;
    disabled?: boolean;
};

function Button(props: ButtonProps) {
    const { children, onClick, to, type, disabled } = props;

    if (onClick && to) throw new Error('Cannot pass both onClick and to properties at the same time.');

    if (to)
        return (
            <Link className={`button ${disabled ? 'disabled' : ''}`} to={to}>
                {children}
            </Link>
        );
    else
        return (
            <button
                className={`button ${disabled ? 'disabled' : ''}`}
                onClick={onClick}
                type={type}
                disabled={disabled}
            >
                {children}
            </button>
        );
}

export default Button;
