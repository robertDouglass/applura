import React from "react";
import LandingPage from "./page/landing-page.jsx";
import BasicPage from "./page/basic-page.jsx";

/**
 * PageTypes maps server resource types to the component that should render them.
 */
const PageTypes = {
  landing_page: LandingPage,
  basic_page: BasicPage,
};

/**
 * App receives the current resource and/or problem and renders the application interface.
 *
 * @param resource
 *   The current resource.
 * @param problem
 *   The last problem encountered, if any, such as a client or server error.
 */
const App = ({ resource, problem }) => {
  if (problem) {
    return (<div><h1>Error</h1><p>An unexpected problem occurred.</p></div>);
  }
  // Extract the type of the current resource.
  const { type } = resource;
  // Look up the appropriate component to render this resource.
  const Page = PageTypes[type];
  // Render the resource from its fields.
  return (
    (Page && <Page fields={resource} />) || (
      <p>Unrecognized resource type: {type}</p>
    )
  );
};

export default App;
