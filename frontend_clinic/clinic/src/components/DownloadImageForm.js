import React from 'react';
import axios from 'axios'

const DownloadImageForm = () => {
    let formData = new FormData();

    const onFileChange = (e) => {
        console.log(e.target.files[0])

        if(e.target && e.target.files[0]){
            formData.append('file',e.target.files[0])
        }
    }

    const submitFileData = () => {
        axios.post("https://v2.convertapi.com/upload",{formData})
          .then(res=>{
            console.log(res)
          })
          .catch( err => {
            console.error('Ошибка логирования')
          })
    }

    return (
        <>
          <div>
            <input type='file' name='file_upload' onChange={onFileChange}></input>
          </div>

          <div>
            <button onClick={submitFileData}>Submit data</button>
          </div>
        
        </>
    );
};

export default DownloadImageForm;