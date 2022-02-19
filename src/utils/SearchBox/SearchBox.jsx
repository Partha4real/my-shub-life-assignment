import { Search } from "@mui/icons-material";
import React from "react";
import styles from "./SearchBox.module.css";

export default function SearchBox() {
    return (
        <div className={styles.searchBoxRoot}>
            <Search fontSize="medium" />
            <input type="text" className={styles.searchBox} placeholder="Search" />
        </div>
    );
}
