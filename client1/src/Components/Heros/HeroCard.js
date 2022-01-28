import React from "react";
import propTypes from "prop-types";

function deleteHero(heroId){
    fetch(`http://localhost:3001/heros/deleteHero/${heroId}`, {method: "DELETE"});
}


const HeroCard = ({info}) => {
    return (
        <div>
            <div>
                <img />
            </div>
            <span>{info.name}</span><br/>
            <button onClick={() => deleteHero(info.id)}>Delete hero</button>
        </div>
    );
}

HeroCard.propTypes = {
    info: propTypes.object.isRequired
};

export default HeroCard;
