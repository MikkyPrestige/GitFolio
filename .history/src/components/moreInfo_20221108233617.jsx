// MOREINFO COMPONENT - This component displays more data on each repositories when 'View repo data' link is clicked in the repo component.

import { Link, useParams } from "react-router-dom";
import React, { useContext } from "react";
import { Context } from "./context";
import { Helmet } from "react-helmet";
import "../assets/styles/moreInfo.css";

const MoreInfo = () => {
  const { portfolio } = useContext(Context); //  get portfolio data from the useContext hook in the contextProvider component
  let { repo } = useParams(); // get repo data from the useParams hook in the contextProvider component
  const repoData = portfolio.find((item) => item.name === repo); // find the repo data from the portfolio data
  // console.log(repo);
  // console.log(repoData)
// localStorage.setItem("repos", JSON.stringify(portfolio))
  const { name, description, html_url, homepage, language, created_at, updated_at, pushed_at, full_name, topics, size, open_issues, visibility, owner, default_branch } = repoData; // destructure the repo data

  return (
    <div className="info">
      {/* Json.parse(localStorage.getItem("repos")) */}
      <Helmet>
        <title>Data</title>
        <meta name="description" content="Extra Repository data" />
      </Helmet>
      <h1 className="info--heading">Repository Data</h1>
      <div className="info--data">
        <p className="info--item">
          <strong>Name: </strong>
          { name}
        </p>
        <p className="info--item">
          <strong>Full-Name: </strong>
          { full_name}
        </p>
        <p className="info--item">
          <strong>Description: </strong>
          { description}
        </p>
        <p className="info--item">
          <strong>Topics: </strong>
          { topics}
        </p>
        <p className="info--item">
          <strong>Date Created: </strong>
          { created_at}
        </p>
        <p className="info--item">
          <strong>Last updated: </strong>
          { updated_at}
        </p>
        <p className="info--item">
          <strong>Pushed At: </strong>
          { pushed_at}
        </p>
        <p className="info--item">
          <strong>Language: </strong>
          { language}
        </p>
        <p className="info--item">
          <strong>Owner: </strong>
          { owner.login}
        </p>
        <p className="info--item">
          <strong>Visibility: </strong>
          { visibility}
        </p>
        <p className="info--item">
          <strong>Open Issues: </strong>
          { open_issues}
        </p>
        <p className="info--item">
          <strong>Default Branch: </strong>
          { default_branch}
        </p>
        <p className="info--item">
          <strong>Size: </strong>
          { size}
        </p>
        <p className="info--item">
          <strong>Homepage: </strong>
          { homepage}
        </p>
      </div>
      <a
        href={ html_url}
        target="_blank"
        rel="noreferrer"
        className="info--link"
      >
        Open in Github
      </a>
      <Link to="/repos" className="info--back">
        Back to repo lists &#8592;
      </Link>
    </div>
  );
};

export default MoreInfo;
