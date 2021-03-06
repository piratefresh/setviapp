import React from "react";
import PropTypes from "prop-types";

function ResourcesIcon({ className, fill }) {
  return (
    <svg viewBox="0 0 37 37" className={className}>
      <path
        fill={fill}
        d="M22.2 21.637v4.69L31.96 34h-2.437L22.2 28.951v.104h-4.933v-.104L9.944 34H7.51l9.756-7.674v-4.689H0V0h37v21.637H22.2zM34.533 2.472H2.467v16.693h32.066V2.472zM6.75 8.951l3.873 5.96 3.637-5.73 3.33 5.406 2.562-7.973a.626.626 0 0 1 .777-.401.618.618 0 0 1 .393.778l-3.375 10.528-3.7-6.01-3.614 5.686-3.545-5.457-1.57 4.52a.615.615 0 0 1-1.162-.41L6.75 8.95zm20.384 7.741h-2.466V14.22h2.466v2.473zm-2.432-7.874a3.258 3.258 0 0 1 1.995-3.016 3.232 3.232 0 0 1 3.537.7 3.268 3.268 0 0 1 .707 3.552 3.242 3.242 0 0 1-2.998 2.012 3.245 3.245 0 0 1-3.24-3.25v.002zm7.366 7.874H29.6V14.22h2.467v2.473z"
      />
    </svg>
  );
}

ResourcesIcon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string
};

ResourcesIcon.defaultProps = {
  className: undefined,
  fill: "rgba(0, 0, 0, 0.35)"
};

export default ResourcesIcon;
