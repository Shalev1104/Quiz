import { useContext } from "react";
import { QuizContext } from "../../contexts/Quiz";
import Pagination from "./Pagination";

export default function QuestionFooter() {

    const { 
        questionNo, 
        totalQuestions, 
        nextQuestion, 
        previousQuestion, 
        toggleQuestion, 
        finishQuiz } = useContext(QuizContext);

    return (
        <div className="question-footer">
            <div className="pagination">
                <Pagination 
                    pageNo={questionNo}
                    total={totalQuestions} 
                    onClick={e => toggleQuestion(Number(e.currentTarget.innerHTML))}
                    onPrev={previousQuestion} 
                    onNext={nextQuestion}
                />
            </div>
            <button className="finish" onClick={() => finishQuiz()}>Finish</button>
        </div>
    )
};