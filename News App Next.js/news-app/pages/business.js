import React, { useEffect, useState } from "react";
import News from "./components/News";
import Header from "./layout/Header";

import newsapi from "./helpers/newsApi";

const Business = () => {
  const [data, setData] = useState([]);
  const mergeData = (responses) => {
    const newsArray = [];
    responses.map((response) => {
      newsArray.push(...response.articles);
    });
    return newsArray;
  };

  useEffect(() => {
    let unmounted = false;

    if (!unmounted) {
      const arrayPromiseNews = [];
      ["ja", "us"].map((country) => {
        arrayPromiseNews.push(
          newsapi.v2.topHeadlines({
            category: "business",
            country,
            pageSize: 8,
            page: 1,
          })
        );
      });

      Promise.all(arrayPromiseNews)
        .then((responses) => {
          if (responses[0].status === "ok") {
            setData(mergeData(responses));
          }
        })
        .catch((err) => {
          console.log(`Something goes wrong ${err}`);
        });
    }
    return () => {
      unmounted = true;
    };
  }, []);
  return (
    <div>
      <Header />
      <News category="Business" data={data} />
    </div>
  );
};

export default Business;
