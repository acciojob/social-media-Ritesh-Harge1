import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PostForm({ addPost }) {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (title && author && content) {
      addPost({ title, author, content });
      navigate("/");
    }
  };

  return (
    <div>
      <select id="postAuthor" value={author} onChange={(e) => setAuthor(e.target.value)}>
        <option value="">Select Author</option>
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
        <option value="Charlie">Charlie</option>
      </select>
      <input id="postTitle" placeholder="Post Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea id="postContent" placeholder="Post Content" value={content} onChange={(e) => setContent(e.target.value)} />
      <button className="button" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default PostForm;
