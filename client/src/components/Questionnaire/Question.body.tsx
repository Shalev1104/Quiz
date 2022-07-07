import { useQuiz } from "../../contexts/Quiz";
import Answer from "./Answer";

export default function QuestionBody() {

    const { currentQuestion } = useQuiz();
    const { answers, question } = currentQuestion;

    return (
        <div className="question-body">
            <h1>{question}</h1>
            <div className="answers">
                {answers.map((answer, index) => <Answer key={index} {...answer} />)}
            </div>
        </div>
    );
}