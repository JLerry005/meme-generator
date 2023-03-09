import { React, useState, useEffect } from 'react'
// import memesData from './memesData'

export default function Meme() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1ihzfe.jpg"
    })

    const [allMemeImages, setAllMemeImages] = useState([])

    useEffect(() => {
        // console.log("render")
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
        // async function getMemes() {
        //     const res = await fetch("https://api.imgflip.com/get_memes")
        //     const data = await res.json()
        //     setAllMemeImages(data.data.memes)
        // }
        // getMemes()
    }, [])

    const getMemeImage = () => {
        const randomArray = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomArray].url
        setMeme(prevImage => ({
            ...prevImage,
            randomImage: url
        }))
    }

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target
        setMeme(prevData => ({
            ...prevData,
            [name]: type === checked ? checked : value
        }))
    }

    return (
        <main>
            <div className='form'>
                <div className='form--inputs'>
                    <input
                        type="text"
                        id=""
                        placeholder='Shut up'
                        onChange={handleChange}
                        name="topText"
                        value={meme.topText}
                    />
                    <input
                        type="text"
                        id=""
                        placeholder='and take my money'
                        onChange={handleChange}
                        name="bottomText"
                        value={meme.bottomText}
                    />
                </div>
                <input
                    className='form--button'
                    type="button"
                    value="Get a new meme image 🖼"
                    onClick={getMemeImage}
                />
            </div>
            <div className='meme'>
                <img className='meme--image' src={meme.randomImage} alt="meme-image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            {/* <h1>{memeImage}</h1> */}
        </main>
    )
}
