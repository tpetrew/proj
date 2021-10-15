import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '../../../24/basic/gray/menu.svg';
import HomeIcon from '../../../24/basic/gray/home.svg';
import WalletIcon from '../../../24/finance/wallet.svg';
import CompasIcon from '../../../24/maps/compas.svg';
import AlignRightIcon from '../../../24/basic/gray/text-align-right.svg';
import ElementsIcon from '../../../24/grid/elements.svg';
import SettingsIcon from '../../../24/basic/gray/settings.svg';

import HomeIconOrange from '../../../24/basic/orange/home.svg';
import WalletIconOrange from '../../../24/basic/orange/wallet.svg';
import CompasIconOrange from '../../../24/basic/orange/compas.svg';
import AlignRightIconOrange from '../../../24/basic/orange/text-align-right.svg';
import ElementsIconOrange from '../../../24/basic/orange/elements.svg';
import SettingsIconOrange from '../../../24/basic/orange/settings.svg';

import UserImage from '../../../images/user.jpg';



const VerticalMenu = () => {

    const [screen, setScreen] = useState('')
    const location = useLocation();

    return (
        <div className="menu-panel">
            <div className="menu-panel__menu-icon">
                <img src={MenuIcon} />
            </div>
            <div className="menu-panel__menu-column">
                <Link to="/">
                    <div className={location.pathname === '/' ? "menu-panel__menu-column__menu-item__active" : "menu-panel__menu-column__menu-item"}>
                        <img src={location.pathname === '/' ? HomeIconOrange : HomeIcon} />
                    </div>
                </Link>
                <Link to="/wallet">
                    <div className={location.pathname === '/wallet' ? "menu-panel__menu-column__menu-item__active" : "menu-panel__menu-column__menu-item"}>
                        <img src={location.pathname === '/wallet' ? WalletIconOrange : WalletIcon} />
                    </div>
                </Link>
                <Link to="/compas">
                    <div className={location.pathname === '/compas' ? "menu-panel__menu-column__menu-item__active" : "menu-panel__menu-column__menu-item"}>
                        <img src={location.pathname === '/compas' ? CompasIconOrange : CompasIcon} />
                    </div>
                </Link>
                <Link to="/statistics">
                    <div className={location.pathname === '/statistics' ? "menu-panel__menu-column__menu-item__active" : "menu-panel__menu-column__menu-item"}>
                        <img src={location.pathname === '/statistics' ? AlignRightIconOrange : AlignRightIcon} />
                    </div>
                </Link>
                <Link to="/elements">
                    <div className={location.pathname === '/elements' ? "menu-panel__menu-column__menu-item__active" : "menu-panel__menu-column__menu-item"}>
                        <img src={location.pathname === '/elements' ? ElementsIconOrange : ElementsIcon} />
                    </div>
                </Link>
            </div>
            <div className="menu-panel__person-menu">
                <Link to="/settings">
                    <div className={location.pathname === '/settings' ? "menu-panel__menu-column__menu-item__active" : "menu-panel__menu-column__menu-item"}>
                        <img src={location.pathname === '/settings' ? SettingsIconOrange : SettingsIcon} />
                    </div>
                </Link>
                <div className="menu-panel__person-menu__person-image">
                    <div className="menu-panel__person-menu__person-image__wrapper">
                        <img src={UserImage} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerticalMenu;