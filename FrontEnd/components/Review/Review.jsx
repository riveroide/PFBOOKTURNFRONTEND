import React from "react";
import { putRating } from "../../redux/actions/Rating/putRating";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";

export const Review = ({ id, score, title, comment }) => {
  const dispatch = useDispatch()
  const onClick = (id) => {
    Swal.fire({
      title: '¿Desea reportar este comentario?',
      text: "¡Esta acción es irreversible!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: "No"
    }).then((result) => {
      console.log(id)
      if (result.isConfirmed) {
        Swal.fire(
          'Reportado',
          'El reporte será revisado por un administrador.',
          'success'
        )
        dispatch(putRating(id, {reported: true}))
      }
    })

  }

    return (
        <div className="my-8">
            <div>

            {[...Array(5)].map((star, index) => {
                index += 1;
          return (
            <button
              type="button"
              key={index}
              className={`${
                  index <= (score)
                  ? "text-yellow-300"
                  : "text-gray-600"
                } bg-transparent border-0 outline-0 cursor-default`}
                disabled={true}
                >
              <span className="text-xl">&#9733;</span>
            </button>
          );
        })}
        </div>
        <button 
        className="text-red-700 ml-80"
        onClick={() => onClick(id)}
        >&#9888;</button>
        <div>
            <h1 className="text-2xl font-semibold my-2"> {title} </h1>
        </div>
            <div>
                <p className="text-lg break-words"> {comment} </p>
            </div>
            <hr></hr>
        </div>
    )
}

export default Review