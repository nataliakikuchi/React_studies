import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { search } from "../api/api";

const PostList = ({ url }) => {
  const [posts, setPosts] = useState([]);

  //chamando a API
  useEffect(() => {
    search(url, setPosts);
  }, []); //array de dependência, toda vez que for alterar o estado inicial da aplicação, vou chamar search e ele altera o estado da aplicação

  return (
    <section className="posts container">
      {posts.map((post) => (
        <Link
          className={`cartao-post cartao-post--${post.categoria}`}
          to={`/posts/${post.id}`}
        >
          <article key={post.id}>
            <h3 className="cartao-post__titulo">{post.title}</h3>
            <p className="cartao-post__meta">{post.metadescription}</p>
          </article>
        </Link>
      ))}
    </section>
  );
};

export default PostList;
