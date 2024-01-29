import React from "react";
const Cards = (props) => {
    return (
        <td className="Cards">
        <img src={props.image} alt='image'></img>
        <div classname='container'>
            <h2>{props.title}</h2>
            <a href={props.link} target="_blank"><button class="button-8" role="button">Menu</button></a>
        </div>
    </td>
        )
}
export default Cards;