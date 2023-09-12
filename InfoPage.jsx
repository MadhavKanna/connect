import React, { useState, useEffect } from 'react';


async function InfoPage() {
    return (<div>InfoPage</div>);
    const [userInfo, setUserInfo] = useState({});
    const fetchUserData = async () => {
        const userData = await axios.get('api/' + userId); // this leads to the get route ""
        console.log(userData);
        setUserInfo = userData;
    }
    useEffect(async () => {
        fetchUserData();
    }, []);

    if (userInfo) {
        return (
            <div className="jumbotron">
                {/* <img src="" className='' /> */}
                <h1 className='display-name'>${userInfo.name}</h1>
                <Links details={userInfo} />
            </div>
        )
    } else {
        return <NotFound />
    }
}

export default InfoPage;