// Path: src\components\info.jsx
// INFO COMPONENT - This component is for more info on repositories when user clicks 'More info' link in Portfolio component.
// Link to this page with more info on a each repo  when the user clicks on the'MORE INFO' on each repo link in the list of repos
// get repo data from the useContext hook in the contextProvider component


import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from './context';

const MoreInfo = () => {
 const { portfolio } = useContext(Context);  //  get portfolio data from the useContext hook in the contextProvider component
 const { id } = useParams;   // get the id from the useParams hook in the react-router-dom package to get the id from the URL and set the repoName to the value of the id in the URL  
 const repo = portfolio.find(repo => repo.id === id);  // find the repo in the portfolio array that matches the id from the URL 
 console.log(repo);

 return (
  <div>
   <h1>More Info</h1>
   <div className="repo">
    <h3>{repo.name}</h3>
    <h5>{repo.full_name}</h5>
    <p>{repo.description}</p>
    <p>{repo.language}</p>
    <p>{repo.fork}</p>
    <p>{repo.visibility}</p>
    <p>{repo.updated_at}</p>
    <p>{repo.created_at}</p>
    <p>{repo.has_issues}</p>
    <p>{repo.owner.login}</p>
    <p>{repo.size}</p>
    <p>{repo.topics}</p>
   </div>
  </div>
 );
}

export default MoreInfo;  