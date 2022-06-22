import { Answer } from "../../../types";
import { useContext } from "react";
import { QuizContext } from "../../contexts/Quiz";

export default function _Answer(answer: Answer) {
    const { onAnswer, isSelected } = useContext(QuizContext);
    const color = `var(--${isSelected(answer) ? 'btn-checked' : 'outer'})`;
    
    return (
        <button className="answer" onClick={() => onAnswer(answer)}
        style={{backgroundColor: color}}> {answer.answer} </button>
    );
}