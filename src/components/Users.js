import React from "react";

function Users({ posts }) {
  const users = [...new Set(posts.map((p) => p.author))];

  return (
    <ul>
      {users.map((user, idx) => (
        <li key={idx}>
          {user}
          <ul>
            {posts.filter(p => p.author === user).map(p => (
              <li key={p.id} className="post">{p.title}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default Users;
