import { useEffect, useState } from "react";
import Intro from "../compnents/home/Intro";
import AnimeSection from "../compnents/home/AnimeSection";
import AnimeCard from "../compnents/home/AnimeCard";
import { fetchAnimes } from "../lib/animeControllers";


const HomePage = () => {
    const [animes, setAnimes] = useState()

    useEffect(() => {
        (async () => {
            const data = await fetchAnimes();
            setAnimes(data);
        })()
    }, []);

    return (
        <>
            <Intro />
            <AnimeSection >
                {
                    animes?.map((anime) => (
                        <AnimeCard key={anime._id} anime={anime} />
                    ))
                }
            </AnimeSection>
        </>
    );
}

export default HomePage;