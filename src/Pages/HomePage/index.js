import React from "react";
import Content from "../../Components/Layout/Content";
import RightSideBar from "../../Components/Layout/RightSideBar";

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
