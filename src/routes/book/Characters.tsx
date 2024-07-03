import { useLocation } from "react-router-dom";
import { Authors } from "../../db";

function Characters() {
	const {
		state: { authorId, bookId },
	} = useLocation();

	const foundAuthor = Authors.find(author => author.urlValue === authorId);
	const foundBook = foundAuthor?.books.find(book => book.urlValue === bookId);
	return (
		<>
			<h3>Characters</h3>
			<ul>
				{foundBook?.characters.map(character => (
					<li key={`character${character.id}`}>{character.name}</li>
				))}
			</ul>
		</>
	);
}

export default Characters;
