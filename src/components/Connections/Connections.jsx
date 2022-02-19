import React from "react";
import styles from "./Connections.module.css";
import Avatar from "../../utils/Avatar/Avatar";
import { Add } from "@mui/icons-material";
import user1 from "../../assets/person1.jpeg";
import user3 from "../../assets/person3.jpeg";
import user4 from "../../assets/person4.jpeg";
import user5 from "../../assets/person5.jpeg";

export default function Connections() {
    const data = [
        {
            profile: user1,
            name: "Nina Douglas",
            jobTitle: "Recruiter - Orange",
        },
        {
            profile: user3,
            name: "Harry Caldwell",
            jobTitle: "Looking for Team Lead Java Developer",
        },
        {
            profile: user4,
            name: "Hettie Patrick",
            jobTitle: "UI/UX Designer",
        },
        {
            profile: user5,
            name: "Fannie Santiago",
            jobTitle: "SE Specialist",
        },
    ];
    return (
        <div className={styles.connectionsRoot}>
            <h1 className={styles.heading}>People you may know</h1>
            {data.map((item, index) => {
                return (
                    <div className={styles.connection} key={item.name}>
                        <Avatar size="medium" avatar={item.profile} />
                        <div className={styles.info}>
                            <h2 className={styles.name}>{item.name}</h2>
                            <p className={styles.jobTitle}>{item.jobTitle}</p>
                        </div>
                        <Add className={styles.addIcon} />
                    </div>
                );
            })}
        </div>
    );
}
