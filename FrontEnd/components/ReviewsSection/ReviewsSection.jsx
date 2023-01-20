import React, {useState} from "react";
import { useSelector } from "react-redux";
import PaginadoReviews from "../paginadoReviews/PaginadoReviews";
import Review from "../Review/Review";

export const ReviewsSection = () => {

    const { ratingBusinessList: ratings } = useSelector((state) => state.ratings)

    console.log(ratings)

    const [state, setState] = useState({
        page: 1,
        reviews: 5
      })

    const lastReview = state.page * state.reviews;
    const firstReview = lastReview - state.reviews
    const actualReview = ratings.slice(firstReview, lastReview)

    const paginado = (pageNum) => {
        setState({
          ...state,
          page: pageNum
        })
      }

return (
    <div className="md:w-2/5 md:mx-0 justify-start w-full px-4">
        {
            actualReview?.map(e => <Review score={e.attributes.score} title={e.attributes.title} comment={e.attributes.comment}/>)
        }
        { ratings.length > 6 ? <PaginadoReviews paginado={paginado} reviewsPerPage={state.reviews} reviews={ratings.length} currentPage={state.page} /> : null}
    </div>
)
}

export default ReviewsSection