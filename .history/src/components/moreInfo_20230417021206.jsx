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
    topics,
    fork,
    size,
    open_issues,
    visibility,
    login,
    default_branch,
  } = repoData || {};
  console.log(repoData)
  // Convert ISO 8601 date strings to Date objects
  const dateCreated = new Date(created_at);
  const dateUpdated = new Date(updated_at);
  const datePushed = new Date(pushed_at);
  // Format the date strings
  const created = dateCreated.toLocaleDateString();
  const updated = dateUpdated.toLocaleDateString();
  const pushed = datePushed.toLocaleDateString();

  return (
    <div className="info">
      <Helmet>
        <title>Repository Data</title>
        <meta name="description" content="Extra Repository data" />
      </Helmet>
      <h1 className="info--heading">Repository Data</h1>
      <div className="info--data">
        {name && (
          <p className="info--item">
            <strong className="info--strong">Name: </strong>
            {name}
          </p>
        )}
        {description && (
          <p className="info--item">
            <strong className="info--strong">Description: </strong>
            {description}
          </p>
        )}
        {topics && (
          <p className="info--item">
            <strong className="info--strong">Topics: </strong>
            {topics}
          </p>
        )}
        {created && (
          <p className="info--item">
            <strong className="info--strong">Date Created: </strong>
            {created}
          </p>
        )}
        {updated && (
          <p className="info--item">
            <strong className="info--strong">Last updated: </strong>
            {updated}
          </p>
        )}
        {pushed && (
          <p className="info--item">
            <strong className="info--strong">Pushed At: </strong>
            {pushed}
          </p>
        )}
        {language && (
          <p className="info--item">
            <strong className="info--strong">Language: </strong>
            {language}
          </p>
        )}
        {login && (
          <p className="info--item">
            <strong className="info--strong">Owner: </strong>
            {login}
          </p>
        )}
        {visibility && (
          <p className="info--item">
            <strong className="info--strong">Visibility: </strong>
            {visibility}
          </p>
        )}
        {open_issues > 0 && (
          <p className="info--item">
            <strong className="info--strong">Open Issues: </strong>
            {open_issues}
          </p>
        )}
        {default_branch && (
          <p className="info--item">
            <strong className="info--strong">Default Branch: </strong>
            {default_branch}
          </p>
        )}
        {size && (
          <p className="info--item">
            <strong className="info--strong">Size: </strong>
            {size}
          </p>
        )}
        {homepage && (
          <p className="info--item">
            <strong className="info--strong">Homepage: </strong>
            {homepage}
          </p>
        )}
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
