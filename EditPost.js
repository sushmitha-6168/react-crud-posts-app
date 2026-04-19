import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

function EditPost() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  function handleUpdate() {
    if (!title) return alert("Enter title");

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title }),
      headers: { "Content-Type": "application/json" },
    })
      .then(() => navigate("/"))
      .catch(() => alert("Error updating post"));
  }

  return (
    <div className="container">
      <h1>Edit Post {id}</h1>

      <input
        placeholder="New title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />

      <button className="edit-btn" onClick={handleUpdate}>
        Update
      </button>
    </div>
  );
}

export default EditPost;
