import React from "react";

export const Review = ({ score, title, comment }) => {
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