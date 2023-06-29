import React from "react";
import { Link } from "react-router-dom";

// Home component for the homepage
export default function Home() {
  return (
    <html>
      <div>
        <h1>Neighboride</h1>
      </div>
      <div>
        <h1>Welcome to the Home</h1>
      </div>
      <nav>
        <ul>
          <li>
            {/* Link to the Friends page */}
            <Link to="/friends">Friends</Link>
          </li>
          <li>
            {/* Link to the Communities page */}
            <Link to="/communities">Communities</Link>
          </li>
        </ul>
      </nav>
    </html>
  );
}
