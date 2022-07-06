import Category from "./category";
import Answer from "./answer";
import { DefaultColumns } from "./tables";

type Question = DefaultColumns & {
    categoryId: number;
    question: string;
}

type QuestionByCategory = Question['question'] & Pick<Answer, 'answer' | 'isCorrect'>[];

export type GetQuestionsByCategory = (categoryId: Category['id']) => Promise<QuestionByCategory[]>;

export default Question;