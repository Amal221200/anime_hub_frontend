/* eslint-disable react/prop-types */

const ReviewForm = ({ handleSubmit }) => {
    return (
        <form className="flex items-center gap-2" onSubmit={handleSubmit}>
            <textarea name="review" id="review" placeholder="Add a review" className="w-[80%] px-2 py-1 rounded-md outline-none resize-none" required />
            <button type="submit" className="px-2 py-1 text-white rounded-md bg-yellow-950">Submit</button>
        </form>
    )
}

export default ReviewForm