import React from 'react';
import './MainHeader.styles.css';

const MainHeader = ({children}) => (
    <header className='main-header'>
        {children}
    </header>
);

export default MainHeader;
