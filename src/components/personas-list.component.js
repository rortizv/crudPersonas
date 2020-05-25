import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Persona = props => (
    <tr>
        <td>{props.persona.usuario}</td>
        <td>{props.persona.password}</td>
        <td>{props.persona.primnom}</td>
        <td>{props.persona.segnom}</td>
        <td>{props.persona.primapel}</td>
        <td>{props.persona.segapel}</td>
        <td>
            <Link to={"/edit/"+props.persona._id}>edit</Link> | <a href="#" onClick={() => { props.deletePersona(prop) }}>delete</a>
        </td>
    </tr>
)

export default class PersonasList extends Component {

    constructor(props) {
        super(props);

        this.deletePersona = this.deletePersona.bind(this);

        this.state = {personas: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/personas/')
            .then(response => {
                this.setState({ personas: response.data})
            })
            .catch((error) => {
                console.log(error);
            }) 
    }

    deletePersona(id) {
        axios.delete('http://localhost:5000/personas/'+id)
            .then(res => console.log(res.data));

        this.setState({
            personas: this.state.personas.filter(el => el._id !== id)
        })
    }

    PersonasList() {
        return this.state.personas.map(currentpersona => {
            return <Persona persona={currentpersona} deletePersona={this.deletePersona} key={currentpersona._id}/>;
        })
    }

    render() {
        return (
            <div>
                <h3>Personas creadas</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Usuario</th>
                            <th>Password</th>
                            <th>Primer nombre</th>
                            <th>Segundo nombre</th>
                            <th>Primer apellido</th>
                            <th>Segundo apellido</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.PersonasList() }
                    </tbody>
                </table>
            </div>
        )
    }
}