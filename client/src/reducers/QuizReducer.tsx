import { Reducer } from "react";
import { Answer, Quiz } from "../types";
    
export enum Actions {
    SET_CATEGORY,
    SET_QUESTIONS,
    PREVIOUS_QUESTION,
    NEXT_QUESTION,
    TOGGLE_QUESTION,
    SELECT_ANSWER,
    IS_SELECTED,
    IS_ANSWERS_MARKED,
    FINISH_QUIZ
}

type ReducerAction = {
    type: Actions,
    payload?: any
}

export const initialState = {
    finish: false,
    questionNo: 1
} as Quiz;

const quizReducer: Reducer<typeof initialState, ReducerAction> = (state: typeof initialState, { type, payload }) => {
  
    switch (type) {

        case Actions.SET_CATEGORY:
            return {
                ...state,
                category: payload.category
            }

        case Actions.SET_QUESTIONS:
            const questions = payload.questions;
            return {
                ...state,
                questions,
                answers: new Array<Answer>(questions.length)
            }

        case Actions.NEXT_QUESTION:
            return {
                ...state,
                questionNo: state.questionNo + 1,
            }

        case Actions.PREVIOUS_QUESTION:
            return {
                ...state,
                questionNo: state.questionNo - 1,
            }

        case Actions.TOGGLE_QUESTION:
            return {
                ...state,
                questionNo: payload.questionNo,
            }

        case Actions.SELECT_ANSWER:
            const newAnswers = [...state.answers];
            newAnswers[state.questionNo - 1] = payload.answer;
            return {
                ...state,
                answers: newAnswers
            }

        case Actions.FINISH_QUIZ:
            return {
                ...state,
                finish: true,
                score: state.answers.filter(answer => answer && answer.correct).length
            }
    
        default:
            return state;
    }
  };
  
  export default quizReducer;