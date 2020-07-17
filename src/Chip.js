import React from "react";

const Chip = (props) => {
  return (
    <div className="description-chip">
      <div style={{ fontFamily: "'Roboto', sans-serif", fontSize: 18 }}>
        {props.label}
      </div>
    </div>
  );
};

export default Chip;
