import React from 'react';

class Etapa1 extends React.Component {

    state = {
        valorInputNome: '',
        valorInputIdade: '',
        valorInputEmail: '',
    }

    onChangeInputNome = (event) => {
        this.setState({ valorInputNome: event.target.value });
    };

    onChangeInputIdade = (event) => {
        this.setState({ valorInputIdade: event.target.value });
    };

    onChangeInputEmail = (event) => {
        this.setState({ valorInputEmail: event.target.value });
    };

    render() {

        return (
            <div className="etapa1">
                <h3>ETAPA 1 - DADOS GERAIS</h3>

                <p>1. Qual é o seu nome?</p>
                <input
                    onChange ={this.onChangeInputNome}
                    value={this.state.valorInputNome}
                />

                <p>2. Qual é a sua idade?</p>
                <input
                    onChange ={this.onChangeInputIdade}
                    value={this.state.valorInputIdade}
                />

                <p>1. Qual é o seu email?</p>
                <input
                    onChange ={this.onChangeInputEmail}
                    value={this.state.valorInputEmail}
                />

                <p>Qual é a sua escolaridade?</p>
                    <select>
                        <option value= "" disabled selected>Selecione a escolaridade</option>
                        <option value="medio-incompleto">Ensino Médio Incompleto</option>
                        <option value="medio-completo">Ensino Médio Completo</option>
                        <option value="superior-incompleto">Superior Incompleto</option>
                        <option value="superior-completo">Superior Completo</option>
                    </select>

            </div>
        );
    }

}

export default Etapa1; 