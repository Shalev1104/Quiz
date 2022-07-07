import { useLocation } from "react-router-dom";
import { Category } from "../../types";

export default function _Category({ name, url }: Category) {
    const { pathname } = useLocation();
    const handleClick = () => 
        window.location.assign(`${pathname}/${name}`);

    return (
        <button className="category" onClick={handleClick}>
            <img src={url} width={200} height={200} alt={name}/>
            <h3>{name.toUpperCase()}</h3>
        </button>
    );
}