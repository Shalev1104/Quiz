import QuestionFooter from "../../components/Questionnaire/Question.footer";
import QuestionBody from "../../components/Questionnaire/Question.body";
import QuestionHeader from "../../components/Questionnaire/Question.header";
import { useParams } from "react-router-dom";
import './questionnaire.css';
import questionsJson from '../../lib/questions.json';
import { useState } from "react";

export default function Questionnaire() {
    const { category } = useParams();
    const questions = questionsJson['food'];
    const [questionNo, setQuestionNo] = useState(1);
    const TOTAL_QUESTIONS = 10;
    
    return (
        <div className="questionnaire">
            <QuestionHeader category={category!} />
            { questions.map((question, index) => <QuestionBody {...question} key={index}  />) }
            <QuestionFooter questionNo={questionNo} total={TOTAL_QUESTIONS} />
        </div>
    )
}