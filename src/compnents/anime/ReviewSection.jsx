/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import SectionLayout from "../../layout/SectionLayout";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { addReview, fetchReviews } from "../../lib/animeControllers";
import Reviews from "./reviews/Reviews";
import ReviewForm from "./reviews/ReviewForm";


const ReviewSection = ({ animeId }) => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        if (!user) {
            return navigate("/sign-in")
        }
        e.preventDefault();
        const formData = new FormData(e.target);
        addReview({ content: formData.get("review"), anime: animeId }).then((res) => {
            setReviews((current) => [...current, res]);
            e.target.reset();
        });
    }

    useEffect(() => {
        (async () => {
            const reviewsData = await fetchReviews(animeId);
            setReviews(reviewsData);
        })()
    }, [animeId])

    if (!reviews) {
        return null;
    }

    return (
        <section className="my-5">
            <SectionLayout>
                <h2 className="text-3xl font-bold">Reviews</h2>
                <ReviewForm handleSubmit={handleSubmit} />
                <Reviews reviews={reviews} />
            </SectionLayout>
        </section>
    );
}

export default ReviewSection;