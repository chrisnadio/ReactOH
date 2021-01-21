import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams, Link} from 'react-router-dom';
import {USER_API} from "../utility/constant";
import {Button} from 'antd';

const ContributorDetail = () => {
    const [user, setPerson] = useState([]);
    const [total, setTotal] = useState(0);
    const {id} = useParams();

    useEffect(() => {
        const getData = async () => {
            const result = await axios(`${USER_API}${id}`);
            setPerson(result.data.data);
            console.log('data getData',result);
        };
        const getTotal = async () => {
            const result = await axios(`${USER_API}`);
            setTotal(result.data.total);
            console.log('data getTotal',result);
        };
        getData();
        getTotal();
    },[id]);
   
    const prevID = user.id === 1 ? total : user.id -1;
    const nextID = user.id === total ? user.id : user.id +1;  

        return (
            <>
                <p>Contributor Detail</p>
                <div>
                    <img src={user.avatar} alt='avatar'/>
                </div>
                <p>{user.first_name} {user.last_name}</p>
                <p>{user.email}</p>
                <Button>
                <Link to={`./${nextID}`}>
                    <p>NEXT</p>
                </Link>
                </Button>
                <Button>
                <Link to={`./${prevID}`}>
                    <p>PREV</p>
                </Link>
                </Button>
            </>
        )
}

export default ContributorDetail;