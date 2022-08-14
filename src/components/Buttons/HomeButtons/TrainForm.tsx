import React, { useState } from 'react';
import axios from 'axios';
import  { useHistory } from 'react-router-dom';

interface TrainProps{
    changeTrainProcess: (value: boolean) =>  void;
}

function TrainForm({ changeTrainProcess}: TrainProps) {
    const [fileName, setFileName] = useState("Upload");
    const [showError, setShowError] = useState(false);
    const [disabledTrain, setDisabledTrain] = useState(true);
    const [trainBtnClass, setTrainBtnClass] = useState("train-btn mt-3 disabled");
    const [csvFile, setCsvFile] = useState("");

    const history = useHistory();

    const submit = async(event: any) => {
        event.preventDefault();
        changeTrainProcess(true);
    
        const formData = new FormData();
    
        formData.append("csvFile", csvFile);
    
        try {
          const response = await axios({
            method: "post",
            url : "http://127.0.0.1:5000/api/main",
            data: formData,
            headers: {"Content-Type": "multipart/form-data"},
          });
          console.log(response);
          changeTrainProcess(false);
          history.push("/train");
        //   window.setTimeout( ()=> history.push("/train"), 5000);
        } catch(error){
          console.log(error);
        }    
      
      }



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
                setTrainBtnClass("train-btn mt-3");
                setCsvFile(event.target.files[0]);
            }
    }
  return (
    <>
        <form onSubmit={submit}>
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
    </>
  )
}

export default TrainForm