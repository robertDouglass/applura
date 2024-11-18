import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app.jsx";
import Socket from "./component/socket.jsx";

// The "@applura/client" package identifier is defined by the import map in index.html. It is not published on NPM.
// See https://github.com/Applura/client#browser-only-import.
import { bootstrap } from "@applura/client";

// Mount and launch the client-side application.
document.addEventListener("DOMContentLoaded", async () => {
  // Bootstrap the Applura client. This should wait for the "DOMContentLoaded" event since the "bootstrap" function
  // depends on <link> elements in the document <head>. They provide the URL for the current resource.
  const client = bootstrap();
  // Get the application container.
  const container = document.getElementById("app");
  // "Plug" the main application into the Applura client.
  const Main = <Socket App={App} client={client} />;
  // Launch the application.
  createRoot(container).render(Main);
});
