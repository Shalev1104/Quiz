import { Answer } from "../../../types";

export default function _Answer({ answer }: Answer) {
    
    return <button className="answer"> {answer} </button>
}