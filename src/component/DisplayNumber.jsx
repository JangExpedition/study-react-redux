import React from "react";
import { useSelector } from "react-redux";

const DisplayNumber = () => {
    const number = useSelector((state)=>state.number);
    
    return(
        <div>
        <h1>Display Number</h1>
        <input type='number' value={number} readOnly></input>
        </div>
    );
}

export default DisplayNumber;