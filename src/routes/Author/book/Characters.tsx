import { useParams } from "react-router-dom";
import { Authors } from "../../../db";
import ListItem from "../../../components/ListItem";

function Characters() {
	const { authorId, bookId } = useParams();

	const foundAuthor = Authors.find(author => author.urlValue === authorId);
	const foundBook = foundAuthor?.books.find(book => book.urlValue === bookId);
	return (
		<>
			<h3>Characters</h3>
			<ul>
				{foundBook?.characters.map(character => (
					<ListItem key={`character${character.id}`} text={character.name} />
				))}
			</ul>
		</>
	);
}

export default Characters;
