import { useState } from "react";

export default function useFetch<T>() {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchData = async (url : string, method : string, {...body} = {} ) => {
        setLoading(true);
        try {
            const res = await fetch(url, {
                method,
                headers : {'Content-Type': 'application/json'},
                mode: 'cors',
                cache: 'no-store',
                ...Object.keys(body).length > 0 && {body : JSON.stringify(body)}
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data || res.statusText);
            setData(data);
        }
        catch(err) {
            setError((err as Error).message);
        }
        finally {
            setLoading(false);
        }
    }
    return { fetchData, data, loading, error}
}