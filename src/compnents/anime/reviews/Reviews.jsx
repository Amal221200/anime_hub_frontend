/* eslint-disable react/prop-types */
import { Suspense, lazy } from "react";

const Review = lazy(()=> import("./Review"));

const Reviews = ({ reviews }) => {
    return (
        <div className="mt-3 space-y-3">
            {
                reviews?.map((review) => (
                    <Suspense key={review._id}>
                        <Review review={review} />
                    </Suspense>
                ))
            }
        </div>
    )
}

export default Reviews