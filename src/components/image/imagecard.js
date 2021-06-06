import React from 'react';
import './style.css';
const Imagecard = (props) =>
{
    return  <img
        alt="gallary pic"
        className="image-card"
         src={props.imageurl}/>;
    

};
export default Imagecard;