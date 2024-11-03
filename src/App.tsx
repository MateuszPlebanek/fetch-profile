// src/App.tsx
import React, { useState } from 'react';
import EmployeeCard from './components/EmployeeCard';

const initialProfile = {
  name: {
    first: "Charlie",
    last: "Thompson",
  },
  email: "charlie.thompson@example.com",
  picture: {
    medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
  },
};

function App() {
  const [employee, setEmployee] = useState(initialProfile);

  // Fonction pour récupérer un nouvel employé
  const getEmployee = () => {
    fetch("https://randomuser.me/api?nat=en")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Afiche la structure complète des données dans la console
        setEmployee(data.results[0]); // Met à jour l’état avec le profil de l’API
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
      });
  };

  return (
    <div className='App'>
      <EmployeeCard employee={employee} />
      <button type="button" onClick={getEmployee}>Get new profile</button>
    </div>
  );
}

export default App;



