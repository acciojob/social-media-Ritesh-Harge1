import React from "react";
import { Link } from "react-router-dom";

function Post({ post, updatePost }) {
  const handleReaction = (index) => {
    if (index < 4) {
      const newReactions = [...post.reactions];
      newReactions[index] += 1;
      updatePost(post.id, { reactions: newReactions });
    }
  };

  return (
    <div className="post">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p>Author: {post.author}</p>
      <div>
        {post.reactions.map((count, i) => (
          <button key={i} onClick={() => handleReaction(i)}>{count}</button>
        ))}
      </div>
      <Link className="button" to={`/posts/${post.id}`}>Edit</Link>
    </div>
  );
}

export default Post;
