import { useContext } from "react";
import { QuizContext } from "../../contexts/Quiz";
import Answer from "./Answer";

export default function QuestionBody() {

    const { currentQuestion } = useContext(QuizContext);
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