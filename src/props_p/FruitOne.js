import React from 'react';
import fr from './Fruit.module.css'

function FruitOne(props) {

    console.log(props.fd, props.no)
    //props.fd.title = "아기상어";

    const imgSrc = require('../assets/fruit/aa'+props.no+'.jpg')
    return (
        <div className={fr.one}>
            <img src={imgSrc} />
            <div className={fr.title}>{props.fd.title}</div>
            <div className={fr.price}>{props.fd.price}</div>
        {/* {props.no} 이미지 번호 매치 확인용*/}
            
        </div>
    );
}

export default FruitOne;