import React from "react";
import PropTypes from "prop-types";

export default function DropdownItem({ children, ...rest }) {
  return (
    <a
      {...rest}
      className="text-sm py-3 px-4 font-normal block cursor-pointer whitespace-no-wrap text-gray-900 hover:bg-gray-500 hover:bg-opacity-10"
    >
      {children}
    </a>
  );
}

DropdownItem.propTypes = {
  children: PropTypes.node.isRequired,
};