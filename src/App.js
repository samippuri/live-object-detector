import React, {useRef,useState,useEffect} from 'react';
import './App.css';
import Webcam from 'react-webcam';
import * as tf from '@tensorflow/tfjs';
import * as cocossd from '@tensorflow-models/coco-ssd';
import {draw} from "./boxUp";
import PreLoader from "./PreLoader"

function App() {
  // creating cariables to assign the webcam reference
  // and the canvas reference.
  const webcamRef = useRef(null)
  const canvasRef = useRef(null)

  const main = async () => {
    // loading the model
    const model = await cocossd.load()

    setInterval(() => {
      detect(model);
    }, 10);
  };

  const detect = async (model) => {
    // checking if webcam is running well in order
    // to run detections
    if ( 
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      // readyState 4 means video is ready to play
      webcamRef.current.video.readyState === 4
    ) {
      // getting the video properties
      const vid = webcamRef.current.video;
      const vidW = webcamRef.current.video.videoWidth;
      const vidH = webcamRef.current.video.videoHeight;

      // setting the video properties
      webcamRef.current.video.width = vidW;
      webcamRef.current.video.height = vidH;

      // setting the canvas properties
      canvasRef.current.width = vidW;
      canvasRef.current.height = vidH;

      // making the detections through the webcam
      const obj = await model.detect(vid);

      // creating object with tools for drawing
      const ctx = canvasRef.current.getContext("2d");
      
      // drawing boxes on and detections made
      draw(obj, ctx);
    }
  }

  useEffect(()=>{main()},[]);

  return (
    <>
    <PreLoader />

    <div className="App">
      <header className = "App-Header">
        <Webcam 
        ref={webcamRef}
        muted={true}
        style={{
            position:'absolute',
            marginLeft: 'auto',
            marginRight: 'auto',
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
        }} 
        />

        <canvas
        ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 8,
            width: 640,
            height: 480,   
          }}
          />
      </header>
    </div>
    </>  
  );
}

export default App;
