import { Answer } from "../../types";
import { useQuiz } from "../../contexts/Quiz";

export default function _Answer(answer: Answer) {
    const { onAnswer, isSelected } = useQuiz();
    const color = `var(--${isSelected(answer) ? 'btn-checked' : 'outer'})`;
    
    return (
        <button className="answer" onClick={() => onAnswer(answer)}
        style={{backgroundColor: color}}> {answer.answer} </button>
    );
}