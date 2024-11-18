import React, { useEffect, useState } from "react";
import ClientContext from "../context/client.jsx";

/**
 * Updates the HTML document title with the current resource title.
 *
 * @param resource {object}
 *   The current resource.
 */
const updateDocumentTitle = (resource) => {
  const title = resource?.title;
  if (title && document) {
    document.title = title;
  }
};

/**
 * Socket starts and integrates the Applura client with the App component.
 *
 * @param App
 *   App renders the application for the given resource and/or problem.
 * @param client
 *   The Applura JS client instance.
 */
const Socket = ({ App, client }) => {
  const [{ resource, problem }, setData] = useState({});

  // Update the application when an event occurs, such as a navigation or server-sent event.
  const handleEvent = (e) => {
    updateDocumentTitle(e?.resource);
    setData(e);
  };

  // Start the application event loop.
  useEffect(() => {
    (async () => {
      for await (const { resource, problem } of client.start()) {
        handleEvent({ resource, problem });
      }
    })();
    return () => client.stop();
  }, [client]);

  // Render the application once a resource or problem is encountered, but not before.
  return resource || problem ? (
    // ClientContext provides the application with access to the Applura client, especially the "follow" function.
    <ClientContext.Provider value={client}>
      {/* The main application component */}
      <App resource={resource} problem={problem} />
    </ClientContext.Provider>
  ) : null;
};

export default Socket;
