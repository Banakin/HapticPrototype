import '@/styles/card.scss';

type CardProps = {
    title: string;
    children?: React.ReactNode;
};

function Card(props: CardProps) {
    const { title, children } = props;

    return (
        <div className="card">
            <p className="cardtitle">{title}</p>
            {children}
        </div>
    );
}

export default Card;
