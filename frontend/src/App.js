import logo from './images/logo.png';
import axios from 'axios';
import React from 'react';
import Home from './components/Home/Home'
import './App.css';

import sammple from'./images/phto.png';


let api = axios.create({
  baseURL: "http://localhost:3001/img-upload",
})

let config = {
  headers: {
    // 'accept': 'application/json',
    // 'Accept-Language': 'en_US,en;q=0.8',
    'Content-Type': 'multipart/form-data',
    'Accept': '*/*',
    'Accept-Encoding': 'Accept-Encoding',
    'Connection': 'keep-alive'
  } 
}

const App = () => {
  const [selectedImage, setSelectedImage] = React.useState(null);
// //
  const [table, setTable] = React.useState(
  <table className='theTable'>
  <tr >
      <th>Items</th>
      <th>Cost</th>
      <th>Do We Ensure?</th>
  </tr>
  <tr>
      <td>IPhone</td>
      <td>$1000</td>
      <td>Yes (Renters, Business)</td>
  </tr> 
  <tr>
      <td>Dog</td>
      <td>$120</td>
      <td>Yes (Pet Insurance)</td>
  </tr>
  <tr>
      <td>Chicken Sandwich</td>
      <td>$5</td>
      <td>No (sadly)</td>
  </tr>
</table> );
  // var bodyFormData = new FormData();


  async function getInfo(){

    // let uinfo= await api.post('/', {"username":username}, config)
    // .then(response=> (response.data))
    // return uinfo
   
    /// we want to send selected image, but we want to send it as a file
    // bodyFormData.append("file", )
    // setTimeout(()=>api.post('/', {"file":selectedImage}, config), )
    // setSelectedImage(sammple)

    var formData = new FormData();

    // var imagefile = document.querySelector('#file');

    formData.append("file", sammple);//imagefile.files[0]
    await api.post('/', {data: {"file": sammple}}, config).catch(e => (console.error(e)));

    // axios({
    //   method: 'post',
    //   url: 'http://localhost:3001/img-upload',
    //   data: {
    //     file: sammple
    //   }
    // });
    
    // let uinfo= await api.post('/', {"file":selectedImage}, config)
    // .then(response=> (response.data))
    // console.log(uinfo)
    // return uinfo
  }

  function goToStart(){
    setSelectedImage(null)
  }

  function insureItems(){
    setTable(<table className='theTable'>
    <tr >
        <th>Items</th>
        <th>Insure?</th>
    </tr>
    <tr>
        <td>IPhone</td>
        <td>checkBox</td>
    </tr> 
    <tr>
        <td>Dog</td>
        <td>checkBox</td>
    </tr>
</table>)
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
          {/* <img src={logo} class="rounded float-left"/>
          Statefarm */}
        </div>
      </div>
    );
  }
  else{
    // Image is received here, create the website

    // async function f(){
    //   setDisplay(await getInfo())
    // }

    // f()

    return (
      <div>
        <div className='bar'>
          <img src={logo} class="rounded float-left"/>
          State Farm
        </div>
        {/* <img src={selectedImage}/> */}
        {selectedImage}
        <div className='mainPage center'>
          {table}
        <button class="btn btn-primary anotherButton" onClick = {() => goToStart()} > Scan Another Reciept?</button>
        <button class="btn btn-primary anotherButton" onClick = {() => insureItems()} > Insure Items?</button>
        </div>
        <div className='bottombar'>

        </div>
      </div>
    );
  }
};

export default App;
