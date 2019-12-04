import React from 'react';
import './Avatar.styles.css';


const Avatar = ({className, image, alt, width, height, style}) => (
    <div className={`avatar ${className || ''}`} style={style}>
        <img
            src={image}
            alt={alt}
            style={{width: width, height: height}}
        />
    </div>
);

export default Avatar;
