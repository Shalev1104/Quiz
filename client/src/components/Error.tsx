import { Error } from "../types";

export default function _Error({ message}: Error) {
    return (
        <div className={'error'}>
            {message}
        </div>
    );
}