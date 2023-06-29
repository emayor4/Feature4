import Parse from "parse";

import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App";

const root = document.getElementById("root");
createRoot(root).render(<App />);

Parse.serverURL = "https://parseapi.back4app.com";
Parse.initialize(
  "8h3fhGl0I7tBhYUSz8YW0dC9MBwVQ20lGWXXkDzh",
  "NcN8edYORCfYNTejLN8kkDNlkYpBuz2u4qWYKdYW"
);
