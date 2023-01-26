import { useState } from "react"
import { Form, Button, Rating } from 'semantic-ui-react'


function ReviewContainer({review, setReviews, userData}){

    // const [reviewEdit, setReviewEdit] = useState("")
    const [renderEdit, setEdit] = useState(false)
    const [updateComment, setUpdateComment] = useState(review.comment)
    const [updateRating, setUpdateRating] = useState(review.star_rating)

    const updateReview = (updatedReview) => {
        setReviews(current => {
            return current.map(review => {
             if (review.id === updatedReview.id){
               return updatedReview
             } else {
               return review
             }
            })
          })
    }
    const handleUpdate = e => {
        e.preventDefault()
        fetch(`/reviews/${review.id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                comment: updateComment,
                star_rating: updateRating
            })
        })
        .then ( res => res.json())
        .then ( newReview => updateReview(newReview))
    
        setEdit(!renderEdit)
    }
    
   
    const deleteReview = id => {
        setReviews(currentReview => currentReview.filter( review => review.id !== id ))
    }
    
    const handleDelete = () => {
        fetch(`/reviews/${review.id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        })
        .then( () => { deleteReview(review.id)} )
    }


    return(
        <>
        <p className="review-text">{review.user.username} : {review.comment}</p>
        <Rating className="review-rating" icon='star' defaultRating={review.star_rating} maxRating={5} disabled />
        { renderEdit ? (
            <Form onSubmit={handleUpdate}>
                <Form.Field>
                <label>Comment</label>
                <input
                type="text"
                value={updateComment}
                onChange={e => setUpdateComment(e.target.value)}
                />
                </Form.Field>
                <Form.Field>
                <label>Rating</label>
                <input
                type="number"
                min="1"
                max="5"
                value={updateRating}
                onChange={e => setUpdateRating(e.target.value)}
                />
                </Form.Field>
                <Button type='submit'>Save</Button>
                <Button onClick={() => setEdit(!renderEdit)}>Cancel</Button>
            </Form>
        ) : (
        <>
            { review.user.id === userData.id ? (
            <Button onClick={handleUpdate}>Edit</Button>
            ) : null}
            { review.user.id === userData.id ? (
            <Button onClick={handleDelete}>Delete</Button>
            ) : null}
        </>
        )}
        </>
        )
    // return(
    //     <>
    //         <p>{review.user.username} : {review.comment} ⭐{review.star_rating}</p>
    //         { renderEdit ? (
    //             <form onSubmit={handleUpdate}>
    //                 <input 
    //                     type="text" 
    //                     value={updateComment} 
    //                     onChange={e => setUpdateComment(e.target.value)} 
    //                 />
    //                 <input 
    //                     type="number" 
    //                     min="1" 
    //                     max="5" 
    //                     value={updateRating} 
    //                     onChange={e => setUpdateRating(e.target.value)} 
    //                 />
    //                 <button type="submit">Save</button>
    //                 <button onClick={() => setEdit(!renderEdit)}>Cancel</button>
    //             </form>
    //         ) : (
    //             <>
    //                  { review.user.id === userData.id ? (
    //                 <button onClick={handleUpdate}>Edit</button>
    //                 ) : null}
    //                 { review.user.id === userData.id ? (
    //                 <button onClick={handleDelete}>Delete</button>
    //                 ) : null}
    //             </>
    //         )}
    //     </>
    // )
}

export default ReviewContainer