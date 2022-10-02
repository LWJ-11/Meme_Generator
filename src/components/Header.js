import React from "react";
import'../style/Header.css';
import logo from "../images/troll_face.png"

export default function Header(){
    return(
        <header className="header">
            <div className="logo">
                <img className="logo--img" src={logo} alt="Logo" ></img>
                <h2 className="logo--title">Meme Generator</h2>
            </div>
            <p className="header--course">React Course - Project 3</p>
        </header>
    );
}