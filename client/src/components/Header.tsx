import { useContext } from "react";
import { ThemeMode } from "../contexts/Theme";
import dark from '../assets/darkmode.svg';
import light from '../assets/lightmode.svg';

export default function Header() {
    const { darkTheme, toggleTheme } = useContext(ThemeMode);

    return (
            <header>
                <span>Quiz App</span>
                <img 
                    src={darkTheme ? dark : light}
                    className='theme'
                    width={50} 
                    height={50}
                    onClick={toggleTheme}
                    alt='theme'/>
            </header>
    )
}