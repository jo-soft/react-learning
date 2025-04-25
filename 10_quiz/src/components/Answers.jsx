import { useState, useMemo } from "react"

export default function Answers({answers, onAnswerClicked, onAnswerLoggedIn}) {


    const [answerState, setAnswerState] = useState({
        selected: null,
        correct: null,
    });
    const correctAnswer = answers[0];

    const handleAnswerClick = (answer) => {
        const correct = answer === correctAnswer
        onAnswerClicked();
        setAnswerState({
            selected: answer,
            correct: null
        });
        setTimeout(
            () => {
                setAnswerState({
                    selected: answer,
                    correct,
                });
            }, 1000
        );
        setTimeout(
            () => {
                onAnswerLoggedIn(correct);
                setAnswerState({
                    selected: null,
                    correct: null,
                });
            }, 3000
        );
    };


    const randomizedAnswers = useMemo(() => [...answers].sort(() => Math.random() - 0.5), [answers]);

    return (
        <ul id="answers">
            {randomizedAnswers.map((answer) => {
                let cssClass = "";
                const isSelected = answerState.selected === answer;
                if (isSelected && answerState.correct !== null) {
                    cssClass = answerState.correct ? "correct" : "wrong";
                }
                return (
                    <li className="answer" key={answer}>
                        <button 
                        className={cssClass} 
                        type="button" 
                        onClick={() => handleAnswerClick(answer)}
                        disabled={answerState.selected ? true : null}
                        > {answer} </button>
                    </li>
                )
            })
        }
    </ul>
    )
}