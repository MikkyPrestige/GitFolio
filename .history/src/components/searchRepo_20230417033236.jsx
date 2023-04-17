import { useState } from "react";
import useForm from "../hooks/useForm";
import Pagination from "./pagination";
import "../assets/styles/searchRepo.css";
import { Back } from "../components";

const UserRepo = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(5);

  const { inputs, updateForm, resetForm } = useForm({
    github: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the Github username is empty
    if (!inputs.github) {
      setError("Enter a valid username");
      setUser([]);
      return;
    }
    setLoading(true);
    fetch(`https://api.github.com/users/${inputs.github}/repos?per_page=50`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("No repo Found.");
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
        setUser([]);
      });
    resetForm();
  };

  const indexOfLastUser = currentPage * reposPerPage;
  const indexOfFirstUser = indexOfLastUser - reposPerPage;
  const currentUsers =
    user.length > 0 ? user.slice(indexOfFirstUser, indexOfLastUser) : [];

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(user.length / reposPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>No repos Found</p>;

  return (

  );
};

export default UserRepo;
