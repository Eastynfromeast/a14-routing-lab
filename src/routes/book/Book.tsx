import { Link, Outlet, useParams } from "react-router-dom";
import { Authors } from "../../db";

function Book() {
	const { authorId, bookId } = useParams();

	const foundAuthor = Authors.find(author => author.urlValue === authorId);
	const foundBook = foundAuthor?.books.find(book => book.urlValue === bookId);

	return (
		<>
			<h2>{foundBook?.title}</h2>
			<ul>
				<li>
					<Link to={"chapters"} state={{ authorId, bookId }}>
						Chapters
					</Link>
				</li>
				<li>
					<Link to={"characters"} state={{ authorId: authorId, bookId: bookId }}>
						Characters
					</Link>
				</li>
			</ul>
			<Outlet />
		</>
	);
}

export default Book;
