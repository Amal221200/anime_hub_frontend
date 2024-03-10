/* eslint-disable react/prop-types */

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

export default Review;