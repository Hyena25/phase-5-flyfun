import { useState } from 'react';

function Profile ({ userData, updateUser }) {
  const [fullName, setFullName] = useState(userData.full_name);
  const [username, setUsername] = useState(userData.username);
  const [email, setEmail] = useState(userData.email);
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
        full_name: fullName, 
        username: username, 
        email: email, 
        password: password
    };
    fetch(`/users/${userData.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((data) => {
          updateUser(data);
          alert("Your changes have been saved!");
        });
      } else {
        res.json()
        .then((data) => {
          setErrors(data.error);
          alert("An error occurred. Changes were not saved.");
        });
      }
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        </label>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Save Changes</button>
      </form>
      {errors ? <p>{errors}</p> : null}
    </>
  )
}

export default Profile