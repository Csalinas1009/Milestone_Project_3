import React, { useState } from 'react';
import Axios from 'axios';
import "../styles/styles.css"



function UploadWidget() {
  
  const [image, setImage] = useState("");
  
  const onChange = e => {
    setImage(e.target.files[0]);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', "wxbhcxky");
    try {
      
      const res = await Axios.post(`https://instafraud.herokuapp.com/image/`, formData);
      const imageUrl = res.data.secure_url;
      const image = await Axios.post('https://instafraud.herokuapp.com/image/', {
        imageUrl
      });
     
      setImage(image.data);
    } catch (err) {
      console.error(err);
    }
  };

  
  
  return(
    <div className='upload-container'>
  <><div className='widget'>
      <div className='file-field input-field'>
        <div className='btn'>
          <input type='file' onChange={onChange} />
        </div>
        <div className='file-path-wrapper'>
        </div>
      </div>
    </div><div>
        <button onClick={onSubmit} className='btn center'>
          submit
        </button>
      </div></>
      </div>
  )
}

export default UploadWidget;