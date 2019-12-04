import React from 'react';
import './MainNavigation.styles.css';
import {Link} from "react-router-dom";

import MainHeader from "../MainHeader/MainHeader.component";
import NavLinks from "../NavLinks/NavLinks.component";
import SideDrawer from "../SideDrawer/SideDrawer.component";
import Backdrop from "../SideDrawer/BackDrop.component";

const MainNavigation = () => {
    const [drawerIsOpen, setDrawerIsOpen] = React.useState(false);
    return (
        <>
            {drawerIsOpen && <Backdrop onClick={() => setDrawerIsOpen(false)}/>}

            <SideDrawer
                show={drawerIsOpen}
                onClick={() => setDrawerIsOpen(false)}
            >
                <nav className='main-navigation__drawer-nav'>
                    <NavLinks/>
                </nav>
            </SideDrawer>


            <MainHeader>
                <button
                    className="main-navigation__menu-btn"
                    onClick={() => setDrawerIsOpen(true)}>
                    <span/>
                    <span/>
                    <span/>
                </button>
                <h1 className='main-navigation__title'><Link to='/'>Your Fav Places</Link></h1>
                <nav className='main-navigation__header-nav'>
                    <NavLinks/>
                </nav>
            </MainHeader>
        </>
    )
};

export default MainNavigation;
