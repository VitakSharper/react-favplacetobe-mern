import React from 'react';
import ReactDOM from 'react-dom';

import './BackDrop.styles.css'


const Backdrop = ({onClick}) => {
    return ReactDOM.createPortal(
        <div className="backdrop" onClick={onClick}/>,
        document.getElementById('backdrop-hook')
    );
};

export default Backdrop;
