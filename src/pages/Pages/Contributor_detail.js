import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams, Link} from 'react-router-dom';
import {USER_API} from "../utility/constant";
import {Button} from 'antd';

const ContributorDetail = () => {
    const [person, setPerson] = useState([]);
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
   
    const prevID = person.id === 1 ? total : person.id -1;
    const nextID = person.id === total ? person.id : person.id +1;  

        return (
            <>
             <div>
                <p>Contributor Detail</p>
               
                    <img src={person.avatar} alt='avatar'/>
                
                <p>{person.first_name} {person.last_name}</p>
                <p>{person.email}</p>
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
                </div>
            </>
        )
}

export default ContributorDetail;