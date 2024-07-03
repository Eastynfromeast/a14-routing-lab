interface IListProps {
	text: string;
}

function ListItem({ text }: IListProps) {
	return <li>{text}</li>;
}

export default ListItem;
