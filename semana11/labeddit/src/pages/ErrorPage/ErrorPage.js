import React from "react"
import ImageError from "../../assets/img/error-page-404.png"
import { ImageErrorStyled } from "./styled"

const ErrorPage = () => {


    return(
        <ImageErrorStyled>
            <img src={ImageError} alt="imagem com robô quebrado para a página de erro 404"/>

        </ImageErrorStyled>
    )
}

export default ErrorPage