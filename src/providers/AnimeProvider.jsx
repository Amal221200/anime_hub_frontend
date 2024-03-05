/* eslint-disable react/prop-types */
import { createContext, useCallback } from "react"
import { useNavigate } from "react-router-dom";
import ApiFetcher from "../lib/ApiFetcher";

export const AnimeContext = createContext();

export default function AnimeProvider({ children }) {
    const navigate = useNavigate();

    const fetchReviews = useCallback(async (id) => {
        const url = new URL(`/api/review`, import.meta.env.VITE_SERVER_URL);
        if (id) {
            url.searchParams.set('anime', id);
        }
        const res = await ApiFetcher.get(url.pathname);
        return res.data;
    }, [])

    const fetchAnimes = useCallback(async (title) => {
        const url = new URL(`/api/anime`, import.meta.env.VITE_SERVER_URL);
        if (title) {
            url.searchParams.set('title', title)
        }
        const res = await ApiFetcher.get(url.pathname + url.search);

        return res.data;
    }, [])

    const fetchAnime = useCallback(async (id) => {
        const res = await ApiFetcher.get(`/api/anime/${id}`);

        return res.data;
    }, [])

    const addReview = useCallback(async (review) => {
        const res = await ApiFetcher.post(`/api/review`, { user: review.user, content: review.content, anime: review.anime });

        if (res.status === 401) {
            return navigate("/login");
        }

    }, [navigate])

    return (
        <AnimeContext.Provider value={{ fetchAnimes, fetchAnime, fetchReviews, addReview }}>
            {children}
        </AnimeContext.Provider>
    )
}