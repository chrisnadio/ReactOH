import React, {useEffect, useState} from 'react';
import axios from "axios";
import {BASE_API} from "../utility/constant";
import '../../assets/css/contribute.css';
import {Link} from "react-router-dom";  
import { Button } from 'antd';


const Contribute = () => {
    const [users,setUsers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
        const result = await axios(`${BASE_API}`);
            setUsers(result.data.data);
            console.log('hasil result:',result);
    };
    fetchData();
},[]);
console.log('hasil user:',users);

return (
  <>
    <div className = 'container1'>
      {users.map((user, index) => (
            <li key={index}>
                <p>{user.id}</p>
                <img src={user.avatar} alt='avatar' />
                <p>{user.first_name} {user.last_name}</p>
                <p>{user.email}</p>
                <Link to={`/contributor_detail/${user.id}`}>
                <Button type="primary">More Detail</Button>  
                </Link>
            </li>
      ))}
    </div>
  </>
    );
};

export default Contribute;