import React from "react";
import'../style/Meme.css';

export default function Meme(){
    return(
        <main>
            <form className="form">            
                <input className="form--input" type="text" id="input-upper--line" placeholder="Top text"/>
                <input className="form--input" type="text" id="input-lower--line"placeholder="Bottom text"/>
                <button className="form--button">Get a new meme image  🖼</button> 
     
            </form>
        </main>
    );
}