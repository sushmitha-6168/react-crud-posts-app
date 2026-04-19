import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddPost() {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  function handleSubmit() {
    if (!title) return alert("Enter title");

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({ title }),
      headers: { "Content-Type": "application/json" },
    })
      .then(() => navigate("/"))
      .catch(() => alert("Error adding post"));
  }

  return (
    <div className="container">
      <h1>Add Post</h1>

      <input
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />

      <button className="add-btn" onClick={handleSubmit}>
        Add Post
      </button>
    </div>
  );
}

export default AddPost;
