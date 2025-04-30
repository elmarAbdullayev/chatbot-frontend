import { useEffect, useState } from "react";

function Profil({ token }) {

  const url = "http://localhost:8000/profil";

  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem('userData');
    return savedData ? JSON.parse(savedData) : null;
  });

  useEffect(() => {

    async function fetchData() {
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });

        if (!response.ok) {
          console.log("Etwas ist falsch");
          return; // Falls der Response nicht ok ist, gehe nicht weiter
        }

        const info = await response.json();
        setData(info.data); // setze den Zustand korrekt
        localStorage.setItem('userData', JSON.stringify(info.data));
      } catch (error) {
        console.error("Fehler:", error); // Fehlerprotokollierung
      }
    }

    fetchData();
  }, [token]); 

  
  if (data === null) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      {data.privatdata ? (
        <div>
          <h1>{data.privatdata.name}</h1>
          <p>Alter: {data.privatdata.age}</p>
          <p>Beruf: {data.privatdata.job}</p>

        <p>FirstProgrammLanguage: {data.programmlanguages.first}</p>
        <p>SecondProgrammLanguage: {data.programmlanguages.second}</p>
        </div>




      ) : (
        <p>Fehler: Keine Profil-Daten gefunden.</p>
      )}
    </div>
  );
}

export default Profil;
