import React from 'react'
import Meme from './memesData'

export default function meme() {

    let url

    let getUrl = () => {
        const memeArray = Meme.data.memes
        const randomArray = Math.floor(Math.random() * memeArray.length)
        url = memeArray[randomArray].url

        console.log(url)
    }

    return (
        <main>
            <div className='form'>
                <div className='form--inputs'>
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder='Shut up'
                    />
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder='and take my money'
                    />
                </div>
                <input
                    className='form--button'
                    type="button"
                    value="Get a new meme image 🖼"
                    onClick={getUrl}
                />
            </div>
            <h1>{url}</h1>
        </main>
    )
}

/**
 * Challenge: Get a random image from the `memesData` array
 * when the "new meme image" button is clicked.
 * 
 * Log the URL of the image to the console. (Don't worry
 * about displaying the image yet)
 */