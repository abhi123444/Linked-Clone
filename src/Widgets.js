import React from 'react';
import './widgets.css'

import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
          <div className="widgets__articleLeft">
            <FiberManualRecordIcon />
          </div>
          <div className="widgets__articleRight">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
          </div>
        </div>
      );
    
      return (
        <div className="widgets">
          <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
          </div>
    
          {newsArticle("ReactJS Programmer", "Top news - 9099 reader")}
          {newsArticle("Coronavirus: Ind updates", "Top news - 886 reader")}
          {newsArticle("Firebase App", "Firebase - 8000 reader")}
          {newsArticle("JavaScript Mastery", "Code - 120000 reader")}
          {newsArticle("Tesla hits new highs", "Cars & auto - 300 reader")}
        </div>
      );
}

export default Widgets;