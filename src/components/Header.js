import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        //dynamically change how the button looks based on showAdd prop
        background_color={showAdd ? "red" : "blue"}
        text_color="white"
        text={showAdd ? "Cancel" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
