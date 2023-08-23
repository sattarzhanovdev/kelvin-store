import React from "react";
import "./HomeBlock3.scss";
import banner from "../../../../images/block3_banner.jpg";
const HomeBlock4 = () => {
    return (
        <div className="container block3">
            <div className="block3_card_block">
                <div className="block3_card_block_left">
                    <img src={banner} alt="" />
                </div>
                <div className="block3_card_block_right">
                    <h2>kelvin’s passion hoodie 1st edition</h2>
                    <p>
                        Погрузитесь в комфорт и стиль с нашей первой худи от
                        "kelvin". Этот идеальный компаньон для повседневной
                        жизни сочетает в себе высокое качество материалов и
                        безупречный дизайн.
                    </p>
                    <div>
                        <p>Добавить в корзину &#10230;</p>
                        <p>5 990,00 руб.</p>
                    </div>
                </div>
            </div>
            <div className="block3_newHren">
                <div className="block3_circle"></div>
                <p>новое поступление</p>
            </div>
        </div>
    );
};

export default HomeBlock4;
