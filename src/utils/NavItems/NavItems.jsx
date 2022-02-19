import React from "react";
import styles from "./NavItems.module.css";
import {
    HomeOutlined,
    PeopleAltOutlined,
    MapsUgcOutlined,
    NotificationsOutlined,
    WorkOutlineOutlined,
    AppsOutlined,
} from "@mui/icons-material";

export default function NavItems({ itemData, isNavLinks = true, singleItem = false, icon, text, small = false }) {
    const [navItems, setNavItems] = React.useState(0);
    const data = [
        {
            icon: <HomeOutlined />,
            text: "Home",
        },
        {
            icon: <PeopleAltOutlined />,
            text: "newtork",
        },
        {
            icon: <MapsUgcOutlined />,
            text: "messaging",
        },
        {
            icon: <NotificationsOutlined />,
            text: "notifications",
        },
        {
            icon: <WorkOutlineOutlined />,
            text: "jobs",
        },
        {
            icon: <AppsOutlined />,
            text: "work",
        },
    ];
    const currentData = itemData ? itemData : data;

    return (
        <React.Fragment>
            {currentData.map((item, index) => (
                <div
                    key={`${item.text}-navItems`}
                    className={`${styles.navItemsRoot} ${isNavLinks && index === navItems && styles.navItemActive} ${
                        small && styles.small
                    }`}
                    onClick={() => setNavItems(index)}
                >
                    {item.icon}
                    <span>{item.text}</span>
                </div>
            ))}
        </React.Fragment>
    );
}
