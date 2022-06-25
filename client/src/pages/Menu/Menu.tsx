import Subject from "../../components/Menu/Category";
import animal from '../../assets/animals.svg';
import health from '../../assets/health.svg';
import science from '../../assets/science.svg';
import astronomy from '../../assets/astronomy.svg';
import geography from '../../assets/geography.svg';
import sports from '../../assets/sports.svg';
import code from '../../assets/code.svg';
import food from '../../assets/food.svg';
import history from '../../assets/history.svg';
import music from '../../assets/music.svg';
import './menu.css';
import { Category } from "../../types";

export default function Menu() {
    const categories = [
        { name: "animals", url: animal },
        { name: "health", url: health },
        { name: "science", url: science },
        { name: "astronomy", url: astronomy },
        { name: "geography", url: geography },
        { name: "sports", url: sports },
        { name: "code", url: code },
        { name: "food", url: food },
        { name: "history", url: history },
        { name: "music", url: music },
    ] as Category[];

    return (
        <>
            <h1>
                Hi there! Please choose a category to get started
            </h1>
            <div className="container">
                { categories.map((category, index) => 
                    <Subject key={index} {...category} /> )}
            </div>
        </>
    );
}