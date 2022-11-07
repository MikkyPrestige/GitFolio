// Path: src\components\info.jsx
// INFO COMPONENT - This component is for more info on repositories when user clicks 'More info' link in Portfolio component.
// Link to this page with more info on a each repo  when the user clicks on the'MORE INFO' on each repo link in the list of repos
// get repo data from the useContext hook in the contextProvider component

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
  console.log(repoData);

  return (
    <div className="info">
      <Helmet>
        <title>Data</title>
        <meta name="description" content="Extra Repository data" />
      </Helmet>
      <h1 className="info--heading">Repository Data</h1>
      <div className="info--data">
        <p className="info--item">
          <strong>Name: </strong>
          {repoData.name}
        </p>
        <p className="info--item">
          <strong>Full-Name: </strong>
          {repoData.full_name}
        </p>
        <p className="info--item">
          <strong>Description: </strong>
          {repoData.description}
        </p>
        <p className="info--item">
          <strong>Topics: </strong>
          {repoData.topics}
        </p>
        <p className="info--item">
          <strong>Date Created: </strong>
          {repoData.created_at}
        </p>
        <p className="info--item">
          <strong>Last updated: </strong>
          {repoData.updated_at}
        </p>
        <p className="info--item">
          <strong>Pushed At: </strong>
          {repoData.pushed_at}
        </p>
        <p className="info--item">
          <strong>Language: </strong>
          {repoData.language}
        </p>
        <p className="info--item">
          <strong>Fork: </strong>
          {repoData.fork}
        </p>
        <p className="info--item">
          <strong>Forks: </strong>
          {repoData.forks}
        </p>
        <p className="info--item">
          <strong>Owner: </strong>
          {repoData.owner.login}
        </p>
        <p className="info--item">
          <strong>Visibility: </strong>
          {repoData.visibility}
        </p>
        <p className="info--item">
          <strong>Open Issues: </strong>
          {repoData.open_issues}
        </p>
        <p className="info--item">
          <strong>Default Branch: </strong>
          {repoData.default_branch}
        </p>
        <p className="info--item">
          <strong>Size: </strong>
          {repoData.size}
        </p>
        <p className="info--item">
          <strong>Homepage: </strong>
          {repoData.homepage}
        </p>
      </div>
      <a
        href={repoData.html_url}
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
