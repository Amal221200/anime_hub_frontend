import { useContext, useEffect, useState } from "react";
import { AnimeContext } from "../providers/AnimeProvider";
import { useParams } from "react-router-dom"
import AnimeIntro from "../compnents/AnimeIntro";
import ReviewSection from "../compnents/ReviewSection";

const SongPage = () => {
    const [anime, setAnime] = useState(null);
    const { animeId } = useParams();
    const { fetchAnime } = useContext(AnimeContext);

    useEffect(() => {
        (async () => {
            const animeData = await fetchAnime(animeId);
            setAnime(animeData);
        })()
    }, [animeId, fetchAnime]);

    if (!anime) return
    return (
        <>
            <AnimeIntro anime={anime} />
            <ReviewSection animeId={animeId} />
        </>
    );
}

export default SongPage;