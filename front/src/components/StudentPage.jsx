import React from 'react';
import StudentCall from './StudentCall';
import './studentPage.css';

function StudentPage() {
  return (
    <div>
      <h2 className="student-page-title">Liste des Etudiants</h2>
      <StudentCall />
    </div>
  )
}

export default StudentPage;
