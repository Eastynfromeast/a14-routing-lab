import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Header from "../components/Header";

function Error() {
	const error = useRouteError();
	return (
		<>
			<Header />
			{isRouteErrorResponse(error) ? (
				<div>
					<h1>
						{error?.status} {error?.statusText}
					</h1>
					<hr />
					<h2>Oops!</h2>
					<p>Sorry, an unexpected error has occurred. Please press any button above and try again.</p>
				</div>
			) : (
				<div>
					<h2>Oops!</h2>
				</div>
			)}
		</>
	);
}

export default Error;
