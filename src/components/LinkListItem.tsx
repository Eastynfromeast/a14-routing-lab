import { Link } from "react-router-dom";

interface ILinkProps {
	link: string;
	text: string;
}

function LinkListItem({ link, text }: ILinkProps) {
	return (
		<li>
			<Link to={link}>{text}</Link>
		</li>
	);
}

export default LinkListItem;
