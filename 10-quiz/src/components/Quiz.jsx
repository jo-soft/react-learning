import { useState }  from "react"
import QUESTIONS from "../data/questions.js"

import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
    // assuming questions are not randomized
    // ternary operator due to timeout after seleting but before proceeding to next question
    const [answers, setAnnswers] = useState([]);
    const completed = answers.length === QUESTIONS.length;


    const handleOnTimeUp = () => {
        setAnnswers((prevAnswers) => [...prevAnswers, null]);
    }
    
    const handleOnAnswerSelected = (isCorrect) => {
        setAnnswers((prevAnswers) => [...prevAnswers, isCorrect]);
    }

    if (completed) {
        return (
            <Summary answers={answers} />
        )
    }

    return (
        <div id="quiz">
            <div id="question">
                <Question
                    key={answers.length}
                    idx={answers.length}
                    handleOnTimeUp={handleOnTimeUp}
                    onAnswerSelected={handleOnAnswerSelected}
                />
            </div>
        </div>
    )
}