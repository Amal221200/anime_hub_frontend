/* eslint-disable react/prop-types */
import { createContext, useCallback } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../lib/config";

export const AnimeContext = createContext();

export default function AnimeProvider({ children }) {
    const navigate = useNavigate();

    const fetchReviews = useCallback(async (id) => {
        const url = new URL(`${import.meta.env.VITE_SERVER_URL}/api/review`);
        if (id) {
            url.searchParams.set('anime', id);
        }
        const res = await axios.get(url.toString(), config);
        return res.data;
    }, [])

    const fetchAnimes = useCallback(async (title) => {
        const url = new URL(`${import.meta.env.VITE_SERVER_URL}/api/anime`);
        if (title) {
            url.searchParams.set('title', title)
        }
        const res = await axios.get(url.toString(), config);

        return res.data;
    }, [])

    const fetchAnime = useCallback(async (id) => {
        const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/anime/${id}`, config);

        return res.data;
    }, [])

    const addReview = useCallback(async (review) => {
        const res = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/review`, { user: review.user, content: review.content, anime: review.anime }, config);

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