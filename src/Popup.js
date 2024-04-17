import React from 'react';
import { Billboard, Html } from '@react-three/drei';
import '../src/Popup.css'


//Create popup whenever an object is clicked

const Popup = (props) => {

    const { position, onClose } = props;

    const popupStyle = {
        top: position.top,
        left: position.left,
        
    };


  return (
    <Html>
    <div className='popup' style={popupStyle}>
        <div className='popup-inner' >
            <h3>Popup Opened</h3>
            <button className='close-button' onClick={onClose}>Close</button>
            {props.children}
        </div>
    </div>
    </Html>
  )
    
};

export default Popup;
