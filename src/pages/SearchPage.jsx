/* eslint-disable no-unused-vars */
import { useEffect, useState, lazy, Suspense } from "react";
import { useSearchParams } from "react-router-dom";
import AnimeSection from "../compnents/home/AnimeSection";
import { fetchAnimes } from "../lib/animeControllers";

const AnimeCard = lazy(() => import("../compnents/home/AnimeCard"));

const SearchPage = () => {
    const [searchParams, ] = useSearchParams();

    const [animes, setAnimes] = useState(null);
    const title = searchParams.get("title")

    useEffect(() => {
        (async () => {
            const data = await fetchAnimes(searchParams.get("title"));
            setAnimes(data);
        })()
        return () => {
            setAnimes(null)
        }
    }, [searchParams]);

    if (!animes) return null;
    return (
        <AnimeSection heading={`Results of ${title}`}>
            {animes.length ? animes.map((anime) => (
                <Suspense key={anime._id} >
                    <AnimeCard anime={anime} />
                </Suspense>
            )) : <h1>No match found for {title}</h1>}
        </AnimeSection>
    );
}

export default SearchPage;