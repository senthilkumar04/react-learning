import React from 'react';

const UserTextValidation = ({ userText }) => {
    const [ textminLength, textMaxLength ] = [ 5, 10 ];
    let userValidationText = null;
    if (userText && userText.length > 0 && userText.length < textminLength){
        userValidationText = <p>Text too short</p>;
    }
    else if (userText && userText.length > textMaxLength) {
        userValidationText = <p>Text long enough</p>;
    }
    return userValidationText;
}

export default UserTextValidation;