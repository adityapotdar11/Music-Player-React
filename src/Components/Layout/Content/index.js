import React from "react";
import LatestRelease from "../LatestRelease";
import TopArtist from "../TopArtist";

const Content = () => {
    return (
        <>
            <div className="content">
                <div className="banner-sec">
                    <div className="banner banner-first"></div>
                    <div className="banner banner-middle"></div>
                    <div className="banner banner-last"></div>
                </div>
                <LatestRelease />
                <TopArtist />
            </div>
        </>
    );
};

export default Content;
