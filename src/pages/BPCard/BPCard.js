import React, {useState} from 'react';
import {Row} from 'antd';
import '../../assets/css/card.css';


const BPCard = () => {
    const [isSelected,setIsSelected] = useState(false);
    const handleSelected = () => {
        setIsSelected(!isSelected);
    }
    const [isSelected1,setIsSelected1] = useState(false);
    const handleSelected1 = () => {
        setIsSelected1(!isSelected1);
    }
    const [isSelected2,setIsSelected2] = useState(false);
    const handleSelected2 = () => {
        setIsSelected2(!isSelected2);
    }
    const [isSelected3,setIsSelected3] = useState(false);
    const handleSelected3 = () => {
        setIsSelected3(!isSelected3);
    }
  
    
    return (
        <>
            <Row gutter={16,16}>
            <div className="card-box">
                <div onClick={handleSelected} className={isSelected ? "card-red":"card"}></div>
            </div>
            <div className="card-box">
                <div onClick={handleSelected1} className={isSelected1 ? "card-red":"card"}></div>
            </div>
            <div className="card-box">
                <div onClick={handleSelected2} className={isSelected2 ? "card-red":"card"}></div>
            </div>
            <div className="card-box">
                <div onClick={handleSelected3} className={isSelected3 ? "card-red":"card"}></div>
            </div>
            </Row>
        </>
    )
}


export default BPCard;