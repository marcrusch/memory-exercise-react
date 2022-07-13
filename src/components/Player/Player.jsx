import "./Player.module.css";

export default function Player({name, score}) {
    return (
        <div className="player">
            <p className="player__name">{name}</p>
            <p className="player__score">{score}</p>
        </div>
    )
}