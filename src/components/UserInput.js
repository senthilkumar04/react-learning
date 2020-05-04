import React from 'react';

const UserInput = ({ userName, userNameChange }) => {
    return (
        <div>
            <input onChange={userNameChange} value={userName} type="text" />
        </div>
    )
}

export default UserInput;