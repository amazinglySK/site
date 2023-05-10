import styles from "./Blob.module.css";
import { useEffect } from "react";

export default function Blob() {
    useEffect(() => {
        let el = document.getElementById("blob");
        window.onpointermove = (event) => {
            const { clientX, clientY } = event;
            el.animate(
                {
                    left: `${clientX}px`,
                    top: `${clientY}px`,
                },
                { duration: 1500, fill: "forwards" }
            );
        };
    });
    return (
        <>
            <div id="blob" className={styles.blob}></div>
            <div className={styles.blur}></div>
        </>
    );
}
