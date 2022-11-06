// Path: src\components\info.jsx
// INFO COMPONENT - This component is for more info on repositories when user clicks 'More info' link in Portfolio component.
// Link to this page with more info on a each repo  when the user clicks on the'MORE INFO' on each repo link in the list of repos
// get repo data from the useContext hook in the contextProvider component

import { Link, useParams } from "react-router-dom";
import React, { useContext } from 'react';
import { Context } from './context';
import { Helmet } from 'react-helmet';

const MoreInfo = () => {
 const { portfolio } = useContext(Context);  //  get portfolio data from the useContext hook in the contextProvider component
 let { repo } = useParams();  // get repo data from the useParams hook in the contextProvider component
 const repoData = portfolio.find((item) => item.name === repo);  // find the repo data from the portfolio data
 // console.log(repo);
 console.log(repoData);

 return (
  <div>
    <Helmet>
      <title>Data</title>
      <meta name='description' content='Extra Repository data"s' />
    </Helmet>
   <h1>Repository Data</h1>
   <div className="repo">
    <h2>Repo Name: {repoData.name}</h2>
    <p>Full Repo Name: {repoData.full_name}</p>
    <p>Description: {repoData.description}</p>
    <p>Language: {repoData.language}</p>
    <p>Date Created: {repoData.created_at}</p>
    <p>Last updated: {repoData.updated_at}</p>
    <p>Forks: {repoData.fork}</p>
    <p>Owner: {repoData.owner.login}</p>
    <p>Visibility: {repoData.visibility}</p>
    <p>Size: {repoData.size}</p>
    <p>Topics: {repoData.topics}</p>
    <a href={repoData.html_url} target="_blank" rel="noreferrer">Open on Github</a>
   </div>
   <Link to="/">Back Home</Link>
  </div>
 );
};

export default MoreInfo;