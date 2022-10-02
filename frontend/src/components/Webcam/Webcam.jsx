import React, { useState } from 'react';
import Webcam from "react-webcam";


const WebcamComponent = () => <Webcam />;

const videoConstraints = {
    width: '100%',
    height: '60%',
    // className:'webcam',
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
                        height={'60%'}
                        // className='webcam'
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        width={'100%'}
                        videoConstraints={videoConstraints}
                    /> : <img src={image} />}
                </span>
                <br />
                <span className='captureButton'>
                    {image != '' ?
                        <button onClick={(e) => {
                            e.preventDefault();
                            setImage('')
                        }}
                            class="btn btn-primary">
                            Retake Image</button> :
                        <button onClick={(e) => {
                            e.preventDefault();
                            capture();
                        }}
                        class="btn btn-primary">Capture</button>
                    }
                </span>

                <span classname="submitButton">
                <button type="submit" class="btn btn-success" onClick={(e) => submitForm(e)}>Submit</button>
                </span>
            </div>
    );
};
//input.setSelectedImage(imageSrc)