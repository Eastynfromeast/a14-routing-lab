import { useParams, Outlet } from "react-router-dom";
import { Authors } from "../../db";
import LinkListItem from "../../components/LinkListItem";

function Author() {
	const { authorId } = useParams();

	const foundAuthor = Authors.find(author => author.urlValue === authorId);
	return (
		<>
			<h1>{foundAuthor?.name}</h1>
			<ul>
				{foundAuthor?.books.map(book => (
					<LinkListItem key={book.id} link={`/author/${authorId}/${book.urlValue}`} text={book.title} />
				))}
			</ul>
			<Outlet />
		</>
	);
}

export default Author;
