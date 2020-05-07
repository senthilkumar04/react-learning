import React from 'react';

const CharComponent = ({ textCharacter, removeCharacter }) => {
    const style = {
        display: "inline-block",
        padding: "16px",
        textAlign: "center",
        margin: "16px",
        border: "1px solid black"
    }

    return (
        <div onClick={() => { removeCharacter(textCharacter) }} style={style}>
            <span>{textCharacter}</span>
        </div>
    );
}

export default CharComponent;