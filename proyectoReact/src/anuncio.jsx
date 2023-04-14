import React from "react";

function Anuncio({titulo, subtitulo, parrafo, linkuno, linkdos}){

    return(
        <div>
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title"> {titulo} </h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary"> {subtitulo} </h6>
                    <p className="card-text"> {parrafo} </p>
                    <a href="#" className="card-link"> {linkuno} </a>
                    <a href="#" className="card-link"> {linkdos} </a>
                </div>
            </div>

        </div>
    )


}

export default Anuncio