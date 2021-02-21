import React from 'react';
import logo from '../images/white-logo.png';
import '../css/Header.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import LocalMallIcon from '@material-ui/icons/LocalMall';

function Header() {
    return (
        <nav className="header">
            {/* logo */}
            <Link to="/">
                <img className="header__logo" src= {logo} alt="logo"/>
            </Link>
            
            {/* search box */}
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
            {/* 3 links */}
            <div className="header__nav">
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello, </span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Return </span>
                        <span className="header__optionLineTwo">@ Order</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your </span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <LocalMallIcon />
                        <span className="header__optionLineTwo header__basketCount">0</span>
                    </div>
                </Link>
            </div>
            
            {/* cart icon */}
        </nav>
    )
}

export default Header
