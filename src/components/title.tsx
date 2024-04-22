import '@/styles/title.scss';

type TitleProps = { children: React.ReactNode };

function Title(props: TitleProps) {
    const { children } = props;

    return <h1 className="title">{children}</h1>;
}

export default Title;
