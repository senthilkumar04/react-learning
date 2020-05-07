import React from 'react';

const UserTextValidation = ({ userTextLength }) => {
    let userValidationText = null;
    if (userTextLength < 5){
        userValidationText = <p>Text too short</p>;
    }
    else {
        userValidationText = <p>Text long enough</p>;
    }
    return userValidationText;
}

export default UserTextValidation;