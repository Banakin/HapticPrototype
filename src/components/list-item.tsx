import '@/styles/list-item.scss';

type ListItemProps = {
    label: string;
    children?: React.ReactNode;
};

function ListItem(props: ListItemProps) {
    const { label, children } = props;

    return (
        <div className="listitem">
            <p className="listitemlabel">{label}</p>
            <div className="listitemcontent">{children}</div>
        </div>
    );
}

export default ListItem;
