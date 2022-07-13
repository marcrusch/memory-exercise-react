import { useState } from "react";
import styles from "./Menu.module.css";

export default function Menu({onPlayClick}) {
    const [names, setNames] = useState(["", ""]);
    return (
        <div className={styles["menu"]}>
            <input className={styles["menu__name-input"]} placeholder="Player 1" value={names[0]} onChange={(e)=>setNames([e.target.value, names[1]])}/>
            <p className={styles["menu__vs"]}>vs.</p>
            <input className={styles["menu__name-input"]} placeholder="Player 2" value={names[1]} onChange={(e)=>setNames([names[0], e.target.value])}/>
            <div className={styles["menu__play-button-container"]}>
                <button className={styles["menu__play-button"]} onClick={() => {
                    if (names[0] && names[1]) {
                        onPlayClick(names);
                    }
                }}>Play</button>
            </div>
        </div>
    )
}