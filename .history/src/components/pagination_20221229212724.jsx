import React from "react";

const Pagination = ({ reposPerPage, totalRepos, paginate, prevPage, nextPage, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination--nav">
      <ul className="pagination--lists">
        <li className="pagination--list">
          <button onClick={() => prevPage()} className="pagination--btn">
            Prev
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className="pagination--list">
            <button onClick={() => paginate(number)} className="pagination--btn">
              {number}
            </button>
          </li>
        ))}
        <li className="pagination--list">
          <button onClick={() => nextPage()} className="pagination--btn">
            Next
          </button>
        </li>
      </ul>
      <p className="pagination--num">Page: {currentPage} of {pageNumbers.length}</p>
    </nav>
  );
};

export default Pagination;