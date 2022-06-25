import { useState } from 'react';
import { Answer, Quiz, useQuiz } from '../types';

export default function _useQuiz({ category, questions }: useQuiz): Quiz {
    const QUESTIONS_TIMER  = 10 * 60;
    
    const [questionNo, setQuestionNo] = useState(1);    
    const [answers, setAnswers] = useState(new Array<Answer>(questions.length));
    const [finish, setFinish] = useState(false);

    return {
        category: category!,
        questions,
        timer: QUESTIONS_TIMER,
        questionNo,
        totalQuestions: questions.length,
        currentQuestion: questions[questionNo - 1],
        finish,
        
        nextQuestion: () => setQuestionNo(questionNo + 1),
        previousQuestion: () => setQuestionNo(questionNo - 1),
        toggleQuestion: (index: number) => setQuestionNo(index),

        onAnswer: (answer: Answer) => {
            const newAnswers = [...answers];
            newAnswers[questionNo - 1] = answer;
            setAnswers(newAnswers);
        },
        
        isSelected: (answer: Answer) =>
            JSON.stringify(answers[questionNo - 1]) === JSON.stringify(answer),
        
        isAnswersMarked: () =>
            answers.every(answer => answer !== undefined),
        
        finishQuiz: () => setFinish(true),

        score: () => 
            answers.filter(answer => answer && answer.correct).length
    };
}