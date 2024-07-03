import { useState, useEffect } from "react";
import { Authors } from "../db";

import LinkListItem from "../components/LinkListItem";

interface IAuthors {
	id: number;
	name: string;
	urlValue: string;
}

function Home() {
	const [authors, setAuthors] = useState<IAuthors[]>();
	useEffect(() => {
		setAuthors(Authors);
	}, []);

	return (
		<div>
			<h1>Authors of Best Selling Novels</h1>
			<ul>
				{authors?.map(author => (
					<LinkListItem key={author.id} link={`/author/${author.urlValue}`} text={author.name} />
				))}
			</ul>
		</div>
	);
}

export default Home;
