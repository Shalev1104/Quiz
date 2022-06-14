import Pagination from "./Pagination";

export default function QuestionFooter({ questionNo, total }: { questionNo: number, total: number }) {

    return (
        <div className="question-footer">
            <div className="pagination">
                <Pagination 
                    pageNo={questionNo}
                    total={total} 
                />
            </div>
            <button className="finish">Finish</button>
        </div>
    )
};