import React from "react";
import styles from "./Avatar.module.css";
import { ArrowDropDownCircle } from "@mui/icons-material";
import user2 from "../../assets/person2.jpeg";

export default function Avatar({ avatar = user2, size = "small", menu = false }) {
    return (
        <div
            className={`${styles.avatarRoot} ${
                size === "small"
                    ? styles.sizeSmall
                    : size === "medium"
                    ? styles.sizeMedium
                    : size === "large"
                    ? styles.sizeLarge
                    : ""
            }`}
        >
            <img src={avatar} alt="avatar" className={styles.avatar} />
            {menu ? <ArrowDropDownCircle className={styles.arrow} /> : null}
        </div>
    );
}
