import React from "react";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <html>
      <div>
        <h1>Neighboride</h1>
        <Link to="">Home</Link>
      </div>
      <div>
        <h1>Welcome to the Home component</h1>
        <p>This is the home component</p>
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
