import QuestionBody from "../../components/Questionnaire/Question.body";
import QuestionFooter from "../../components/Questionnaire/Question.footer";
import QuestionHeader from "../../components/Questionnaire/Question.header";
import Result from '../../components/Questionnaire/Result';
import { useQuiz } from "../../contexts/Quiz";
import './questionnaire.css';



export default function Questionnaire() {
    const { finish } = useQuiz();

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