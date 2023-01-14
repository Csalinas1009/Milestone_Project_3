import React from 'react'
import { useEffect, useRef } from 'react'

function UploadWidget() {
  
  const cloudinaryRef = useRef();
  const widgetRef = useRef(); 
    
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName: 'dnvcvykye',
      uploadPreset: 'wxbhcxky'
    }, function(error, result){
      console.log(result)
      console.log(error)
    });
  }, [])
  
  return (
    <button onClick={() => widgetRef.current.open()}>Upload</button>
  )
}

export default UploadWidget;