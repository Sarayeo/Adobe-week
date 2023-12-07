import React from "react";
import ReactDOMClient from "react-dom/client";
import { Wireframe } from "./screens/Wireframe";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Wireframe />);
