import styles from "./Invite.module.css";
import Button from "@components/Button/Button";

export default function Invite() {
    return (
        <section className={styles.invite_section}>
            <h3 className={styles.invite_line}>
                Interested in what I do ? Checkout out my{" "}
                <span className="special">blog</span> as well !
            </h3>
            <Button link="#" text="Check it out" />
        </section>
    );
}
