import { useEffect, useState } from 'react';

const interval = 20;

export default function QuestionTimer ({mode, time, onTimeUp }) {
    const [timeRemaining, setTimeRemaining] = useState(time * 1000);
     
    if(timeRemaining <= 0) {
        onTimeUp();
    }

    useEffect(() => {
        const handle = setInterval(
            () => setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - interval),
            interval
        );

        return () => clearInterval(handle)
    }, [time, onTimeUp])
    
    return (
        <div id="question-time">
            <progress className={mode} value={timeRemaining} max={time * 1000} />
        </div>
    );
}