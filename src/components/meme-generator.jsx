import React from 'react'
import memesData from './memesData'

/**
 * Challenge: Save the random meme URL in state
 * - Create new state called `memeImage` with an
 *   empty string as default
 * - When the getMemeImage function is called, update
 *   the `memeImage` state to be the random chosen
 *   image URL
 * - Below the div.form, add an <img /> and set the
 *   src to the new `memeImage` state you created
 */

export default function Meme() {

    const [memeImage, setMemeImage] = React.useState("")

    const getMemeImage = () => {
        const memeArray = memesData.data.memes
        const randomArray = Math.floor(Math.random() * memeArray.length)
        setMemeImage(memeArray[randomArray].url)

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
                    onClick={getMemeImage}
                />
            </div>
            <div className='box'>
                <img src={memeImage} alt="meme-image" />
            </div>
            {/* <h1>{memeImage}</h1> */}
        </main>
    )
}
