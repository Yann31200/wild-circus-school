import React from 'react';

const StudentsList = ({ students }) =>
  students.map(student => (
    <div className="student-list">
      {/* <div> */}
      <p className="last-name-list">{student.lastname}</p>
      <p className="first-name-list"> {student.firstname}</p>
      <p className="phone-list">{student.phone}</p>
      <p className="mail-list">{student.mail}</p>
      {/* </div> */}
      {/* <div className="coordonnées"> */}
    </div >
  ));
export default StudentsList;