import React from "react";
import style from "./ArticleTextToggleButton.module.css";


const ArticleTextToggleButton=(props)=>{
    return (
    <button className={style.button}
    onClick={props.clicked}>
        {props.buttonText}
        </button>
    );
};
export  default ArticleTextToggleButton;