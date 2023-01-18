import React from 'react';
import { useState } from 'react';
import "../styles/styles.css"
import Axios from 'axios';



function UploadWidget() {
  
  const [file, setFile] = useState()

  function handleSubmit(e) {
    e.preventDefault()
  }
  
  const uploadFile = () => {
    const formData = new FormData();
    formData.append("image", file)
    console.log(formData);
    Axios.post("https://instafraud.herokuapp.com/upload/image", formData).then((response) => {
      console.log(response)
    })
    .catch(err=>console.log(err))
  }
  return(
    <div>
      <h1>file uploader</h1>
      <input type="file" onChange={(e) =>{ setFile(e.target.files[0]); console.log(e.target.files[0])}}/>
      <button onClick={() =>uploadFile()} onSubmit={handleSubmit}>upload file</button>
    </div>
  )
}

export default UploadWidget;




