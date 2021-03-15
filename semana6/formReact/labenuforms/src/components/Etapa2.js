import React from 'react';

class Etapa2 extends React.Component {

    state = {
        valorInputCurso: '',
        valorInputEnsino: '',
    }

    onChangeInputCurso = (event) => {
        this.setState({ valorInputCurso: event.target.value });
    };

    onChangeInputEnsino = (event) => {
        this.setState({ valorInputEnsino: event.target.value });
    };

    render() {

        return (
            <divdiv className="etapa2">
                <h3>ETAPA 2: Informações educacionais para quem está cursando (ou já terminou) o ensino superior </h3>

                <p>1. Qual o curso?</p>
                <input
                    onChange ={this.onChangeInputCurso}
                    value={this.state.valorInputCurso}
                />

                <p>2. Qual a unidade de ensino?</p>
                <input
                    onChange ={this.onChangeInputEnsino}
                    value={this.state.valorInputEnsino}
                />

            </divdiv>
        )
    }

}

export default Etapa2; 