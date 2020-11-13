import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from 'react';

function App() {
  const [output,setOutput]=React.useState(null);
  const [Create,setCreate]=React.useState(null);
  const [Edit,setEdit]=React.useState(null);
  const [Delete,setDelete]=React.useState(null);
  const [id,setId]=React.useState(null);
  const [title,setTitle]=React.useState(null);
  const [body,setBody]=React.useState(null);
  const [userID,setUserID]=React.useState(null);
  const [image,setImage]=React.useState(null);
  const show=()=>{
      const data = {
       id:id,
       title:title,
       body:body,
       userID:userID,
       image:image,
    }
    axios.post('http://localhost:5000/post/showPost',data)
    .then(function (res) {
        console.log(res.data);
     setOutput(JSON.stringify(res.data));
    })
    .catch(function (err) {
        console.log(err)
    });
};
const create=()=>{
    const data = {
     id:id,
     title:title,
     body:body,
     userID:userID,
     image:image,
  }
    axios.post('http://localhost:5000/post/createPost',data)
    .then(function (res) {
        console.log(res.data);
     setCreate(JSON.stringify(res.data));
    })
    .catch(function (err) {
        console.log(err)
    });
};
const edit=()=>{
    const data = {
     id:id,
     title:title,
     body:body,
     userID:userID,
     image:image,
  }
    axios.post('http://localhost:5000/post/editPost',data)
    .then(function (res) {
        console.log(res.data);
     setEdit(JSON.stringify(res.data));
    })
    .catch(function (err) {
        console.log(err)
    });
};
const delet=()=>{
    const data = {
     id:id,
     title:title,
     body:body,
     userID:userID,
     image:image,
  }
    axios.post('http://localhost:5000/post/deletePost',data)
    .then(function (res) {
        console.log(res.data);
     setDelete(JSON.stringify(res.data));
    })
    .catch(function (err) {
        console.log(err)
    });
};
  return (
    <div>
      <h3>create: </h3>
        <form >
            title: <input type="text" onChange={text=>setTitle(text.target.value)} />
            body: <textarea type="text" onChange={text=>setBody(text.target.value)} > </textarea>
            UserID: <input type="text" onChange={text=>setUserID(text.target.value)} />
            image:<input type="file" onChange={text=>setImage(text.target.value)} />
            {Create}
            <button onClick={()=>create()}>send</button>
        </form><br/>

        <h3>Edit: </h3>
        <form >
            id: <input type="text" onChange={text=>setId(text.target.value)} />
            title: <input type="text" onChange={text=>setTitle(text.target.value)} />
            body: <textarea type="text" onChange={text=>setBody(text.target.value)}> </textarea>
            UserID: <input type="text" onChange={text=>setUserID(text.target.value)} />
            image:<input type="file" nonChange={text=>setImage(text.target.value)} />
            {Edit}
            <button onClick={()=>edit()}>send</button>
        </form><br/>

        <h3>Delete</h3>
        <form >
           id: <input type="text" onChange={text=>setId(text.target.value)} />
           {Delete}
             <button onClick={()=>delet()}>send</button>
        </form><br/>
        {output}
        <button onClick={()=>show()}>send</button>
    </div>
  );
}

export default App;
