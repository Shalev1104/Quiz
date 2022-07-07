import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../contexts/Quiz";

export default function Result() {    
    const { score, totalQuestions } = useQuiz();
    const accuracy = Math.round((score / totalQuestions) * 100);
    const navigate = useNavigate();
    return (
        <div className="result">
            <header>Quiz Results</header>
            <p>You scored {`${score} / ${totalQuestions}`}</p>
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
