import { Category } from "../../types";

export default function _Category({ name, url }: Category) {
    
    const handleClick = () => 
        window.location.assign(name)

    return (
        <button className="category" onClick={handleClick}>
            <img src={url} width={200} height={200} alt={name}/>
            <h3>{name.toUpperCase()}</h3>
        </button>
    );
}