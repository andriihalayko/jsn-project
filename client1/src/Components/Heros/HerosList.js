import React from "react";
import propTypes from "prop-types";
import HeroCard from "./HeroCard";

const HerosList = ({ heros }) => {
    return (
        <div>
            {heros.map((hero) => (
                <HeroCard key={hero.id} info={hero} />
            ))}
        </div>
    );
}

HerosList.propTypes = {
    heros: propTypes.array.isRequired,
};

export default HerosList;
