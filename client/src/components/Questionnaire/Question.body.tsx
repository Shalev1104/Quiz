import { Question } from "../../../types";
import Answer from "./Answer";

export default function QuestionBody({ question, answers }: Question) {
    
    return (
        <div className="question-body">
            <h1>{question}</h1>
            <div className="answers">
                {answers.map((answer, index) => <Answer key={index} {...answer} />)}
            </div>
        </div>
    );
}