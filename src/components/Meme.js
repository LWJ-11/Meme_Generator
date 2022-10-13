import React, {useState}from "react";
import'../style/Meme.css';
import memeData from "../memeData.js";

export default function Meme(){

    const [meme, setMeme] = useState({
        "topText": "",
        "bottomText":"",
        "randomImage":"https://i.imgflip.com/30b1gx.jpg"
    }
        
    );

    function getMemeImage(){
        const memesArray = memeData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        setMeme(prevMeme =>({
            ...prevMeme,
            randomImage: url
        }));
    }
     
    
    return(
        <main>
            <div className="form">            
                <input className="form--input" type="text" id="input-upper--line" placeholder="Top text"/>
                <input className="form--input" type="text" id="input-lower--line"placeholder="Bottom text"/>
                <button className="form--button" onClick={getMemeImage}>Get a new meme image  🖼</button> 
            </div>
            <img src={meme.randomImage} className="meme--image" alt="meme"/>
        </main>
    );
}