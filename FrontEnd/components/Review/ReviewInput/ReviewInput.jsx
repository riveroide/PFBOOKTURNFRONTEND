import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { putRating } from "../../../redux/actions/Rating/putRating"
import { putBusiness } from "../../../redux/actions/business/putBusiness"
import { deleteRating } from "../../../redux/actions/Rating/deleteRating";
import { postRating } from "../../../redux/actions/Rating/postRating";
import { useRouter } from 'next/router'
import { useSession } from "next-auth/react";
import swal from 'sweetalert'

export const ReviewInput = ({ client, businessId }) => {
  const dispatch = useDispatch();

  const { data: session } = useSession();

  const { ratingByClientAndBusiness: rating } = useSelector(
    (state) => state.ratings
  );

  const { bookingByBusinessAndClient: booking } = useSelector((state) => state.bookings)

  const { businessId: business } = useSelector(state => state.business)
  console.log(business)
  const sumRating = business.data?.attributes.ratings.data?.map(e => e.attributes.score).reduce((prev, curr) => prev + curr, 0)
  console.log(sumRating)
  const totalRated =  business.data?.attributes.ratings.data.length
  console.log(totalRated)
  let totalRating = sumRating / totalRated
  if (!totalRating || totalRating === NaN) totalRating = 0 

  console.log(totalRating)
  console.log(rating);

  const [disable, setDisable] = useState(false)

  const router = useRouter()

  const [input, setInput] = useState({
    score: 0,
    title: "",
    comment: "",
    business: parseInt(businessId),
    client: parseInt(client?.id),
    reported: false
  });
  const [hover, setHover] = useState(0);

  useEffect(() => {
    setDisable(false)
    if (!booking.length || !session) {
      setDisable(true)
    }
    else if (rating?.length) {
      setInput({
        ...input,
        score: rating[0].attributes.score,
        title: rating[0].attributes.title,
        comment: rating[0].attributes.comment,
      });
      setDisable(true)
    }
  }, [dispatch, businessId, rating]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!rating.length) {
      await dispatch(postRating(input));
      await swal({
        title:'Listo!',
        text: 'Su reseña fue publicada con exito',
        icon: 'success',
        timer: 4000,
        stopKeydownPropagation: true,
      });
      await dispatch(putBusiness(businessId, {totalRating: totalRating}))
      router.reload(window.location.pathname)
    } else {
      dispatch(putRating(rating[0]?.id, input))
      setDisable(true)
      await swal({
        title:'Listo!',
        text: 'Su comentario fue actualizado con exito',
        icon: 'success',
        timer: 4000,
        stopKeydownPropagation: true,
      });
      dispatch(putBusiness(businessId, {totalRating: totalRating}))
    }
    dispatch(putBusiness(businessId, {totalRating: totalRating}))
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleDelete = async () => {
    await dispatch(deleteRating(rating[0]?.id))
    setInput({
      score: 0,
      title: "",
      comment: "",
      business: parseInt(businessId),
      client: parseInt(client?.id),
    })
   await swal({
      title:'Listo!',
      text: 'Su comentario fue eliminado con exito',
      icon: 'success',
      timer: 4000,
      stopKeydownPropagation: true,
    });   
    await dispatch(putBusiness(businessId, {totalRating: totalRating}))
    router.reload(window.location.pathname)
  }

  return (
    <div className="w-full px-2 sm:px-0 lg:px-0 md:px-0 sm:w-3/4 lg:w-1/3 md:w-1/2 my-8">
      {
        !booking?.length || !session ? <h1 className="text-center text-2xl text-gray-500 mb-4"> Necesitas tener tu cuenta iniciada y haber recibido un turno al menos una vez para dejar tu reseña </h1> : null 
      }
      <form className="justify-between" onSubmit={(e) => handleSubmit(e)}>
        <label className="block mb-2 text-lg font-medium text-gray-900">
          {" "}
          Calificacion:{" "}
        </label>
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={`${
                index <= (input.score || hover)
                  ? "text-yellow-300"
                  : "text-gray-600"
              } bg-transparent border-0 outline-0 ${
                disable ? "cursor-no-drop" : "cursor-pointer"
              }`}
              onClick={() => setInput({ ...input, score: index })}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(input.score)}
              onDoubleClick={() => {
                setHover(0);
                setInput({
                  ...input,
                  score: 0,
                });
              }}
              disabled={disable}
            >
              <span className="text-3xl">&#9733;</span>
            </button>
          );
        })}
        <label
          for="default-input"
          className="block mb-2 font-medium text-gray-900 text-lg my-4"
        >
          Titulo:
        </label>
        <input
          type="text"
          name="title"
          placeholder="Breve descripcion del comentario..."
          className={` border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
            disable ? "cursor-no-drop bg-gray-300" : "cursor-text bg-gray-50"
          }`}
          value={input.title}
          onChange={(e) => handleChange(e)}
          disabled={disable}
        />

        <label
          for="message"
          className="block mb-2 text-lg font-medium text-gray-900 my-4"
        >
          Comentario:
        </label>
        <textarea
          name="comment"
          rows="4"
          className={`block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 ${
            disable ? "cursor-no-drop bg-gray-300" : "cursor-text bg-gray-50"
          }`}
          placeholder="Escribe lo que piensas acerca de esta empresa..."
          value={input.comment}
          onChange={(e) => handleChange(e)}
          disabled={disable}
        ></textarea>
        <button
          type="submit"
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 ${
            disable ? "cursor-no-drop" : "cursor-pointer"
          }`}
          disabled={disable}
        >
          {" "}
          Publicar{" "}
        </button>
        {
          rating?.length ? <button type="button" onClick={() => setDisable(!disable)} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-8"> Editar </button> : null
        }
        {
          rating?.length ? <button type="button" onClick={() => handleDelete()} className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded ml-8"> Eliminar </button> : null
        }
      </form>
    </div>
  );
};

export default ReviewInput;
