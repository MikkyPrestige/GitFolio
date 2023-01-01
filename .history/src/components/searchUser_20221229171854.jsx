import { useState } from "react";
import useForm from "../hooks/useForm";

const Users = () => {
  const [githubUser, setGithubUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1)

  const { inputs, updateForm, resetForm } = useForm({
    github: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.github.com/users/${inputs.github}?page=${page}&per_page=4`
      );
};

export default Users;
