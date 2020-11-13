import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from 'react';

function App() {
  const [output,setOutput]=React.useState(null);
  const [register,setRegister]=React.useState(null);
  const [login,setLogin]=React.useState(null);
  const [username,setUsername]=React.useState(null);
  const [password,setPassword]=React.useState(null);
  const [email,setEmail]=React.useState(null)
  const show=()=>{
    const data = {
      username:username,
      password:password,
      email:email
    }
    axios.post('http://localhost:5000/author/showauthor',data)
    .then(function (res) {
        console.log(res.data);
     setOutput(JSON.stringify(res.data));
    })
    .catch(function (err) {
        console.log(err)
    });
    axios.post('http://localhost:5000/author/register',data)
    .then(function (res) {
        console.log(res.data);
     setRegister(JSON.stringify(res.data));
    })
    .catch(function (err) {
        console.log(err)
    });
    axios.post('http://localhost:5000/author/login',data)
    .then(function (res) {
        console.log(res.data);
     setLogin(JSON.stringify(res.data));
    })
    .catch(function (err) {
        console.log(err)
    });
    };
  return (
    <div>
<h3>register:</h3>
    <form >
    username: <input type="text" onChange={text=>setUsername(text.target.value)} />
     password: <input type="password" onChange={text=>setPassword(text.target.value)} />
       email:<input type="email" onChange={text=>setEmail(text.target.value)} />
       {register}
      <button onClick={()=>show()}>send</button>
    </form><br />
    <h3>login: </h3>
    <form >
     username: <input type="text" onChange={text=>setUsername(text.target.value)} />
     password: <input type="password" onChange={text=>setPassword(text.target.value)} />
     {login}
      <button onClick={()=>show()}>send</button>
    </form><br />
    {output}
        <button onClick={()=>show()}>send</button>
    </div>
  );
} 

export default App;
