import React from "react";

const EqualizerIcon = ({
  color = "#2B2B2B",
  width = "30px",
  height = "30px"
}) => {

  return (
    <svg 
      width={width}
      height={height}
      style={{position: "relative", left: "-8px", top: "-7px"}}
    class="icon homeIcon" focusable="false" viewBox="0 0 24 24" 
    aria-hidden="true">
      <path d="M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z"></path>
      </svg>
    
  );
};

export default EqualizerIcon;
