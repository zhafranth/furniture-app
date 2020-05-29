import React from "react";
import { Link } from "react-router-dom";

import propTypes from "prop-types";

export default function Button(props) {
  const className = [props.className];
  if (props.isPrimary) className.push("btn-primary");
  if (props.isSmall) className.push("btn-small");
  if (props.isLarge) className.push("btn-large");
  if (props.hasShadow) className.push("btn-shadow");
  if (props.isBlock) className.push("btn-block");
  // OnClick function
  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  // Disable or Loading
  if (props.isDisabled || props.isLoading) {
    if (props.isDisabled) className.push("disabled");
    return (
      <span className={className.join(" ")} style={props.style}>
        {props.isLoading ? (
          <>
            <span className="spinner-border spinner-border-sm mx-5"></span>
            <span className="sr-only">Loading...</span>
          </>
        ) : (
          props.children
        )}
      </span>
    );
  }

  // Type Button
  if (props.type === "link") {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={className.join(" ")}
          style={props.style}
          target={props.target === "_blank" ? "_blank" : undefined}
          rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
        >
          {props.children}
        </a>
      );
    } else {
      return (
        <Link
          to={props.href}
          className={className.join(" ")}
          style={props.style}
          onClick={onClick}
        >
          {props.children}
        </Link>
      );
    }
  }

  return (
    <button
      className={className.join(" ")}
      style={props.style}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  type: propTypes.oneOf(["link", "button"]).isRequired,
  onClick: propTypes.func,
  href: propTypes.string,
  className: propTypes.string,
  target: propTypes.string,
  isSmall: propTypes.bool,
  isLarge: propTypes.bool,
  isDisabled: propTypes.bool,
  isExternal: propTypes.bool,
  isLoading: propTypes.bool,
  isBlock: propTypes.bool,
  isPrimary: propTypes.bool,
  hasShadow: propTypes.bool,
};
