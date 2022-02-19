import React from "react";
import styles from "./Skeleton.module.css";

export default function Skeleton({ count = 2 }) {
    return (
        <React.Fragment>
            {[...Array(count)].map((e, i) => {
                return (
                    <div className={styles.skeletonRoot} key={`skeletron-${i}-feed`}>
                        <div className={styles.skeletonHeader}>
                            <div className={styles.skeletonDetails}>
                                <div className={`${styles.skeletonImage} ${styles.skeleton}`}></div>
                                <div className={styles.skeletonInfo}>
                                    <div className={`${styles.skeletonText} ${styles.skeleton}`}></div>
                                    <div className={`${styles.skeletonText} ${styles.skeleton}`}></div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.description}>
                            <div className={`${styles.skeletonTextLarge} ${styles.skeleton}`}></div>
                            <div className={`${styles.skeletonTextLarge} ${styles.skeleton}`}></div>
                            <div className={`${styles.skeletonTextLarge} ${styles.skeleton}`}></div>
                        </div>
                        {/* <img src="https://static.addtoany.com/images/dracaena-cinnabari.jpg" className={styles.feedImage} /> */}
                        <div className={`${styles.skeletonFeedImage} ${styles.skeleton}`}></div>
                    </div>
                );
            })}
        </React.Fragment>
    );
}
