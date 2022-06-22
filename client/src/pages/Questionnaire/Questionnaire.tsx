import QuestionBody from "../../components/Questionnaire/Question.body";
import QuestionFooter from "../../components/Questionnaire/Question.footer";
import QuestionHeader from "../../components/Questionnaire/Question.header";
import Result from '../../components/Questionnaire/Result';
import { useContext } from 'react';
import { QuizContext } from "../../contexts/Quiz";
import './questionnaire.css';



export default function Questionnaire() {
    const { finish } = useContext(QuizContext);

    return (
        <>
        {
            finish ? <Result/> :
            <div className="questionnaire">
                <QuestionHeader />
                <QuestionBody />
                <QuestionFooter/>
            </div>
        }
        </>
    )
}