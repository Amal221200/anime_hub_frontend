import axios from "axios";
import { toast } from "react-hot-toast";
import config from "./config";

export const fetchAnimes = async (title) => {
    const url = new URL(`${import.meta.env.VITE_SERVER_URL}/api/anime`);
    if (title) {
        url.searchParams.set('title', title)
    }

    const res = await axios.get(url.toString(), config);
    return res.data;
}

export const fetchAnime = async (id) => {
    const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/anime/${id}`, config);
    return res.data;
}

export const fetchReviews = async (id) => {
    const url = new URL(`${import.meta.env.VITE_SERVER_URL}/api/review`);
    if (id) {
        url.searchParams.set('anime', id);
    }
    
    const res = await axios.get(url.toString(), config);
    return res.data;
}

export const addReview = async (review) => {
    const res = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/review`, { user: review.user, content: review.content, anime: review.anime }, config);

    toast.success("Review is added");
    return res.data;

}