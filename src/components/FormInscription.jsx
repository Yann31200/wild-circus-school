import React, { Component } from 'react';
import axios from 'axios';

class FormInscription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      phone: '',
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      firstname,
      lastname,
      phone,
      email
    } = this.state;

    axios.post('/wcs/student', {
      firstname,
      lastname,
      phone,
      mail: email,
    });
  }

  render() {
    const {
      firstname,
      lastname,
      phone,
      email
    } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form-style">
          <div className="form-left-box">
            <p className="form-picture" />
            <label htmlFor="lastname" className="form-lastname">
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={lastname}
                onChange={this.handleChange}
                placeholder=" Nom"
                required
              />
            </label>
            <label htmlFor="firstname" className="form-firstname">
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={firstname}
                onChange={this.handleChange}
                placeholder=" Prénom"
                required
              />
            </label>
          </div>
          <div className="form-right-box">
            <label htmlFor="phone" className="form-phone">
              <input
                type="text"
                id="phone"
                name="phone"
                value={phone}
                minLength="10"
                maxLength="10"
                onChange={this.handleChange}
                placeholder=" Téléphone"
                required
              />
            </label>
            <label htmlFor="mail" className="form-mail">
              <input
                type="text"
                id="mail"
                name="email"
                value={email}
                onChange={this.handleChange}
                placeholder=" Mail"
                required
              />
            </label>
          </div>
          <div className="form-under-box">
          </div>
          <input type="submit" value="Enregistrer" className="form-person-button" />
        </form>
      </div>
    );
  }
}

export default FormInscription;
