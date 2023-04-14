import React from "react";
import { useState } from 'react';

function Tarjetas({titulo, parrafo, img}){
    const [count, setCount] = useState(0)

    return (
        
        <div className="card">
            <img src={img} class="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{parrafo}</p>
                {/* <a href="#" className="btn btn-primary">Add</a>
                <a href="#" className="btn btn-primary">Remove</a> */}
            </div>
        <button className="btn btn-primary" onClick={() => setCount((count) => count + 1)}>
             Add {count}
        </button>
        <button className="btn btn-primary" onClick={() => setCount((count) => count - 1)}>
             Remove {count}
        </button>
        </div>




    )


}

export default Tarjetas