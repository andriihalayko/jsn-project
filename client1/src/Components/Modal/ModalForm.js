import React, { useState } from "react";

const inputsInit = {
    name: "",
    realName: "",
    desription: "",
    superpowers: "",
    catchPhrase: "",
};


const ModalForm = () => {

    const [inputs, setInputs] = useState(inputsInit);

    const handleInputChange = (e) =>
        setInputs({ ...inputs, [e.target.name]: e.target.value });

    const sendData = (data) => {
        fetch("http://localhost:3000/heros/postHero", {
            method: "POST",
            body: JSON.stringify(data),
            headers: new Headers({
                "Content-Type": "application/json",
            }),
            mode: "cors",
        });
    };

    const handleSubmit = (e) => {
        sendData(inputs);
        e.preventDefault();
        setInputs(inputsInit);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label for="name">Name</label>
            <input
                type="text"
                name="name"
                onChange={handleInputChange}
                value={inputs.name}
                required
            />
            <br/>
            <label for="realName">Real name</label>
            <input
                type="text"
                name="realName"
                onChange={handleInputChange}
                value={inputs.realName}
                required
            />
            <br/>
            <label for="desription">Description</label>
            <input
                type="text"
                name="desription"
                onChange={handleInputChange}
                value={inputs.desription}
                required

            />
            <br/>
            <label for="superpowers">Superpowers</label>
            <input
                type="text"
                name="superpowers"
                onChange={handleInputChange}
                value={inputs.superpowers}
                required
            />
            <br/>
            <label for="catchPhrase">Catch phrase</label>
            <input
                type="text"
                name="catchPhrase"
                onChange={handleInputChange}
                value={inputs.catchPhrase}
                required
            />
            <br/>
            <input type="submit" value="Отправить" />
        </form>
    );
};

export default ModalForm;
