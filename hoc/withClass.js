import React from "react";

const withClass = (WrappedComponent, classes) => {
  return (props) => {
    return (
      <div className={classes.join(" ")}>
        <WrappedComponent />
      </div>
    );
  };
};

export default withClass;
