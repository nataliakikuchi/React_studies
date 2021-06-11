import React from "react";
import PostList from "../components/PostList";

const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Pet notícias</h2>
      </div>
      <PostList url={"/posts"} />
    </main>
  );
};

export default Home;
