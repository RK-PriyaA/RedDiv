import React, { useState } from "react";
import Text from "./Text";

const RedDi = () =>{
    const [colors,setColors] = useState();
    const colorChange = () =>{
        if(true){
        const cssStyle = {color: 'blue',
            backgroundColor: 'green'
        };
        setColors(cssStyle);
    }}
    return(
        <>
        <Text style={colors}/>
        <div className="main_red">
            <div className="small" style={colors}></div>
            <button onClick={colorChange}>Press</button>
        </div>
        </>
    );
}
export default RedDi;