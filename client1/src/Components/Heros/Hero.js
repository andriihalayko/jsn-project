import React, { useEffect, useState } from "react";
import HerosList from "./HerosList";
import Modal from "../Modal/Modal";

const Hero = () =>  {
    const [data, setData] = useState([]);
    const [isModal, setModal] = useState(false);
    const onClose = () => setModal(false);

    useEffect(() => {
        fetch("http://localhost:3001/heros")
            .then((res) => res.json())
            .then((data) => setData(data.heros))
    }, []);

    return (
        <div>
            <button onClick={() => setModal(true)}>Добавити героя</button>
            <Modal visible={isModal} title="Add hero" onClose={onClose} />
            <HerosList heros={data} />
        </div>
    );
}

export default Hero;
