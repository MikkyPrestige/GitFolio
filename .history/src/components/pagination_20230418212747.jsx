import React from "react";
import "../assets/styles/searchRepo.css";

const Pagination = ({
  reposPerPage,
  totalRepos,
  paginate,
  prevPage,
  nextPage,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); ++i) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination--nav">
      <ul className="pagination--list">
        {/* conditionally render  data */}
        {currentPage > 1 && (
          <li className="pagination--list__item">
            <button
              className="pagination--list__item__button"
              onClick={() => prevPage()}
            >
              Prev
            </button>
          </li>
        )}
        {pageNumbers.map((number) => (
          <li key={number} className="pagination--list__item">
            <button
              className="pagination--list__item__button"
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          </li>
        ))}
        {/* conditionally render  data */}
        {currentPage < pageNumbers.length && (
          <li className="pagination--list__item">
            <button
              className="pagination--list__item__button"
              onClick={() => nextPage()}
            >
              Next
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
