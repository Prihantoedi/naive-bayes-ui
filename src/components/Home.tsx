import React , {useState} from 'react';
import Navbar from './Navbar';

import Guide  from './Buttons/HomeButtons/Guide';
import TrainForm from './Buttons/HomeButtons/TrainForm';

function Home() {
  
  const [trainProcess, setTrainProcess] = useState(false);

  function changeTrainProcess(value: boolean){
    setTrainProcess(value);
  }

  
  return (
    <>
        {
         trainProcess && 
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
          <Guide/>
          <TrainForm changeTrainProcess={changeTrainProcess}/>
        </div>

      
    </>
    
  )
}

export default Home