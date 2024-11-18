import React from "react";

/**
 * ProcessedHTML renders known-safe HTML.
 *
 * This component provides a clean method of rendering server-sent HTML. Applura pre-processes and filters server-sent
 * HTML against XSS vulnerabilities.
 *
 * @param html
 *   The known-safe HTML.
 */
const ProcessedHTML = ({ html }) => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);

export default ProcessedHTML;
