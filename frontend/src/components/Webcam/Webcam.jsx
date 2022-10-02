import React, { useState } from 'react';
import Webcam from "react-webcam";
import axios from 'axios';


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
        var articleId = '';
        const bodytest = { input: 'React POST Request Example' };
        // axios.post('http://localhost:3001/imgpost-upload', bodytest)
        // .then(response => this.setState({ articleId: response}));
        axios
      .post('http://localhost:3001/imgpost-upload', {
        input: "This is a new post."
      })
      .then((response) => {
        console.log(response.data);
        alert(response.data.message);
      });


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