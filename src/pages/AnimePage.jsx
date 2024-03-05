import { useContext, useEffect, useState, lazy, Suspense } from "react";
import { AnimeContext } from "../providers/AnimeProvider";
import { useParams } from "react-router-dom"
import AnimeIntro from "../compnents/AnimeIntro";
const ReviewSection = lazy(() => import("../compnents/ReviewSection"));

const SongPage = () => {
    const [anime, setAnime] = useState(null);
    const [reviews, setReviews] = useState(null);
    const { animeId } = useParams();
    const { fetchAnime, fetchReviews } = useContext(AnimeContext);

    useEffect(() => {
        (async () => {
            const animeData = await fetchAnime(animeId);
            setAnime(animeData);
            const reviewsData = await fetchReviews(animeId);
            setReviews(reviewsData);
        })()
    }, [animeId, fetchAnime, fetchReviews]);

    if (!anime) return
    return (
        <>
            <AnimeIntro anime={anime} />
            <Suspense>
                <ReviewSection reviews={reviews} />
            </Suspense>
        </>
    );
}

export default SongPage;