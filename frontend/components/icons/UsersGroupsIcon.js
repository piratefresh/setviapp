import React from "react";
import PropTypes from "prop-types";

function UsersGroupsIcon({ className, fill }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path d="M16 13c-.29 0-.62 0-.97.05C16.19 13.89 17 15 17 16.5V19h6v-2.5c0-2.33-4.67-3.5-7-3.5m-8 0c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5m0-2a3 3 0 0 0 3-3 3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3m8 0a3 3 0 0 0 3-3 3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3z" />
    </svg>
  );
}

UsersGroupsIcon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string
};

UsersGroupsIcon.defaultProps = {
  className: undefined,
  fill: "rgba(0, 0, 0, 0.35)"
};

export default UsersGroupsIcon;
