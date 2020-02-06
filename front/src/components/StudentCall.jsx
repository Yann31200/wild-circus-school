import React, { Component } from 'react';
import axios from 'axios';
import StudentsList from './StudentsList';

class StudentCall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios
      .get('/wcs/students')
      .then(res => res.data)
      .then(data =>
        this.setState({
          students: data
        })
      );
  }

  render() {
    const { students } = this.state;
    return (
      <div>
        <StudentsList
          students={students}
        />
      </div>
    )
  }

}

export default StudentCall;
