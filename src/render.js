import React from "react";
import App from "./app.jsx";
import { renderToString } from "react-dom/server";

/**
 * The render function renders the main application to a string.
 *
 * This is used for server-side rendering. Notice that the App component receives a "resource" parameter in the same
 * manner as in the browser-only Socket component.
 */
const render = (resource) => renderToString(<App resource={resource} />);

// It is important to export a function named "render" from this file. This is how the Applura service loads and renders
// the application on the server. This file should not contain a default export.
export { render };
