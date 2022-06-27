import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail({ title, coverImage, genres, summary }) {
    const { id } = useParams();
    const getMovies = async () => {
        // 짧은 코드
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
        ).json();

        console.log(json);
    }
    useEffect(() => {
        getMovies();
    }, [])
    return (
        <div>
            <h1>Detail</h1>
        </div>
    )
}

export default Detail;