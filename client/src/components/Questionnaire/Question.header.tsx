import { useQuiz } from "../../contexts/Quiz";
import useTimer from "../../hooks/useTimer";

export default function QuestionHeader() {
    
    const { timer, category, questionNo, finishQuiz } = useQuiz();
    
    const onExpire = () => finishQuiz();

    const { minutes, seconds } = useTimer({ timestamp: timer, onExpire });
    
    return (
        <header className="question-header">
            <div>Question {questionNo}</div>
            <div>{category.toUpperCase()}</div>
            <div>{minutes} : {seconds}</div>
        </header>
    );
}