import { useParams } from "react-router-dom";
import { Authors } from "../../../db";
import ListItem from "../../../components/ListItem";

function Chapters() {
	const { authorId, bookId } = useParams();
	const foundAuthor = Authors.find(author => author.urlValue === authorId);
	const foundBook = foundAuthor?.books.find(book => book.urlValue === bookId);

	return (
		<>
			<h3>Chapters</h3>
			<ul>
				{foundBook?.chapters.map(chapter => (
					<ListItem key={`chapter${chapter.id}`} text={chapter.title} />
				))}
			</ul>
		</>
	);
}

export default Chapters;
