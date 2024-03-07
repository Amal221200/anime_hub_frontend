/* eslint-disable react/prop-types */
import { useContext, useEffect, useState, Suspense } from "react";
import SectionLayout from "../layout/SectionLayout";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { addReview, fetchReviews } from "../lib/animeControllers";

const Review = ({ review }) => {

    return (
        <article className="flex items-center gap-3">
            <div>
                <p className="leading-7 text-center text-white rounded-full w-7 h-7 bg-slate-600">{review?.user?.username[0].toUpperCase()}</p>
            </div>
            <div className="w-[90%]">
                <p>{review.content}</p>
            </div>
        </article>
    )
}

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
            setReviews((current)=>[...current, res]);
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
                <form className="flex items-center gap-2" onSubmit={handleSubmit}>
                    <textarea name="review" id="review" placeholder="Add a review" className="w-[80%] px-2 py-1 rounded-md outline-none resize-none" required />
                    <button type="submit" className="px-2 py-1 text-white rounded-md bg-yellow-950">Submit</button>
                </form>
                <div className="mt-3 space-y-3">
                    {
                        reviews?.map((review) => (
                            <Suspense key={review._id}>
                                <Review review={review} />
                            </Suspense>
                        ))
                    }
                </div>
            </SectionLayout>
        </section>
    );
}

export default ReviewSection;