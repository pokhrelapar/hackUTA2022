import React, { useState } from 'react'
import { WebcamCapture} from '../Webcam/Webcam'


const Home = () => {



    const submitForm = () => {
        alert("Form submitted");
    }


    return (
        <form className="form">
            <WebcamCapture/>
            <button type="submit" id="login-button" class="btn btn-success" onClick={(e) => submitForm(e)}>Submit</button>
        </form>
    )
}
export default Home
