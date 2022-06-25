import { createContext, useEffect, useState } from "react";
import { Provider, useTheme } from "../types";
import Header from "../components/Header";

export const ThemeMode = createContext({} as useTheme);

export default function ThemeProvider({ children } : Provider) {
    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('darkmode') || 'false'));

    const toggleTheme = () => {
        localStorage.setItem('darkmode', JSON.stringify(!theme));
        setTheme(!theme);
    }

    useEffect(() => {
        document.body.setAttribute("data-theme", theme ? "dark" : "light");
    }, [theme]);

    return (
        <ThemeMode.Provider value={{ darkTheme: theme, toggleTheme }}>
            <Header/>
            {children}
        </ThemeMode.Provider>
    )
}