
function Register(){


     return(
        <div>
              <form>
      <h2>Register</h2>

      <label>Email:</label><br />
      <input type="email" name="email" required /><br /><br />

      <label>Username:</label><br />
      <input type="text" name="username" required /><br /><br />

      <label>Password:</label><br />
      <input type="password" name="password" required /><br /><br />

      <button type="submit">Register</button>
    </form>
        </div>
     )


}

export default Register;