import { useContext, useEffect, useState } from "react";
import Intro from "../compnents/Intro";
import AnimeSection from "../compnents/AnimeSection";
import { AnimeContext } from "../providers/AnimeProvider";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import AnimeCard from "../compnents/AnimeCard";


const HomePage = () => {
    const { fetchAnimes } = useContext(AnimeContext);
    const [animes, setAnimes] = useState()
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const data = await fetchAnimes();
            setAnimes(data);
        })()
    }, [fetchAnimes, user, navigate]);

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