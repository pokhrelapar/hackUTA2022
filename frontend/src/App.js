import logo from './images/logo.png';
import axios from 'axios';
import React from 'react';
import Home from './components/Home/Home'
import './App.css';

import sammple from'./images/sample.png';


let api = axios.create({
  baseURL: "http://localhost:3001/img-upload",
})

let config = {
  headers: {
     'Content-Type': 'multipart/form-data',
  } 
}

const App = () => {
  const [selectedImage, setSelectedImage] = React.useState(null);

  var bodyFormData = new FormData();

  async function getInfo(){
    /// we want to send selected image, but we want to send it as a file
    let uinfo= await api.post('/', {"file":sammple}, config)
    .then(response=> (response.data))
    console.log(uinfo)
    return uinfo
  }

  if(selectedImage == null){
    return (
      <div>
        <div className='bar'>
          <img src={logo} class="rounded float-left"/>
          State Farm
        </div>
        <Home setSelectedImage = {setSelectedImage} selectedImage = {selectedImage}/>
        <div className='bottombar'>
          <img src={logo} class="rounded float-left"/>
          Statefarm
        </div>
      </div>
    );
  }
  else{
    // Image is received here, create the website
    return (
      <div>
        <div className='bar'>
          <img src={logo} class="rounded float-left"/>
          State Farm
        </div>
        <img src={selectedImage}/>
        {/* {console.log("Hello")} */}
        {getInfo()}
        {bodyFormData.append('image', selectedImage)}
        <div className='bottombar'>
          <img src={logo} class="rounded float-left"/>
          Statefarm
        </div>
      </div>
    );
  }
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
