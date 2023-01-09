import React from "react";

export default function Paginado({
  businessPerPage,
  allBusiness,
  paginado,
  currentPage,
}) {
  const pageNumbers = [];

  for (let i = 0; i < Math.ceil(allBusiness / businessPerPage); i++) {
    pageNumbers.push(i + 1);
  }

  if (currentPage === pageNumbers.length + 1) {
    paginado(1);
  }
  return (
    <div className="flex justify-center">
      <button
        onClick={() =>
          paginado(currentPage === 1 ? pageNumbers.length : currentPage - 1)
        }
        className="flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100 hover:bg-blue-500 hover:text-white">
        {/* dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-blue-500 dark:hover:text-gray-200 */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>{" "}
      </button>

      {pageNumbers &&
        pageNumbers.map((number) => {
          return (
            <button
              key={number}
              onClick={() => paginado(number)}
              className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline hover:bg-blue-500 hover:text-white"
            >
            {/* dark:bg-gray-800 dark:text-gray-200  dark:hover:bg-blue-500 dark:hover:text-gray-200 */}
              {currentPage === number ? <b>{number}</b> : number}
            </button>
          );
        })}
      <button
        onClick={() =>
          paginado(currentPage === 0 ? pageNumbers.length : currentPage + 1)
        }
        className="flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100 hover:bg-blue-500 hover:text-white"
      >
         {/* dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-blue-500 dark:hover:text-gray-200 */}
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>{" "}
      </button>
    </div>
  );
}
