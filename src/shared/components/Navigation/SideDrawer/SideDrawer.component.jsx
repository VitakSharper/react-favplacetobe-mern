import React from 'react';
import ReactDom from 'react-dom';
import './SideDrawer.styles.css';


const SideDrawer = ({children}) => {
    const content = <aside className='side-drawer'>{children}</aside>;
    return ReactDom.createPortal(content, document.getElementById('drawer-hook'))
};

export default SideDrawer;
