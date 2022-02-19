import React from "react";
import Avatar from "../../utils/Avatar/Avatar";
import styles from "./FeedItem.module.css";
import {
    ChatBubbleOutline,
    FavoriteOutlined,
    FavoriteBorderOutlined,
    MoreHoriz,
    ShareOutlined,
} from "@mui/icons-material";
import NavItems from "../../utils/NavItems/NavItems";
import timePassed from "../../utils/timePassed";

export default function FeedItem({ feedData }) {
    return (
        <div className={styles.feedItemRoot}>
            <div className={styles.feedHeader}>
                <div className={styles.userDetails}>
                    <Avatar size="medium" avatar={feedData?.user?.profile_image?.medium} />
                    <div className={styles.userInfo}>
                        <h5 className={styles.userName}>{feedData?.user?.name}</h5>
                        <p className={styles.userJobDetail}>{feedData?.user?.bio?.substring(0, 60)}</p>
                    </div>
                </div>
                <div className={styles.settingContainer}>
                    <MoreHoriz />
                    <p>{timePassed(feedData?.created_at)}</p>
                </div>
            </div>
            {feedData?.description ? <p className={styles.desciption}>{feedData?.description}</p> : null}
            <img src={feedData?.urls?.regular} className={styles.feedImage} alt={feedData?.alt_description} />
            <div className={styles.feedFooter}>
                <NavItems
                    isNavLinks={false}
                    itemData={[
                        {
                            icon: feedData?.liked_by_user ? (
                                <FavoriteOutlined className={styles.like} />
                            ) : (
                                <FavoriteBorderOutlined />
                            ),
                            text: feedData?.likes,
                        },
                    ]}
                    small={true}
                />
                <NavItems
                    isNavLinks={false}
                    itemData={[{ icon: <ChatBubbleOutline />, text: Math.floor(Math.random() * 100 + 1) }]}
                    small={true}
                />
                <NavItems isNavLinks={false} itemData={[{ icon: <ShareOutlined />, text: "Share" }]} small={true} />
            </div>
        </div>
    );
}
