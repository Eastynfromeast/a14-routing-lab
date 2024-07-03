import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./routes/Home";
import About from "./routes/About";
import Error from "./routes/Error";
import Author from "./routes/Author";
import Book from "./routes/book/Book";
import Chapters from "./routes/book/Chapters";
import Characters from "./routes/book/Characters";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <Error />,
		children: [
			{
				path: "",
				element: <Home />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "/author/:authorId",
				element: <Author />,
				children: [
					{
						path: ":bookId",
						element: <Book />,
						children: [
							{
								path: "chapters",
								element: <Chapters />,
							},
							{
								path: "characters",
								element: <Characters />,
							},
						],
					},
				],
			},
		],
	},
]);

export default router;
