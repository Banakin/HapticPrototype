import '@/styles/title.scss';

type TitleProps = {
    children: React.ReactNode;
    small: boolean;
};

function Title(props: TitleProps) {
    const { children, small } = props;

    return <h1 className={`title ${small ? 'titlesmall' : ''}`}>{children}</h1>;
}

export default Title;
