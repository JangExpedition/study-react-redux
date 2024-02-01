import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AddNumber = () => {
    const ref = useRef();
    const size = useSelector((state)=>state.size);
    const dispatch = useDispatch();

    return(
        <div>
        <h1>AddNumber</h1>
        <input type='button' value='+' onClick={(e)=>dispatch({type: "SETNUMBER", size})}></input>
        <input type='number' ref={ref} value={size} onChange={(e)=>dispatch({type: "SETSIZE", value: e.target.value})}></input>
        </div>
    );
}

export default AddNumber;