import { Outlet, useParams } from "react-router-dom";
import { Authors } from "../../../db";
import LinkListItem from "../../../components/LinkListItem";

function Book() {
	const { authorId, bookId } = useParams();

	const foundAuthor = Authors.find(author => author.urlValue === authorId);
	const foundBook = foundAuthor?.books.find(book => book.urlValue === bookId);

	return (
		<>
			<h2>{foundBook?.title}</h2>
			<ul>
				<LinkListItem link={"chapters"} text="Chapters" />
				<LinkListItem link={"characters"} text="Characters" />
			</ul>
			<Outlet />
		</>
	);
}

export default Book;
