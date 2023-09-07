import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import "./Meme.css";
import ImageIcon from "@mui/icons-material/Image";

export default function Meme() {
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;
  const secondaryColor = theme.palette.secondary.main;

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  React.useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMemes();
  });

  function getMemesImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          placeholder="Top Text"
          className="form--input"
          type="text"
          name="topText"
          onChange={handleChange}
        />
        <input
          placeholder="Bottom Text"
          className="form--input"
          type="text"
          name="bottomText"
          onChange={handleChange}
        />
        <Button
          variant="contained"
          style={{ bgColor: primaryColor }}
          sx={{ height: 50, fontSize: 20, p: 2 }}
          onClick={getMemesImage}
        >
          <ImageIcon sx={{ fontSize: 20, mr: 1 }} />
          New Meme Image
        </Button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
