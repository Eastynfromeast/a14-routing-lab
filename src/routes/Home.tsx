import { useState, useEffect } from "react";
import { Authors } from "../db";
import { Link } from "react-router-dom";

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
					<li key={author.id}>
						<Link to={`/author/${author.urlValue}`}>{author.name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Home;
