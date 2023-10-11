import React from "react";
import { ChevronDown, Heart } from "react-feather";
import lover from "../../../assets/images/tt-lover-cover.png";
import spector from "../../../assets/images/Alan_Walker_The_Spectre.jpg";
import ignite from "../../../assets/images/K-391_Ignite.png";

const RightSideBar = () => {
    const songs = [
        {
            name: "Lover",
            artist: "Taylor Swift",
            image: lover,
        },
        {
            name: "Me",
            artist: "Taylor Swift",
            image: lover,
        },
        {
            name: "The Spector",
            artist: "Alan Walker",
            image: spector,
        },
        {
            name: "Ignite",
            artist: "Alan Walker",
            image: ignite,
        },
    ];
    return (
        <div className="right-side-bar">
            <div className="queue">
                <div className="title-sec">
                    <div className="left">
                        <a>Queue</a>
                    </div>
                    <div className="right">
                        <a>
                            <input type="checkbox" name="" id="button" />
                            <ChevronDown className="feather" />
                            <div id="queue-options">
                                <ul>
                                    <li>Playlist</li>
                                    <li>Favourite Songs</li>
                                </ul>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="queue-content-sec">
                    {songs.map((song) => (
                        <div className="queue-content">
                            <div className="content-left">
                                <img src={song.image} />
                            </div>
                            <div className="content-middle">
                                <a className="song-title">{song.name}</a>
                                <a className="song-artist">{song.artist}</a>
                            </div>
                            <div className="content-last">
                                <Heart className="feather" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RightSideBar;
