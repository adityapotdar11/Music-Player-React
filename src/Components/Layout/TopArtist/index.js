import React from "react";
import { Play } from "react-feather";
import weekend from "../../../assets/images/artists/the-weekend.jpg";
import taylor from "../../../assets/images/artists/taylor-swift.jpg";
import miley from "../../../assets/images/artists/miley-cyrus.jpeg";
import rihanna from "../../../assets/images/artists/rihanna.jpg";
import shakira from "../../../assets/images/artists/shakira.jpg";
import sheeran from "../../../assets/images/artists/ed-sheeran.jpg";

const TopArtist = () => {
    const artists = [
        {
            image: weekend,
            name: "The Weekend",
        },
        {
            image: taylor,
            name: "Taylor Swift",
        },
        {
            image: miley,
            name: "Miley Cyrus",
        },
        {
            image: rihanna,
            name: "Rihanna",
        },
        {
            image: shakira,
            name: "Shakira",
        },
        {
            image: sheeran,
            name: "Ed Sheeran",
        },
    ];

    return (
        <>
            <div className="latest-content">
                <h3 className="latest-title">Popular Artists</h3>
                <div className="all-latest">
                    {artists.map((artist) => (
                        <figure className="single-artist">
                            <img src={artist.image} alt="artist" />
                            <div className="play">
                                <span>
                                    <Play className="feather" />
                                </span>
                            </div>
                            <figcaption>{artist.name}</figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </>
    );
};

export default TopArtist;
