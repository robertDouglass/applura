import React from "react";
import ProcessedHTML from "../component/processed-html.jsx";
import Nav from "../component/nav.jsx";

/**
 * Section renders each item of the "landing_page" resource's "sections" field.
 */
const Section = ({ id, heading, content }) => (
  <section key={id}>
    <h3>{heading}</h3>
    <ProcessedHTML html={content} />
  </section>
);

/**
 * LandingPage renders "landing_page" resources.
 *
 * @param fields
 *   The landing page fields.
 */
const LandingPage = ({ fields }) => {
  // Extract the required fields from the resource fields.
  const { mainMenu, hero, sections } = fields;
  return (
    <div id="landing-page">
      <header>
        {/* The main menu. */}
        <Nav resource={mainMenu.data} />
        {/* The hero content is sent from the server, pre-processed and filtered against XSS vulnerabilities. */}
        <ProcessedHTML html={hero} />
      </header>
      {/* Render all sections. */}
      <main>{sections.data.map(Section)}</main>
    </div>
  );
};

export default LandingPage;
