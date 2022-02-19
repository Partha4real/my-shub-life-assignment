import React from "react";
import axios from "axios";
import AddFeed from "./components/AddFeed/AddFeed";
import Connections from "./components/Connections/Connections";
import FeedItem from "./components/FeedItem/FeedItem";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Skeleton from "./utils/Skeleton/Skeleton";

function App() {
    const [feed, setFeed] = React.useState([]);
    React.useEffect(() => {
        let url =
            "https://api.unsplash.com/photos?page=1&&client_id=41d46225d571eaf038ef9de4a666a459a6ff9a1e19b433390fdd98794693621d";
        axios({
            method: "get",
            url: url,
        })
            .then((res) => {
                setFeed(res.data);
            })
            .catch((err) => {
                setFeed([]);
            });
    }, []);

    return (
        <div className="App">
            <Navbar />
            <div className="grid">
                <div>
                    <Profile />
                </div>
                <div className="feedContainer">
                    <AddFeed />
                    {feed.length ? (
                        feed.map((item) => <FeedItem key={item?.id} feedData={item} />)
                    ) : (
                        <Skeleton count={3} />
                    )}
                </div>
                <div>
                    <Connections />
                </div>
            </div>
        </div>
    );
}

export default App;
