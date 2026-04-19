import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 10))); // limit 10
  }, []);

  function deletePost(id) {
    setPosts(posts.filter((p) => p.id !== id));
  }

  return (
    <div className="container">
      <h1>Posts</h1>

      {posts.map((p) => (
        <div className="post" key={p.id}>
          <h3>{p.title}</h3>

          <Link to={`/edit/${p.id}`} className="edit-btn">
            Edit
          </Link>

          <button className="delete-btn" onClick={() => deletePost(p.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
