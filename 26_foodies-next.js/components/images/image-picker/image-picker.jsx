'use client'

import  classes from './image-picker.module.css';
import {useRef, useState} from "react";
import Image from "next/image";

export default function ImagePicker({label, name}) {
    const imageRef = useRef();
    const [ image, setImage ] = useState();

    const handleButtonClick = () => {
        imageRef.current.click();
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            }
            reader.readAsDataURL(file);
        }
        else {
            setImage(null)
        }
    }

    return (
        <div className={classes.picker}>
            <label htmlFor={name}> { label }</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    { !image && <p> No Image selected</p> }
                    { image && <Image src={image} alt='Selected meal' fill /> }
                </div>
                <input
                    type='file'
                    accept='image/*'
                    className={classes.input}
                    name={name}
                    id={name}
                    ref={imageRef}
                    onChange={handleImageChange}
                    required
                />
                <button
                    className={classes.button}
                    type='button'
                    onClick={handleButtonClick}
                >
                    Pick an image
                </button>
            </div>
        </div>
    )
}