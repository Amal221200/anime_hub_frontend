import {  useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import AnimeIntro from "../compnents/AnimeIntro";
import ReviewSection from "../compnents/ReviewSection";
import { fetchAnime } from "../lib/animeControllers";

const AnimePage = () => {
    const [anime, setAnime] = useState(null);
    const { animeId } = useParams();

    useEffect(() => {
        (async () => {
            const animeData = await fetchAnime(animeId);
            setAnime(animeData);
        })()
    }, [animeId]);

    if (!anime) return
    return (
        <>
            <AnimeIntro anime={anime} />
            <ReviewSection animeId={animeId} />
        </>
    );
}

export default AnimePage;