import React from "react";
import PropTypes from "prop-types";
import ArticleListItem from "../ArticleListItem/ArticleListItem.jsx";
import style from "./ArticleList.module.css"

const ArticleList = (props) => {
  return (
    <div className={style.box}>
      <ul>
        {props.articles.map((article) => (
          <ArticleListItem article={article} key={article.slug} />
        ))}
      </ul>
    </div>
  );
};

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}
export default ArticleList;