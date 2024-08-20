import React, {useEffect} from 'react';
import { preLoaderAnim } from './animations';
import "./preloader.css";

const PreLoader = () => {

    useEffect(() => {
        preLoaderAnim()
    },[]);

    return (
        <div className="preloader">
            <div className="texts-container">
                <span>Detections</span>
                <span>In</span>
                <span>Progress.</span>
            </div>
        </div>
    )
}

export default PreLoader