
function ReviewContainer({review, setReviews, setInput, setRatingInput }){

    console.log(review)
    return(
        <>
            <p>{review.comment}</p>
            <p>{review.star_rating}</p>
        </>
    )
}

export default ReviewContainer