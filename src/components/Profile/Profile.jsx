import React from "react";
import Avatar from "../../utils/Avatar/Avatar";
import styles from "./Profile.module.css";
import { AddLink, Edit } from "@mui/icons-material";
export default function Profile() {
    return (
        <div className={styles.profileRoot}>
            <Edit className={styles.edit} />
            <Avatar size="large" />
            <h3 className={styles.userName}>Lucille Montgomery</h3>
            <p className={styles.userJobTitle}>UI/UX Designer</p>
            <p className={styles.userSocialLink}>
                <AddLink className={styles.add} />
                http://linkedin.com/in/lucille...
            </p>
            <div className={styles.infoContainer}>
                <div>
                    <h2>767</h2>
                    <p>Connections</p>
                </div>
                <div>
                    <h2>60</h2>
                    <p>Views</p>
                </div>
            </div>
            <p className={styles.info}>Free Access exclusive tools & insights</p>
            <button className={styles.button}>UPGRADE TO PREMIUM</button>
        </div>
    );
}
