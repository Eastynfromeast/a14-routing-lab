import { Link } from "react-router-dom";

interface ILinkProps {
	link: string;
	text: string;
	state?: {
		authorId: string;
		bookId: string;
	};
}

function LinkListItem({ link, text, state }: ILinkProps) {
	return (
		<li>
			<Link to={link}>{text}</Link>
		</li>
	);
}

export default LinkListItem;
