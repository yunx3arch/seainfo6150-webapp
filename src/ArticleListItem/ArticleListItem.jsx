import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton";
import style from "./ArticleListItem.module.css";

const ArticleListItem = (props) => {
  const[state,setState]=useState({
        buttonText:'Show more',
        showDetail:false,
  })
  const handleClick=()=>{
   
    if(state.showDetail){
      setState({
        buttonText:'Show less',
        showDetail:!state.showDetail
      });
    }else{
      setState({
          buttonText:'Show more',
          showDetail:!state.showDetail
      });
    }
  }


  return (
    <li className={style.li}>
      <article>
        <h2>
          <Link className={style.link} to={'/articlelist/'+props.article.slug}>
            {props.article.title}</Link>
        </h2>
        {state.showDetail &&
         <div>
          <time className={style.time} dateTime={props.article.timeStamp}>
          {props.article.displayDate}
          </time>
          <p>{props.article.shortText}</p>
          </div>
        }
        <ArticleTextToggleButton clicked={handleClick} buttonText={state.buttonText}/>
      </article>
    </li>
);
}


ArticleListItem.propTypes = {
  article: PropTypes.object.isRequired,
};
export default ArticleListItem;
