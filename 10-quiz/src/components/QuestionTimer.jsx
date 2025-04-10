import { useEffect, useState, useImperativeHandle } from 'react';

const interval = 20;

export default function QuestionTimer ({mode, time, onTimeUp }) {
    const [timeRemaining, setTimeRemaining] = useState(time * 1000);
    const [timer, setTimer] = useState(null);
        
    useEffect(() => {

        const handle = 
        setInterval(() => 
            setTimeRemaining((prevTimeRemaining) => {
                const newTimeRemaining = prevTimeRemaining - interval
                if(newTimeRemaining <= 0) {
                    clearInterval(timer);
                    if(mode !== 'answered') {
                        onTimeUp()
                    }
                    return time * 1000;
                }                    

                return newTimeRemaining
            })
        , interval);
        
        setTimer(handle);


        return () => clearInterval(timer);
    }, [time, onTimeUp]);

    return (
        <div id="question-time">
            <progress className={mode} value={timeRemaining} max={time * 1000} />
        </div>
    );
}