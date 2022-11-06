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
//  console.log(repoData);

 return (
  <div className="info">
    <Helmet>
      <title>Data</title>
      <meta name='description' content='Extra Repository data"s' />
    </Helmet>
   <h1 className="info--heading">Repository Data</h1>
   <div className="repo">
    <h2 className="info--item">Repo Name: {repoData.name}</h2>
    <p className="info--item"> Repo Full-Name: {repoData.full_name}</p>
    <p className="info--item">Repo Description: {repoData.description}</p>
    <p className="info--item">Repo Language: {repoData.language}</p>
    <p className="info--item">Date Created: {repoData.created_at}</p>
    <p className="info--item">Last updated: {repoData.updated_at}</p>
    <p className="info--item">Forks: {repoData.fork}</p>
    <p className="info--item">Owner: {repoData.owner.login}</p>
    <p className="info--item">Visibility: {repoData.visibility}</p>
    <p className="info--item">Size: {repoData.size}</p>
    <p className="info--item">Topics: {repoData.topics}</p>
    <a href={repoData.html_url} target="_blank" rel="noreferrer" className="info--link">Open on Github</a>
   </div>
   <Link to="/" className="info--item">Back Home</Link>
  </div>
 );
};

export default MoreInfo;