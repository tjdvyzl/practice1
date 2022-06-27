import { useState } from "react";
import { useEffect } from "react";
import Movie from "./Movie.js";

function App() {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	const getMovies = async () => {
		// 짧은 코드
		const json = await (
			await fetch(
				`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
		).json();
				
		// const response = await (
		// 	fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
		// );
		// const json = await response.json();

		setMovies(json.data.movies);
		setLoading(false);
	}
	useEffect(() => {
		getMovies();
	}, []);
	return (
		<div>
			{loading ? "Loading..." :
				<div>
					{movies.map((movie) => (
						<div>
							<Movie coverImage={movie.medium_cover_image} title={movie.title} summary={movie.summary} genres = {movie.genres} />
						</div>
					))}
				</div>
			}
		</div>
	);
}

export default App;