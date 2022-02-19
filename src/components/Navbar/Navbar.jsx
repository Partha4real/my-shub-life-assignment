import React from "react";
import SearchBox from "../../utils/SearchBox/SearchBox";
import NavItems from "../../utils/NavItems/NavItems";
import Avatar from "../../utils/Avatar/Avatar";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <div className={styles.navbarRoot}>
            <div className={styles.navbarLeft}>
                <p className={styles.logo}>in</p>
                <SearchBox />
                <NavItems />
            </div>
            <Avatar menu={true} />
        </div>
    );
}
