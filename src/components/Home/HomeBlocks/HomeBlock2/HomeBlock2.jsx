import React from "react";
import "./HomeBlock2.scss";
import banner from "../../../../images/homeBlock1Banner.svg";

const HomeBlock2 = () => {
    return (
        <div className="block2">
            <img src={banner} alt="" />
            <div className="container">
                <div className="block2_left">
                    <h3>
                        <span>kelvin – это смеСЬ ИННОВАЦИЙ,</span>
                        <br /> КАЧЕСТВА, СТИЛЯ И МОДЫ
                    </h3>
                    <p>
                        kirill domanskiy – <br />{" "}
                        <span>основатель бренда kelvin</span>{" "}
                    </p>
                </div>
                <div className="block2_right">
                    <p>
                        Добро пожаловать в мир kelvin – где стиль встречает
                        инновации. Выражайте свою утонченность и уникальность
                        через наши изысканные коллекции.
                        <br /> <br /> Мы создаем вдохновляющий стиль, который
                        оставит неизгладимое впечатление.
                    </p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <p>
                        Мы стремимся к безупречности в каждой детали. Наши
                        коллекции изготовлены из самых высококачественных
                        материалов, придерживаясь инновационных технологий и
                        строгих стандартов производства. <br />
                        <br /> Каждый шов, каждая кнопка, каждая отделка – все
                        воплощено с максимальной тщательностью, чтобы
                        удовлетворить самые высокие ожидания наших ценителей
                        стиля.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomeBlock2;
