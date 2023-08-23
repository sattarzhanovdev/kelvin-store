import React from "react";
import "./HomeBlock1.scss";
import banner from "../../../../images/homeBlock1Banner.svg";
const HomeBlock1 = () => {
    return (
        <div className="container block1">
            <div className="block1_h1">
                <h1>
                    <span>БРЕНД КОТОРЫЙ </span> <br /> ИЗМЕНИТ ВСЁ
                </h1>
            </div>
            <div>
                <p>
                    Делаем качественно, <br /> красиво и с душой
                </p>
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default HomeBlock1;
