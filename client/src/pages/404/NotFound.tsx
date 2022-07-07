import useTimer from "../../hooks/useTimer"

export default function NotFound() {
    const timestamp = -1;
    const onExpire = () => window.location.assign('/');
    const { seconds } = useTimer({timestamp, onExpire});

    return (
        <>
            <h1>404</h1>
            <div>The page you were looking for does not exists</div>
            <button onClick={onExpire}>Back in {seconds} seconds</button>
        </>
    )
}