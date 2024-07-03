import { Link, useLocation, useParams, Outlet } from "react-router-dom";
import { Authors } from "../db";

function Author() {
	const { authorId } = useParams();

	const foundAuthor = Authors.find(author => author.urlValue === authorId);
	return (
		<>
			<h1>{foundAuthor?.name}</h1>
			<ul>
				{foundAuthor?.books.map(book => (
					<li key={book.id}>
						<Link to={`/author/${authorId}/${book.urlValue}`}>{book.title}</Link>
					</li>
				))}
			</ul>
			<Outlet />
		</>
	);
}

export default Author;
