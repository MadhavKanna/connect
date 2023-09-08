import React from 'react';
import LinkButton from "./LinkButton";

function Links(userInfo) {
    return (
        <LinkButton details={{ email: userInfo.email }} />
    )
    // rest of the links
}

export default Links; 