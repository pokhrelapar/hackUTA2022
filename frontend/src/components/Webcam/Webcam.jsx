import React, { useState } from 'react';
import Webcam from "react-webcam";


const WebcamComponent = () => <Webcam />;

const videoConstraints = {
    width: 500,
    height: 450,
    className:'webcam',
    facingMode: "user"
};

export const WebcamCapture = (input) => {

    const [image,setImage]=useState('');
    const webcamRef = React.useRef(null);

    
    const capture = React.useCallback(
        () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc)
        });
    
    const submitForm = () => {
        // input.setSelectedImage(document.getElementById("login-button"))
        input.setSelectedImage(image)
        alert("Form submitted");
    }


    return (
            <div className="webpage">
                <span className="webcam">

                    {image == '' ? <Webcam
                        audio={false}
                        height={450}
                        // className='webcam'
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        width={500}
                        videoConstraints={videoConstraints}
                    /> : <img src={image} />}
                </span>
                <br />
                <span>
                    {image != '' ?
                        <button onClick={(e) => {
                            e.preventDefault();
                            setImage('')
                        }}
                            className="captureButton">
                            Retake</button> :
                        <button onClick={(e) => {
                            e.preventDefault();
                            capture();
                        }}
                        className='captureButton'>Capture</button>
                    }
                </span>

                <span classname="submitButton">
                <button type="submit" class="submitButton" onClick={(e) => submitForm(e)}>Submit</button>
                </span>
            </div>
    );
};
//input.setSelectedImage(imageSrc)