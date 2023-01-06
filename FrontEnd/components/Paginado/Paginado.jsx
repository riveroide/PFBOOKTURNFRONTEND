import React from "react";

export default function Paginado({ businessPerPage, allBusiness, paginado, currentPage }) {
    const pageNumbers = [];

    for (let i = 0; i < Math.ceil(allBusiness / businessPerPage); i++) {
        pageNumbers.push(i+1)
    }

    if (currentPage === pageNumbers.length + 1) {
        paginado(1)
    }
    return (
        <div>
            <button onClick={() => paginado(currentPage === 1 ? pageNumbers.length : currentPage - 1)}> 🢀 </button>

            {pageNumbers &&
                pageNumbers.map(number => {
                    return(<button key={number} onClick={() => paginado(number)}>{currentPage === number ? <b>{number}</b> : number}</button>)
                    })}
            <button  onClick={() => paginado(currentPage === 0 ? pageNumbers.length : currentPage + 1)}> 🢂 </button>
        </div>

    )
}