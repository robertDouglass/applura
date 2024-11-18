import React from "react";
import Link from "./link.jsx";

/**
 * MenuLink renders a menu item link unless it is the active menu item.
 */
const MenuLink = ({ title, href, active = false }) => {
  return active || !href.length ? (
    <span>{title}</span>
  ) : (
    <Link {...{ title, href }} />
  );
};

/**
 * Item renders a single nav item and it children, if applicable.
 */
const Item = ({ children, ...link }) => (
  <li>
    <MenuLink {...link} />
    {children && <Items items={children} />}
  </li>
);

/**
 * Items renders navigation items or item children.
 */
const Items = ({ items }) => (
  <ul>
    {items.map((item, i) => (
      <Item key={i} {...item} />
    ))}
  </ul>
);

/**
 * Nav renders a navigation resource.
 *
 * @param resource
 */
const Nav = ({ resource: { items } }) => (
  <nav>
    {/* Render top-level menu items. */}
    <Items items={items} />
    {/* Render the example project "logo". */}
    <h1>
      Starter App<sup>React</sup>
    </h1>
  </nav>
);

export default Nav;
