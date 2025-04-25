import quizComplete from "../assets/quiz-complete.png"
export default function Summary({ answers }) {

    const total = answers.length;
    const correctAnswers = (10 * answers.filter((answer) => answer === true).length / total).toFixed(2);
    const incorrectAnswers = (10 * answers.filter((answer) => answer === false).length / total).toFixed(2);
    const skippedAnswers = (10 * answers.filter((answer) => answer === null).length / total).toFixed(2);

    return (
        <div id="summary">
            <h2>Quiz completed</h2>
            <img src={quizComplete} alt="you made it"></img>
            <div id="summary-stats">
                <p>
                    <span className="number"> {skippedAnswers}</span>
                    <span className="text">Skipped</span>
                </p>
                <p>
                    <span className="number"> {correctAnswers}</span>
                    <span className="text">Correct</span>
                </p>
                <p>
                    <span className="number"> {incorrectAnswers}</span>
                    <span className="text">Incorrect</span>
                </p>
            </div>
        </div>
    )
}