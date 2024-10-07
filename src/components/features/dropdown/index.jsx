import { useState } from "react";
import PropTypes from "prop-types";

export default function Dropdown({ label, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-button">
        {label}
      </button>
      {isOpen && <div className="dropdown-content">{children}</div>}
    </div>
  );
}

Dropdown.propTypes = {
  children: PropTypes.node,
  label: PropTypes.node,
};
