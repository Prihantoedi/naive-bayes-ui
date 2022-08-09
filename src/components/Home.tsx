import React , {useState} from 'react';
import Navbar from './Navbar';
import  { Redirect, useHistory } from 'react-router-dom';
import { setTimeout } from 'timers/promises';
function Home() {
  const history = useHistory();
  const [fileName, setFileName] = useState("Upload");
  const [showError, setShowError] = useState(false);
  const [disabledTrain, setDisabledTrain] = useState(true);
  const [trainBtnClass, setTrainBtnClass] = useState("train-btn mt-3 disabled");
  const [trainProcess, setTrainProcess] = useState(false);
  const changeHandler = (event: any) => {
     setFileName(event.target.files[0].name);
      let tempFileName = event.target.files[0].name;
      let splitFileName = tempFileName.split(".");
      if (splitFileName[splitFileName.length - 1] !== "csv"){
        setShowError(true);
        setTrainBtnClass("train-btn mt-3 disabled");
      } else{
        setShowError(false); 
        setDisabledTrain(false);
        setTrainBtnClass("train-btn mt-3")
      }
  }

  const submit = (event: any) => {
    event.preventDefault();
    setTrainProcess(true);

    window.setTimeout( () => history.push("/train"), 5000);
    // const goToTrain : any = ()  => history.push("train");
    // setTimeout( goToTrain , 5000);
    
    // 
  }
  return (
    <>
        { trainProcess && 
          <div className="spinner-load">
            <div><h5 style={{color: "#fff"}}>Training Data...</h5></div>
            <div className="spinner-border text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        }
        
        { trainProcess &&
          <div className="wrapper">
          </div>
        }

        
        <Navbar/>
        
        

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
            <div>{showError && <h4 style={{color: "red"}}>Data is not in csv format, please reupload data again</h4>}</div>
            <div>
              <label htmlFor="file-upload" className="file-upload-btn mt-3">{fileName}</label>
              <input id="file-upload" type="file" onChange={changeHandler}/>
              </div>
            <div><input className={trainBtnClass} type="submit" value="Train Data" disabled={disabledTrain}/></div>
          </div>
        </form>

          
      </div>

      

    <div className="modal fade" id="loginModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            ...
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>

    </>
    
  )
}

export default Home