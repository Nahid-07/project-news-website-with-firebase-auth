import React from "react";
import { useLoaderData } from "react-router-dom";
import NewSummuryCard from "../../shared/NewSmmuryCard/NewSummuryCard";

const Home = () => {
  const allNews = useLoaderData();
  return (
    <div>
      Here is all the news {allNews.length}
      {allNews.map((news) => (
        <NewSummuryCard key={news._id} news={news}></NewSummuryCard>
      ))}
    </div>
  );
};

export default Home;
