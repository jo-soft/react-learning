'use client'

import classes from './page.module.css';
import ImagePicker from "@/components/images/image-picker/image-picker";
import {shareMealAction} from "@/lib/meal.actions";
import SubmitButton from "@/components/form/submit-button/submit-button";
import {useFormState} from "react-dom";

export default function ShareMealPage() {

    const [state, formAction] = useFormState(shareMealAction, {invalidFields: []});

    return (
        <>
            <header className={classes.header}>
                <h1>
                    Share your <span className={classes.highlight}>favorite meal</span>
                </h1>
                <p>Or any other meal you feel needs sharing!</p>
            </header>
            <main className={classes.main}>
                <form className={classes.form} action={formAction}>
                    <div className={classes.row}>
                        <p>
                            <label htmlFor="name">Your name</label>
                            <input type="text" id="name" name="name" required />
                        </p>
                        <p>
                            <label htmlFor="email">Your email</label>
                            <input type="email" id="email" name="email" required />
                        </p>
                    </div>
                    <p>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" required/>
                    </p>
                    <p>
                        <label htmlFor="summary">Short Summary</label>
                        <input type="text" id="summary" name="summary" required/>
                    </p>
                    <p>
                        <label htmlFor="instructions">Instructions</label>
                        <textarea
                            id="instructions"
                            name="instructions"
                            rows="10"
                            required
                        ></textarea>
                    </p>
                    <ImagePicker label='Selet an image' name='image'/>
                    { !!state.invalidFields?.length && <div>
                        <span className={classes.error}>Please fill in all fields</span>
                        <ul>
                            {state.invalidFields.map((field) => (
                                <li key={field}>{field}</li>
                            ))}
                        </ul>
                    </div> }
                    <p className={classes.actions}>
                        <SubmitButton type="submit">Share Meal</SubmitButton>
                    </p>
                </form>
            </main>
        </>
    );
}