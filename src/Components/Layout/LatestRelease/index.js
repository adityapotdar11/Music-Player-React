import React from "react";
import { FolderPlus, Info, MoreHorizontal, Play, Plus } from "react-feather";
import lover from "../../../assets/images/tt-lover-cover.png";
import spector from "../../../assets/images/Alan_Walker_The_Spectre.jpg";
import ignite from "../../../assets/images/K-391_Ignite.png";

const LatestRelease = () => {
    const songs = [
        {
            name: "Lover",
            artist: "Taylor Swift",
            image: lover,
            date: "August 23, 2019",
            time: "4:14",
        },
        {
            name: "Me",
            artist: "Taylor Swift",
            image: lover,
            date: "August 23, 2019",
            time: "3:14",
        },
        {
            name: "The Spector",
            artist: "Alan Walker",
            image: spector,
            date: "August 23, 2019",
            time: "3:34",
        },
        {
            name: "Ignite",
            artist: "Alan Walker",
            image: ignite,
            date: "August 23, 2019",
            time: "3:15",
        },
    ];
    return (
        <>
            <div className="latest-content">
                <h3 className="latest-title">Latest Release</h3>
                <div className="all-latest">
                    {songs.map((song) => (
                        <div className="single-latest">
                            <div className="queue-content">
                                <div className="content-left">
                                    <img src={song.image} alt="cover" />
                                </div>
                                <div className="content-middle">
                                    <span className="song-title">
                                        {song.name}
                                    </span>
                                    <span className="song-artist">
                                        {song.date}
                                    </span>
                                </div>
                                <div className="content-last">
                                    <input
                                        type="checkbox"
                                        name=""
                                        id="latest-button-1"
                                        className="latest-more-btn"
                                    />
                                    <MoreHorizontal className="feather" />
                                    <div className="song-time">
                                        {song.time} min
                                    </div>
                                    <div
                                        className="latest-options"
                                        id="latest-option-1"
                                    >
                                        <ul>
                                            <li>
                                                <span>
                                                    <Play className="feather" />
                                                    Play Now
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <Plus className="feather" />
                                                    Add to Queue
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <FolderPlus className="feather" />
                                                    Add to Favourite
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <Info className="feather" />
                                                    Get Info
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default LatestRelease;
