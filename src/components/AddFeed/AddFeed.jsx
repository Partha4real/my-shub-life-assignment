import React from "react";
import NavItems from "../../utils/NavItems/NavItems";
import styles from "./AddFeed.module.css";
import { ArticleOutlined, CameraAltOutlined, VideoCallOutlined, Send } from "@mui/icons-material";

export default function AddFeed() {
    const data = [
        {
            icon: <ArticleOutlined />,
            text: "Article",
        },
        {
            icon: <CameraAltOutlined />,
            text: "Image",
        },
        {
            icon: <VideoCallOutlined />,
            text: "Video",
        },
    ];
    return (
        <div className={styles.addFeedRoot}>
            <div className={styles.addFeed}>
                <p>Write here. Add images or a video for visual impact.</p>
            </div>
            <div className={styles.actions}>
                <NavItems itemData={data} isNavLinks={false} />
                <Send className={styles.send} />
            </div>
        </div>
    );
}
