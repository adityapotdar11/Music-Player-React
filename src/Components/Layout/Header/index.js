import React from "react";
import { AlignJustify, Bell, Mic, Play } from "react-feather";
import user_default from "../../../assets/images/user_default.png";

const Header = () => {
    return (
        <>
            <header>
                <div className="header-main container">
                    <div className="left-header">
                        <a href="/" className="logo">
                            <Play className="feather" />
                        </a>
                        <a className="site-title">Music Player</a>
                        <a className="favourites hide-tablet">Favourites</a>
                    </div>
                    <div className="right-header">
                        <div className="search-sec hide-tablet">
                            <input
                                type="text"
                                name=""
                                id=""
                                className="search"
                                placeholder="Search"
                            />
                            <Mic className="feather" />
                        </div>
                        <a className="notification cursor-pointer">
                            <Bell className="feather" />
                        </a>
                        <a className="user-icon hide-tablet">
                            <img src={user_default} alt="profile-img" />
                        </a>
                        <div className="tablet-menu hide-desktop">
                            <div className="tablet-icon">
                                <input
                                    type="checkbox"
                                    id="menu-check"
                                    className="latest-more-btn"
                                />
                                <AlignJustify className="feather" />
                                <aside className="aside-menu hide-desktop">
                                    <div className="user-section">
                                        <a className="user-icon">
                                            <img
                                                src={user_default}
                                                alt="profile-img"
                                            />
                                        </a>
                                    </div>
                                    <div className="menu">
                                        <div className="menu-item">
                                            <a className="favourites">
                                                Favourites
                                            </a>
                                        </div>
                                        <div className="menu-item search-sec">
                                            <input
                                                type="text"
                                                name=""
                                                id=""
                                                className="search"
                                                placeholder="Search"
                                            />
                                            <Mic className="feather" />
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
