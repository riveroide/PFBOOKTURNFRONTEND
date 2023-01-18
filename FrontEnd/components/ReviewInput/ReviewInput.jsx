import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postRating } from "../../redux/actions/Rating/postRating";

export const ReviewInput = ({ client, businessId }) => {
  const dispatch = useDispatch();

  const { ratingByClientAndBusiness: rating } = useSelector(
    (state) => state.ratings
  );

  console.log(rating);

  const [input, setInput] = useState({
    score: 0,
    title: "",
    comment: "",
    business: parseInt(businessId),
    client: parseInt(client.id),
  });
  const [hover, setHover] = useState(0);

  useEffect(() => {
    if (rating.length) {
      setInput({
        ...input,
        score: rating[0].attributes.score,
        title: rating[0].attributes.title,
        comment: rating[0].attributes.comment
      })
    }
  }, [])

 

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postRating(input));
    alert("Se publicó la reseña");
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  

  return (
    <div className="w-1/3 my-8">
      <form className="" onSubmit={(e) => handleSubmit(e)}>
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
              } bg-transparent border-0 outline-0 ${ rating.length ? "cursor-no-drop" : "cursor-pointer"}`}
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
              disabled={rating.length ? true : false}
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
          className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${ rating.length ? "cursor-no-drop" : "cursor-pointer"}`}
          value={input.title}
          onChange={(e) => handleChange(e)}
          disabled={rating.length ? true : false}
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
          className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 ${ rating.length ? "cursor-no-drop" : "cursor-pointer"}`}
          placeholder="Escribe lo que piensas acerca de esta empresa..."
          value={input.comment}
          onChange={(e) => handleChange(e)}
          disabled={rating.length ? true : false}
        ></textarea>
        <button
          type="submit"
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 ${ rating.length ? "cursor-no-drop" : "cursor-pointer"}`}
          disabled={rating.length ? true : false}
        >
          {" "}
          Publicar{" "}
        </button>
      </form>
    </div>
  );
};

export default ReviewInput;
