import axios from "axios";
import { toast } from "react-hot-toast";
import config from "./config";

export const fetchAnimes = async (title) => {
    try {
        const url = new URL(`${import.meta.env.VITE_SERVER_URL}/api/anime`);
        if (title) {
            url.searchParams.set('title', title)
        }

        const res = await axios.get(url.toString(), config);
        return res.data;

    } catch (error) {
        console.log("fethAnimes error", error);
        return null;
    }
}

export const fetchAnime = async (id) => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/anime/${id}`, config);
        return res.data;
    } catch (error) {
        console.log("Fetch Anime error", error);
        return null;
    }
}

export const fetchReviews = async (id) => {

    try {
        const url = new URL(`${import.meta.env.VITE_SERVER_URL}/api/review`);
        if (id) {
            url.searchParams.set('anime', id);
        }

        const res = await axios.get(url.toString(), config);
        return res.data;
    } catch (error) {
        console.log("Fetch review error", error);
        return null;
    }
}

export const addReview = async (review) => {
    try {
        const res = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/review`, { user: review.user, content: review.content, anime: review.anime }, config);
        toast.success("Review is added");
        return res.data;
    } catch (error) {
        console.log("add review error", error);
        return null;
    }

}