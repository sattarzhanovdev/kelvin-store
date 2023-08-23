import React from "react";
import "./HomeBlock4.scss";
import banner from "../../../../images/block4_banner.jpg";
import avatar from "../../../../images/block4_avatar.svg";
const HomeBlock4 = () => {
    return (
        <div className="block4 container">
            <div className="block4_line"></div>
            <div className="block4_img">
                <img src={banner} alt="" />
            </div>
            <div className="block4_text">
                <div>
                    <h2 className="block4_text_first">бренд</h2>
                    <h2>который</h2>
                </div>
                <h2>ценят за уникальность</h2>
            </div>
            <div className="block4_quote">
                <img src={avatar} alt="" />
                <div>
                    <p style={{ opacity: "0.7" }}>ЭТО НАШЕ ВРЕМЯ СИЯТЬ</p>
                    <p> - KELVIN</p>
                </div>
            </div>
        </div>
    );
};

export default HomeBlock4;
