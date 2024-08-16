import React, {useRef,useState,useEffect} from 'react';
import './App.css';
import Webcam from 'react-webcam';
import * as tf from '@tensorflow/tfjs';
import * as cocossd from '@tensorflow-models/coco-ssd';

function App() {
  const webcamRef = useRef(null)
  const canvasRef = useRef(null)


  
  return (
    <div className="App">
      <header className = "App-Header">
        <Webcam 
        ref={webcam}
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

        <canvas>
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
        </canvas>
      </header>
    </div>
  );
}

export default App;
