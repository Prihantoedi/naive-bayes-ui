import React, {SyntheticEvent, useState} from 'react';

import './App.css';


function App() {
  const [fileName, setFileName] = useState("Upload");
  const changeHandler = (event: any) => {
     setFileName(event.target.files[0].name);

  }

  const submit = (event: any) => {
    event.preventDefault();
  }

  return (

    <div className="container homepage">
        <div className="toptext"><h2>NAIVE BAYES CLASSIFIER</h2></div>
        <button type="button" className="btn btn-modal-home" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Guide
        </button>


        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                Petunjuk
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      
      

      <form onSubmit={submit} encType="multipart/form-data">
        <div className="form-control">
          <div> <label htmlFor="">Upload Data Here (csv format)</label></div>
          <div>
            <label htmlFor="file-upload" className="file-upload-btn mt-3">{fileName}</label>
            <input id="file-upload" type="file" onChange={changeHandler}/>
            </div>
          <div><input className="train-btn mt-3" type="submit" value="Train Data"/></div>
        </div>
      </form>

        
    </div>

    
   
  );
}

export default App;
