import { useContext, useEffect, useState } from "react";
import Intro from "../compnents/Intro";
import AnimeSection from "../compnents/AnimeSection";
import { AuthContext } from "../providers/AuthProvider";
import AnimeCard from "../compnents/AnimeCard";
import { fetchAnimes } from "../lib/animeControllers";


const HomePage = () => {
    const [animes, setAnimes] = useState()
    const { user } = useContext(AuthContext);

    useEffect(() => {
        (async () => {
            const data = await fetchAnimes();
            setAnimes(data);
        })()
    }, [user]);

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