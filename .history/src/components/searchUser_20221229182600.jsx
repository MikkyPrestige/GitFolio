import { useState } from "react";
import useForm from "../hooks/useForm";

const Users = () => {
  const [githubUser, setGithubUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1)
  const [pages] = useState(3)

  const lastPageIndex = page * pages;
  const firstPageIndex = lastPageIndex - pages;
  const currentPage = githubUser.slice(firstPageIndex, lastPageIndex);

  const paginate = (pageNumbers) => {
    setPage(pageNumbers)
  }

  const prevpage = () => {
    if (page !== 1) {
      setPage(page - 1)
    }
  }
  const { inputs, updateForm, resetForm } = useForm({
    github: "",
  });

    const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
      if (inputs.github === "") {
        return <p>Enter username</p>
      }
      fetch(`https://api.github.com/users/${inputs.github}`)
        .then((response) => response.json())
        .then((data) => {
          setGithubUser(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
      resetForm();
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>No repos Found</p>;

    return (
      <div className="searchUser">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="github"
            value={inputs.github}
            onChange={updateForm}
            placeholder="Enter Github username"
          />
          <button type="submit">Search</button>
        </form>
        <div className="searchUser--container">
          {githubUser.map((user) => {
            const { id, name, description, html_url } = user;
            return (
              <div key={id} className="searchUser--container__card">
                <h3>{name}</h3>
                <p>{description}</p>
                <p>
                  <a href={html_url} target="_blank" rel="noreferrer">
                    Open in Github
                  </a>
                </p>
              </div>
            );
          })}
        </div>
        <div className="pagination">
          <Paginate
            pages={pages}
            totalPages={githubUser.length}
            paginate={paginate}
          />
          {/* <button disabled={page === 1 } onClick={() => setPage((prev) => prev - 1)}>Prev</button>
          <button disabled={page === pages } onClick={() => setPage((prev) => prev + 1)}>Next</button>
          {
            Array.from({length: pages}, (value, i) => i + 1).map(
              (each) => {
                return <button key={each} onClick={() => setPage(each)}>{each}</button>
              }
            )
          } */}
          </div>
      </div>
    );
  };

export default Users;

export const Pagination = ({ pages, totalPages, paginate, prevPage, nextPage }) => {
  const pageNumbers =[];

  for (let i = 1; i <= Math.ceil(totalPages / pages); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        <li onClick={prevPage}>
          Prev
        </li>
        {pageNumbers.map((number) => (
          <li key={number} onClick={() => paginate(number)} className="page-item">
            {number}
            </li>
        ))}
        <li onClick={nextPage}>
          Next
        </li>
      </ul>
    </nav>
  )
}
