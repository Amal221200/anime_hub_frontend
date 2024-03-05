/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState, lazy, Suspense } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimeContext } from "../providers/AnimeProvider";
import AnimeSection from "../compnents/AnimeSection";

const AnimeCard = lazy(() => import("../compnents/AnimeCard"));

const SearchPage = () => {
    const { fetchAnimes } = useContext(AnimeContext);
    const [searchParams, setSearchParams] = useSearchParams();

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
    }, [fetchAnimes, searchParams]);

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