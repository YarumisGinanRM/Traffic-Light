import React, { useState } from "react";
import "../../styles/trafficLight.css"


const TrafficLight = () => {
    const [colorActivo, setColorActivo] = useState("verde")

    const cambiarColor = () => {
        if (colorActivo === "verde") setColorActivo("amarillo")
        if (colorActivo === "rojo") setColorActivo("verde")
        if (colorActivo === "amarillo") setColorActivo("rojo")
    }

    return (
        <>
            <div>
                <div className="semaforo mt-5 p-1 bg-dark flex-column">
                    <div onClick={() => setColorActivo("rojo")} className={`rojo ${colorActivo === "rojo" ? "brillo" : ""}`}>
                    </div>
                    <div onClick={() => setColorActivo("verde")} className={`amarillo ${colorActivo === "amarillo" ? "brillo" : ""}`}>
                    </div>
                    <div onClick={() => setColorActivo("amarillo")} className={`verde ${colorActivo === "verde" ? "brillo" : ""}`}>
                    </div>
                </div>
                <div className="button">
                <button type="button" onClick={cambiarColor} class="btn btn-light p-3 m-5 fs-5" style={{width: "250px"}}>Cambiar Color</button>
                </div>
            </div>

        </>
    )
}

export default TrafficLight;