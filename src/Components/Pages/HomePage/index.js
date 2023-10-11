import React from "react";
import Content from "../../Layout/Content";
import RightSideBar from "../../Layout/RightSideBar";

const HomePage = () => {
    return (
        <>
            <div className="container">
                <div className="main">
                    <Content />
                    <RightSideBar />
                </div>
            </div>
        </>
    );
};

export default HomePage;
