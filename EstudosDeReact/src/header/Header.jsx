import React, { Component } from "react";
import s from "./header.module.css";

function Header() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3  col-md-3 col-sm-6 col-xs-6">
                        <h3> Sobre nós </h3>
                        <ul>
                            <li> <a href="#"> Quem somos </a> </li>
                            <li> <a href="#"> Política de privacidade </a> </li>
                            <li> <a href="#"> Termos de uso </a> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;