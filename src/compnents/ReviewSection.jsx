/* eslint-disable react/prop-types */
import { useContext } from "react";
import SectionLayout from "../layout/SectionLayout";
import { AuthContext } from "../providers/AuthProvider";
import { AnimeContext } from "../providers/AnimeProvider";
import { useNavigate } from "react-router-dom";

const Review = ({ review }) => {

    return (
        <article key={review._id} className="flex items-center gap-3">
            <div>
                <p className="leading-7 text-center text-white rounded-full w-7 h-7 bg-slate-600">{review?.user?.username[0].toUpperCase()}</p>
            </div>
            <div className="w-[90%]">
                <p>{review.content}</p>
            </div>
        </article>
    )
}

const ReviewSection = ({ reviews }) => {
    const { user } = useContext(AuthContext);
    const { addReview } = useContext(AnimeContext);
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        if (!user) {
            return navigate("/sign-in")
        }
        
        e.preventDefault();
        const formData = new FormData(e.target);
        addReview({ content: formData.get("review"), user: user._id, anime: reviews.anime });
    }

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
                            <Review key={review._id} review={review} />
                        ))
                    }
                </div>
            </SectionLayout>
        </section>
    );
}

export default ReviewSection;