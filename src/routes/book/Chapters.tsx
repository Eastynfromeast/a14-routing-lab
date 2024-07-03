import { useLocation } from "react-router-dom";
import { Authors } from "../../db";

function Chapters() {
	const {
		state: { authorId, bookId },
	} = useLocation();

	const foundAuthor = Authors.find(author => author.urlValue === authorId);
	const foundBook = foundAuthor?.books.find(book => book.urlValue === bookId);

	return (
		<>
			<h3>Chapters</h3>
			<ul>
				{foundBook?.chapters.map(chapter => (
					<li key={`chapter${chapter.id}`}>{chapter.title}</li>
				))}
			</ul>
		</>
	);
}

export default Chapters;
