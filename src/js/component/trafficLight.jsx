import React, { useState } from "react";
import "../../styles/trafficLight.css"


const TrafficLight = () => {
    const [ colorActivo, setColorActivo] = useState("verde")

    return (
        <>
            <div className="semaforo ">
               <div className="red"></div>
               <div className="amarillo"></div>
               <div className={`verde ${colorActivo == "verde" ? "brillo" : " "}`}></div>
            </div>
        </>
    )
}

export default TrafficLight;