import React from 'react';
import './Habilidades.css'

function Habilidades(props) {
    return (
        <div className="image-habilidades-container">
            <img src={ props.imagem }/>
            <p>{ props.texto }</p>
        </div>

    )
}

export default Habilidades;