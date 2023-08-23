import React from "react";
import "./Header.scss";
import logo from "../../images/navLogo.svg";
import cartIcon from "../../images/cartIcon.png";
import { Badge } from "@mui/material";
const Header = () => {
    return (
        <header className="navbar container">
            <div>
                <img src={logo} alt="" />
            </div>
            <div className="navbarMenu">
                <div className="navLine"></div>
                <p>меню</p>
            </div>
            <div className="navbarRight">
                <button>Перейти к товарам</button>
                <Badge color="success" overlap="circular" badgeContent="2">
                    <div className="cartBadge">
                        <img src={cartIcon} alt="" />
                    </div>
                </Badge>
            </div>
        </header>
    );
};

export default Header;
