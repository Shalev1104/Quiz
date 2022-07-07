import { createContext, useContext, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Question, Provider } from '../types';
import useFetch from '../hooks/useFetch';
import { useReducer } from 'react';
import quizReducer, { Actions, initialState } from '../reducers/QuizReducer';

const QuizContext = createContext(initialState);

export const useQuiz = () => useContext(QuizContext);

export default function QuizProvider({ children }: Provider) {
    const { pathname } = useLocation();
    const { category } = useParams();
    const { fetchData: fetchQuestions, data: questions, loading, error } = useFetch<Question[]>();
    const [state, dispatch] = useReducer(quizReducer, initialState);
    const TIMER = 10 * 60;

    useEffect(() => {
        dispatch({ type: Actions.SET_CATEGORY, payload: {category} });
        fetchQuestions(`${pathname}/questions`, 'GET');
    } , []);

    useEffect(() => {
        if (questions)
            dispatch({ type: Actions.SET_QUESTIONS, payload: {questions} });
    }, [questions]);

    const quiz = {
        ...state,
        ...state.questions && {
            currentQuestion: state.questions[state.questionNo - 1],
            totalQuestions: state.questions.length
        },
        timer: TIMER,
        
        nextQuestion: () => dispatch({ type: Actions.NEXT_QUESTION }),
        previousQuestion: () => dispatch({ type: Actions.PREVIOUS_QUESTION }),
        toggleQuestion: (questionNo) => dispatch({ type: Actions.TOGGLE_QUESTION, payload: {questionNo} }),

        onAnswer: (answer) => dispatch({ type: Actions.SELECT_ANSWER, payload: {answer} }),
        finishQuiz: () => dispatch({ type: Actions.FINISH_QUIZ }),
        
        isSelected: (answer) => JSON.stringify(state.answers[state.questionNo - 1]) === JSON.stringify(answer),
        isAnswersMarked: () => state.answers.every(answer => answer !== undefined)
    } as typeof initialState;

    if (loading) return <div>Loading...</div>;
    if (error) return <div className={'error'}>{error}</div>;

    return (
        <QuizContext.Provider value={quiz}>
            {state.questions && children}
        </QuizContext.Provider>
    );
}