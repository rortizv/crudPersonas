import React, { Component } from 'react';
import axios from 'axios';

export default class EditPersona extends Component {

    constructor(props) {
        super(props);

        this.onChangeUsuario = this.onChangeUsuario.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangePrimnom = this.onChangePrimnom.bind(this);
        this.onChangeSegnom = this.onChangeSegnom.bind(this);
        this.onChangePrimapel = this.onChangePrimapel.bind(this);
        this.onChangeSegapel = this.onChangeSegapel.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = { 
            usuario = '',
            password = '',
            primnom = '',
            segnom = '',
            primapel = '',
            segapel = ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/personas/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    usuario: response.data.usuario,
                    password: response.data.password,
                    primnom: response.data.primnom,
                    segnom: response.data.segnom,
                    primapel: response.data.primapel,
                    segapel: response.data.segapel
                })
            })
            .catch(function (error) {
                console.log(error);
            })

        axios.get('http://localhost:5000/users/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        users: response.data.map(user => user.username),
                    })
                }
            })
    }

    onChangeUsuario(e) {
        this.setState({
            usuario: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onChangePrimnom(e) {
        this.setState({
            primnom: e.target.value
        });
    }

    onChangeSegnom(e) {
        this.setState({
            segnom: e.target.value
        });
    }

    onChangePrimapel(e) {
        this.setState({
            primapel: e.target.value
        });
    }

    onChangeSegapel(e) {
        this.setState({
            segapel: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const persona = {
            usuario: this.state.usuario,
            password: this.state.password,
            primnom: this.state.primnom,
            segnom: this.state.segnom,
            primapel: this.state.primapel,
            segapel: this.state.segapel
        }

        console.log(persona);

        axios.post('http://localhost:5000/personas/update'+this.props.mach.params.id, persona)
            .then(res => console.log(res.data));

        window.location = '/';
    }

    render() {
        return (
            <div>
                <h3>Editar Persona</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Usuario: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.usuario}
                            onChange={this.onChangeUsuario}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input type="password"
                            required
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                        />
                    </div>
                    <div className="form-group">
                        <label>Primer nombre: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.primnom}
                            onChange={this.onChangePrimnom}
                        />
                    </div>
                    <div className="form-group">
                        <label>Segundo nombre: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.segnom}
                            onChange={this.onChangeSegnom}
                        />
                    </div>
                    <div className="form-group">
                        <label>Primer apellido: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.primapel}
                            onChange={this.onChangePrimapel}
                        />
                    </div>
                    <div className="form-group">
                        <label>Segundo apellido: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.segapel}
                            onChange={this.onChangeSegapel}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Editar Persona" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}