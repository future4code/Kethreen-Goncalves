import React from "react";
import "./CardPequeno.css";

function CardPequeno(props) {
  return (
    <div className="smallcard-container">
      <div>
        <img
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2DATf43f4rB7awwjHRjPas9Aqw8fV1unSHg&usqp=CAU"
          }
        />
        <p>{props.email}</p>
      </div>
      <div>
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt6eb_jsoLvwrVTCf0Hjis-XQznzWnRfEbHw&usqp=CAU"} />
        <p>{props.endereco}</p>
      </div>
    </div>
  );
}

export default CardPequeno;
