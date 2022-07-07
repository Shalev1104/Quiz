import Subject from "../../components/Menu/Category";
import './menu.css';
import { Category } from "../../types";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Loader from "../../components/Loader";
import Error from "../../components/Error";

export default function Menu() {
    const { pathname } = useLocation();
    const { fetchData: fetchCategories, data: categories, loading, error } = useFetch<Category[]>();
    
    useEffect(() => {
        fetchCategories(pathname, 'GET');
    }, []);

    return (
        <>
            <h1>
                Hi there! Please choose a category to get started
            </h1>
            <div className="container">
            {loading    && <Loader/>}
            {error      && <Error message={error}/>}
            {categories && categories.map((category, index) => 
                <Subject key={index} {...category} /> )}
            </div>
        </>
    );
}