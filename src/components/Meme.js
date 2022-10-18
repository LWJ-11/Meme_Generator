import React, {useState} from "react";
import { useEffect } from "react";
import'../style/Meme.css';

export default function Meme(){

    const [meme, setMeme] = useState({
        "topText": "",
        "bottomText":"",
        "randomImage":"https://i.imgflip.com/30b1gx.jpg"
    });
    const[allMemesData,setAllMemesData] = useState([])
    useEffect(()=>{
        console.log("Effect ran")
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(data=>setAllMemesData(data.data.memes))
    }, [])

    function getMemeImage(){
        const randomNumber = Math.floor(Math.random() * allMemesData.length);
        const url = allMemesData[randomNumber].url;
        setMeme(prevMeme =>({
            ...prevMeme,
            randomImage: url
        }));
    }
    function handleChange(event){
        const {name, value} = event.target;
        setMeme(prevMeme =>({
            ...prevMeme,
            [name]: value
        }))
    }
    return(
        <main>
            <div className="form">            
                <input 
                    className="form--input" 
                    type="text" 
                    id="input-upper--line" 
                    placeholder="Top text"
                    name="topText"
                    onChange={handleChange}
                    value={meme.topText}
                    />
                <input 
                    className="form--input" 
                    type="text" 
                    id="input-lower--line"
                    placeholder="Bottom text"
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
                    />
                <button className="form--button" onClick={getMemeImage}>Get a new meme image  🖼</button> 
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt="meme"/>
                <h2
                    className="meme--text top"
                >{meme.topText}</h2>
                <h2
                    className="meme--text bottom"
                >{meme.bottomText}</h2>
            </div>
        </main>
    );
}