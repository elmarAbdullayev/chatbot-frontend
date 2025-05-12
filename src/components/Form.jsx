import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/FormCss.css'

function Form({funk}){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate()
  
    const url = "http://localhost:8000/login";
  
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      const formData = new URLSearchParams();
      formData.append('username', email);
      formData.append('password', password);
    
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: { 
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: formData.toString()
        });
    
        if (!response.ok) {
          throw new Error('Falsche E-Mail oder Passwort');
        }
    
        const result = await response.json();
        funk(result.access_token) // sende ich token zu Component App,damit token zu component Profil weitergeleitet werden kann.
        navigate("/profil")
        alert('Login erfolgreich!');
      } catch (error) {
        setError(error.message);
      }
    };

    const registerClick = (e) => {
      e.preventDefault()
      navigate("/register")

    }

    return(
      <div className='superDiv'>

        <div className='container'>


      <form onSubmit={handleSubmit} className="login-form">

      <h2 className='text-center fs-1'>Login</h2>

      <label htmlFor="email" className=''>E-Mail</label>

        <div className="input-group">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Gib deine E-Mail ein"
            required
          />
        </div>

        <label htmlFor="password">Passwort</label>
        <div className="input-group">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Gib dein Passwort ein"
            required
          />
        </div>

        {error && <p className="error">{error}</p>}

        <div className='buttons'> 
        <button type="submit" className="submit-btn">Einloggen</button>

        <button onClick={(e)=>registerClick(e)}>Register</button>
        </div>
    
     

      </form>
        </div>

        </div>

    )
}


export default Form


