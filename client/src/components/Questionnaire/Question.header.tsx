import { Category } from "../../../types";

export default function QuestionHeader({ category }: { category: Category['name'] }) {
    
    return (
        <div className="question-header">
            <div>Question 5</div>
            <div>{category!.toUpperCase()}</div>
            <div>10 : 00</div>
        </div>
    );
}