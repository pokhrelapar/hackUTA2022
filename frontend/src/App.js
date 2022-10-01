import logo from './images/logo.png';
import axios from 'axios';
import React from 'react';
import Home from './components/Home/Home'
import './App.css';

let api = axios.create({
  baseURL: "http://localhost:5000/",
})

let config = {
  headers: {
     'Content-Type': 'application/json',
  } 
}

const App = () => {
  const [selectedImage, setSelectedImage] = React.useState(null);

  return (
    <div>
      <div className='bar'>
        <img src={logo} width="130" height="80"/>
        State Farm
      </div>
      <Home/>
    </div>
  );
};

// export default UploadAndDisplayImage;
  // let [result, setResult] = React.useState("noResultYet")

  // function sendToBackend(){
  //   console.log(document.getElementById("customFile").value)
  // }

  // return (
  //   <div className="App">
  //     This is the application
  //     <br/>
  //     Input the reciept below, it will then be sent to the front end to be parsed and return the data
  //     <input type="file" class="form-control" id="customFile" />
  //     <br/>
  //     <button type="button" class="btn btn-success" onCapture={() => sendToBackend()}>Primary</button>
  //   </div>
  // );
// }

export default App;
