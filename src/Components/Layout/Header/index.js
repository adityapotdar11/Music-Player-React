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
                        <span className="site-title">Music Player</span>
                        <span className="favourites hide-tablet">
                            Favourites
                        </span>
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
                        <span className="notification cursor-pointer">
                            <Bell className="feather" />
                        </span>
                        <div className="user-icon hide-tablet">
                            <img src={user_default} alt="profile-img" />
                        </div>
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
                                        <div className="user-icon">
                                            <img
                                                src={user_default}
                                                alt="profile-img"
                                            />
                                        </div>
                                    </div>
                                    <div className="menu">
                                        <div className="menu-item">
                                            <span className="favourites">
                                                Favourites
                                            </span>
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
