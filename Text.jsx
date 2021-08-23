import React from "react";

const Text = (propes) =>{
    return(
        <>
        <div className="text">
            <h1>Hello</h1>
            <h1>Hello Hello</h1>
            <h1>Hello Hello Hello</h1>
            <h1>Hello He<span className="tex_color" style={propes.style}>llo Hello Hello</span></h1>
        </div>
        </>
    );
}
export default Text;