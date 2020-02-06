import React, { Component } from 'react';
import axios from 'axios';

class FormInscription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      phone: '',
      mail: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    const { firstname, lastname, phone, mail } = this.state;
    e.preventDefault();
    axios
      .post('/wcs/students', {
        firstname,
        lastname,
        phone,
        mail
      });
  }

  render() {
    const {
      lastname,
      firstname,
      phone,
      mail
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
                name="mail"
                value={mail}
                onChange={this.handleChange}
                placeholder=" Mail"
                required
              />
            </label>
          </div>
          <div className="form-under-box">
          </div>
          <input type="submit" value="Enregistrer" className="form-person-button"
          />
        </form>
      </div>
    );
  }
}

export default FormInscription;
