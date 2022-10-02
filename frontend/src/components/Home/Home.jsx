import React, { useState } from 'react'
import { WebcamCapture} from '../Webcam/Webcam'


const Home = (input) => {
//setSelectedImage = {setSelectedImage} selectedImage = {selectedImage}
    // const submitForm = () => {
    //     input.setSelectedImage(document.getElementById("login-button"))
    //     alert("Form submitted");
    // }

    return (
        <form className="form">
            <WebcamCapture setSelectedImage = {input.setSelectedImage} selectedImage = {input.selectedImage}/>
            {/* <span classname="submitButton">
                <button type="submit" class="btn btn-success" onClick={(e) => submitForm(e)}>Submit</button>
            </span> */}
        </form>
    )
}
export default Home
