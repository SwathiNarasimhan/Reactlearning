import React from "react";

export const BoilingVerdict = ({scale, temperature}) => {
    const temp = parseFloat(temperature);
    let getBoilingStatus;
    if(scale === "c"){
        getBoilingStatus = temp >= 100 ?  "Water will be boil" : "Water would not be boil";
    } else {
        getBoilingStatus = temp >= 212 ?  "Water will be boil" : "Water would not be boil";
    }

    return (
        <p className="boilingValue">{getBoilingStatus}</p>
    )
};