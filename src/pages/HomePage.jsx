import { useContext, useEffect, useState, Suspense, lazy } from "react";
import Intro from "../compnents/Intro";
import AnimeSection from "../compnents/AnimeSection";
import { AnimeContext } from "../providers/AnimeProvider";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const AnimeCard = lazy(() => import("../compnents/AnimeCard"));

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
                        <Suspense key={anime._id} >
                            <AnimeCard anime={anime} />
                        </Suspense>
                    ))
                }
            </AnimeSection>
        </>
    );
}

export default HomePage;