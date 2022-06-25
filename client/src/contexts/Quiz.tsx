import { createContext } from 'react';
import { useParams } from 'react-router-dom';
import { Question, Provider } from '../types';
import useQuiz from '../hooks/useQuiz';
import questionData from '../lib/questions.json';

export const QuizContext = createContext({} as ReturnType<typeof useQuiz>);

export default function _QuizProvider({ children }: Provider) {
    const { category } = useParams();
    const questionsMapper = new Map<string, Question[]>(Object.entries(questionData));
    const questions = questionsMapper.get(category!)!;

    return (
        <QuizContext.Provider value={ useQuiz({ category: category!, questions }) }>
            {children}
        </QuizContext.Provider>
    );
}