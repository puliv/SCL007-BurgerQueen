import React, { Component } from "react";
import { connect } from 'react-redux'
import "../../App.css";
import { addName } from "../../redux/actions/burgerActions";

class InputClient extends Component {
    constructor() {
        super()
        this.state = {
            tempClientName: ""
        }
        // this.temporalName = this.temporalName.bind(this);
        // this.onChangeName = this.onChangeName.bind(this);
    }
    temporalName = (e) => {
        this.setState({
            tempClientName: e.target.value
        })
    }
    onChangeName = () => {
        this.props.putNameInState(this.state.tempClientName);
    }
    render() {
        return (
            <section className="inputClient">
                <input
                    type="text"
                    placeholder="Nombre del Cliente"
                    onChange={this.temporalName}
                    value={this.state.tempClientName}
                />
                <button
                    onClick={this.onChangeName}>Enviar
                </button>
                <h1
                    className="clientName">
                    Cliente: {this.props.burgerReducer.clientName}
                </h1>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    };
};

const mapActionsToProps = (dispatch) => {
    return {
        putNameInState: addName(dispatch)
    }
};

export default connect(mapStateToProps, mapActionsToProps)(InputClient)
