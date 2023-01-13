import { useState, useEffect } from "react"
import ReviewContainer from "./ReviewContainer"

function ReviewList({destinationId, userData}){

    // console.log(userData.id)

    const [reviews, setReviews] = useState([])
    const [input, setInput] = useState("")
    const [ratingInput, setRatingInput] = useState(0)

    useEffect(() => {
        fetch(`/destinationreviews/${destinationId}`)
        .then(res => res.json())
        .then(setReviews)
    },[destinationId])

    const handleSubmit = e => {
        e.preventDefault();
        const newReview = {
            star_rating: ratingInput,
            comment: input,
            user_id: userData.id,
            destination_id: destinationId
        }
        fetch('/reviews', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newReview)
        })
        .then(res => res.json())
        .then(newReview => setReviews([...reviews, newReview]))
        setInput("")
        setRatingInput(0)
    }

    const renderReviews = reviews.map(review => {
        return (
            <ReviewContainer key= {review.id} review={review} setReviews={setReviews} setInput={setInput} setRatingInput={setRatingInput}/>
        )
    })

    return(
        <>
            <h2>Reviews :</h2>
            {renderReviews}
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder= "enter your review" value={input} onChange={ e => setInput(e.target.value)}/>
                <input type='number' placeholder= "enter your review rating" value={ratingInput} onChange={ e => setRatingInput(e.target.value)}/>
                <button>Add your review</button>
            </form>
        </>
    )
}

export default ReviewList