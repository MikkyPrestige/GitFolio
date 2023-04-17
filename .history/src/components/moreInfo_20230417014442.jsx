// MOREINFO COMPONENT - This component displays more data on each repositories when 'View repo data' link is clicked in the repo component.

import { Link, useParams } from "react-router-dom";
import React, { useContext } from "react";
import { Context } from "./context";
import { Helmet } from "react-helmet";
import "../assets/styles/moreInfo.css";

const MoreInfo = () => {
  const { repository } = useContext(Context); //  get portfolio data from the useContext hook in the contextProvider component
  const { repo } = useParams(); // get the repo name from the url
  const repoData = repository.find((item) => item.name === repo); // find the repo data from the portfolio data
  const {
    name,
    description,
    html_url,
    homepage,
    language,
    created_at,
    updated_at,
    pushed_at,
    full_name,
    topics,
    size,
    open_issues,
    visibility,
    login,
    default_branch,
  } = repoData || {};
  console.log(repoData)

  return (
    <div className="info">
      <Helmet>
        <title>Repository Data</title>
        <meta name="description" content="Extra Repository data" />
      </Helmet>
      <h1 className="info--heading">Repository Data</h1>
      <div className="info--data">
        <p className="info--item">
          <strong className="info--strong">Name: </strong>
          {name}
        </p>
        <p className="info--item">
          <strong className="info--strong">Full-Name: </strong>
          {full_name}
        </p>
        <p className="info--item">
          <strong className="info--strong">Description: </strong>
          {description}
        </p>
        <p className="info--item">
          <strong className="info--strong">Topics: </strong>
          {topics}
        </p>
        <p className="info--item">
          <strong className="info--strong">Date Created: </strong>
          {created_at}
        </p>
        <p className="info--item">
          <strong className="info--strong">Last updated: </strong>
          {updated_at}
        </p>
        <p className="info--item">
          <strong className="info--strong">Pushed At: </strong>
          {pushed_at}
        </p>
        <p className="info--item">
          <strong className="info--strong">Language: </strong>
          {language}
        </p>
        <p className="info--item">
          <strong className="info--strong">Owner: </strong>
          {login}
        </p>
        <p className="info--item">
          <strong className="info--strong">Visibility: </strong>
          {visibility}
        </p>
        <p className="info--item">
          <strong className="info--strong">Open Issues: </strong>
          {open_issues}
        </p>
        <p className="info--item">
          <strong className="info--strong">Default Branch: </strong>
          {default_branch}
        </p>
        <p className="info--item">
          <strong className="info--strong">Size: </strong>
          {size}
        </p>
        <p className="info--item">
          <strong className="info--strong">Homepage: </strong>
          {homepage}
        </p>
      </div>
      <a
        href={html_url}
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
