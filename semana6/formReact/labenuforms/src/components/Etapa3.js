import React from 'react';


class Etapa3 extends React.Component {

    state = {
        valorInputGraduacao: '',
    }

    onChangeInputGraduacao = (event) => {
        this.setState({ valorInputGraduacao: event.target.value });
    };

    render() {

        return (
            <div className="etapa3">
                <h3>ETAPA 3: Informações sobre quem não se formou no ensino superior (ou nem está cursando).</h3>

                <p>1. Por que você não terminou um curso de graduação? </p>
                <input
                    onChange ={this.onChangeInputGraduacao}
                    value={this.state.valorInputGraduacao}
                />

                <p>2. Você fez algum curso complementar?</p>
                    <select>
                        <option value= "" disabled selected>Selecione o Curso Complementar</option>
                        <option value="curso-tecnico">Curso Técnico</option>
                        <option value="curso-ingles">Curso de Inglês</option>
                        <option value="nao-curso">Não fiz curso complementar</option>
                    </select>

            </div>
        );
    }

}

export default Etapa3; 