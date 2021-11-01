import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";

const News = () => {
  const [newsFeed, setNewsFeed] = useState([]);

  const feeds = ["https://telex.hu/rss", "https://444.hu/feed", "https://24.hu/feed/", "https://hvg.hu/rss"];

  const icons = {
    Telex: "http://telex.hu/favicon.ico",
    444: "http://444.hu/assets/blog/static/favicon.ico",
    "24.hu": "http://24.p3k.hu/apple-touch-icon.png",
    "hvg.hu": "http://hvg.hu/Content/redesign/i/favicon.ico",
  };

  useEffect(() => {
    Promise.all(
      feeds.map(async (feed) => {
        return fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=${feed}&api_key=h6c7obcpxiju88z0sbdbucorchg7veavqobtaxbg&count=15`
        )
          .then((response) => response.json())
          .then((response) =>
            response.items.map((item) => {
              item.newsPage = response.feed.title.split(" ")[0];
              const pubTime = new Date(item.pubDate + " GMT+0000").toLocaleString().split(" ")[3];
              item.pubTime = pubTime.slice(0, pubTime.length - 3);
              return item;
            })
          );
      })
    ).then((response) => setNewsFeed(response.flat()));
  }, []);

  return (
    <div>
      <p>News:</p>
      {newsFeed &&
        newsFeed
          .sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate))
          .map((item) => (
            <p>
              <Avatar src={icons[item.newsPage]} sx={{ width: 14, height: 14 }} />
              {`${item.pubTime}: `}
              <a target="blank" href={item.link}>
                {item.title}
              </a>
            </p>
          ))}
    </div>
  );
};

export default News;
