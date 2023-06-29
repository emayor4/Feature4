import React from "react";
import { Link } from "react-router-dom";



export default function Home() {
  return (
    <html>
      <div>
        <h1>Neighboride</h1>
      </div>
      <div>
        <h1>Welcome to the Home </h1>
      </div>
      <nav>
      <ul>
        <li>
          <Link to="/friends">Friends</Link>
        </li>
        <li>
          <Link to="/communities">Communities</Link>
        </li>
      </ul>
    </nav>
    </html>
  );
}
