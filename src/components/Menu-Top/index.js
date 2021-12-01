import React from "react";
import { Div } from "./style";
import Title from "../Title";
import { Link } from "react-router-dom";

function MenuTop(props) {
  const {title} = props;
  return (
    <Div>
      <Title title={`${title}`}></Title>
      <div className="exit">
        <Link to="/">
          <button>
            <i className="material-icons">exit_to_app</i>
          </button>
        </Link>
      </div>
    </Div>
  );
}

export default MenuTop;
