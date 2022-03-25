import React from "react";
import style from "./style.module.css";

const List = ({ errorMassage }) => {
  return <h3 className={style.warning}>{errorMassage}</h3>;
};

export default List;
