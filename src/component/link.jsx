import React from "react";
import useFollow from "../hook/follow.js";

/**
 * Link renders and follows links.
 *
 * This component uses the "follow" function provided by the Applura client. If the follow function is unavailable, it
 * falls back to regular browser navigation. The Applura client automatically manages browser history and handles
 * external links by initiating a regular browser navigation. It is not necessary to handle those cases here.
 */
const Link = ({ title, href }) => {
  const follow = useFollow();
  const handleClick = (e) => {
    if (follow) {
      e.preventDefault();
      follow({ title, href });
    }
  };
  return (
    <a title={title} href={href} onClick={handleClick}>
      {title}
    </a>
  );
};

export default Link;
