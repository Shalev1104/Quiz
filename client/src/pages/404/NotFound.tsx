import useTimer from "../../hooks/useTimer";
import notFound from '../../assets/404.svg';

export default function NotFound() {
    const timestamp = 15;
    const onExpire = () => window.location.assign('/');
    const { seconds } = useTimer({timestamp, onExpire});

    return (
        <>
            <br />
            <img src={notFound} width={300} height={300} alt="404" />
            <h2>The page you were looking for does not exists</h2>
            <br />
            <button className="not-found-button" onClick={onExpire}>Back in {seconds} seconds</button>
        </>
    )
}