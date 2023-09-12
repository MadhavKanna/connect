import React, { useState, useEffect } from 'react';
import Links from './Links';
import axios from 'axios';
import NotFound from '../general/NotFound';
import { useParams } from 'react-router-dom';

function InfoPage() {
    const { userId } = useParams();
    const [userInfo, setUserInfo] = useState({});
    useEffect(async () => {
        const userData = await axios.get('api/' + userId); // this leads to the get route ""
        console.log(userData);
        setUserInfo = userData;
    }, []);
    console.log(userInfo);
    return <div className="container">
        This the userInfo page
    </div>

}

export default InfoPage;