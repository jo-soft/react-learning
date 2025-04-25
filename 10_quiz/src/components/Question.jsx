import { useState } from "react";
import QUESTIONS from "../data/questions.js"

import Answers  from "./Answers"
import QuestionTimer from "./QuestionTimer"

export default function Question({idx, handleOnTimeUp, onAnswerSelected}) {
    
    let currentQuestion = QUESTIONS[idx];

    const [answered, setAnswered] = useState(false); 
    
    const handleAnswerClicked = () => {
        setAnswered(true);
    };

    const time = answered ? 3 : 20;

    return (
        <>
        <QuestionTimer
            key={time}
            time={time}
            onTimeUp={handleOnTimeUp}
            mode={ answered ? 'answered' : null}
        />
            <h2>{currentQuestion.text}</h2>
            <Answers
                answers={currentQuestion.answers}
                onAnswerLoggedIn={onAnswerSelected}
                onAnswerClicked={handleAnswerClicked}
            />
        </> 
    )
}