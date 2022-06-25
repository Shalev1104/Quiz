import { Pagination }  from "../../types";

export default function _Pagination({ pageNo, total, onClick, onPrev, onNext }: Pagination) {

    return (
        <>
            <button className="prev" onClick={onPrev} disabled={!(pageNo > 1)}> ← Previous </button>
            
            <div className="pages">
                { Array.from(Array(total), (_, i) => {
                    const page = i + 1;
                    return (
                        <button key={page} className={`page${page === pageNo ? ' active' : ''}`} onClick={onClick}>
                            {page}
                        </button>
                    )
                })}
            </div>

            <button className="next" onClick={onNext} disabled={!(pageNo < total)}> Next → </button>
        </>
    )
}