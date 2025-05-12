import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Register() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role:'user'
  });
  const [error,setError] = useState("")

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const navigate = useNavigate()


  const url = "http://localhost:8000/register";


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data:", formData);

  
      try {
        const request  = await fetch(url,{
          method : "post",
          headers: { "Content-Type": "application/json" },
          body : JSON.stringify(formData)

       })

       if(!request.ok){
        throw new Error("Diese Email ist schon benutzt.")
    }

    navigate("/")
    console.log("Hello ")
      } catch (error) {
        setError(error.message)
      }

   
      

   };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3>Registrieren</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Benutzername</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.username}
            onChange={handleChange}
            required />
        </div>

        <div className="mb-3">
          <label className="form-label">E-Mail</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required />
        </div>

        <div className="mb-3">
          <label className="form-label">Passwort</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required />
        </div>

        <h6 className='text-danger'>{error}</h6>

        <button type="submit" className="btn btn-primary w-100">Registrieren</button>
      </form>
    </div>
  );
}

export default Register;
