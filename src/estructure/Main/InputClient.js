import React, { Component } from "react"
import "../../App.css"

class InputClient extends Component {
    constructor() {
        super()
        this.state = {
            clientName: "",
            tempClientName: ""
        }
        this.temporalName = this.temporalName.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
    }
    temporalName(e) {
        this.setState({
            tempClientName: e.target.value
        })
    }
    onChangeName() {
        this.setState({
            clientName: this.state.tempClientName,
            tempClientName:""
        })
    }
    render() {
        return (
            <section className="inputClient">
                <input type="text" placeholder="Ingresa tu nombre" onChange={this.temporalName} value={this.state.tempClientName}/>
                <button onClick={this.onChangeName}>Enviar</button>
                <h1 className="clientName">Cliente: {this.state.clientName}</h1>
            </section>
        );
    }
}
export default InputClient