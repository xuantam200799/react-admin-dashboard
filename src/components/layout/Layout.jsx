import React, { useEffect } from 'react';

import './layout.css'

import Sidebar from '../sidebar/Sidebar.jsx';
import TopNav from '../topnav/TopNav.jsx'
import Routers from '../Routers.jsx';

import { BrowserRouter, Route } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import ThemeAction from '../../redux/actions/ThemeActions'

const Layout = () => {

    const ThemeReducer = useSelector((state) => state.ThemeReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light');

        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light');

        dispatch(ThemeAction.setMode(themeClass))

        dispatch(ThemeAction.setColor(colorClass))

    }, [dispatch])

    return (
        <BrowserRouter>
            <Route render={(props) => (
                <div className={`layout ${ThemeReducer.mode} ${ThemeReducer.color}`}>
                    <Sidebar {...props}/>
                    <div className="layout__content">
                        <TopNav/>
                        <div className="layout__content-main">
                            <Routers />
                        </div>
                    </div>
                </div>
            )}/>
        </BrowserRouter>
    );
};

export default Layout;