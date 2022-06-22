import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../../contexts/Quiz";
export default function Result() {
    
    const { score, totalQuestions } = useContext(QuizContext);
    const points = score();
    const accuracy = Math.round((points / totalQuestions) * 100);
    const navigate = useNavigate()
    return (
        <div className="result">
            <header>Quiz Results</header>
            <p>You scored {`${points} / ${totalQuestions}`}</p>
            <p>Accuracy: {accuracy}%</p>
            <button className="back" onClick={() => navigate(0)}>
                Try Again
            </button>
            <button className="back" onClick={() => navigate('/')}>
                Return to main menu
            </button>
        </div>
    );
}
