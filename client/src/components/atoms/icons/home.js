import React from "react";

const HomeIcon = ({
  color = "#2B2B2B",
  width = "30px",
  height = "30px"
}) => {

  return (
    <svg
      className="icon homeIcon"
      width={width}
      height={height}
      style={{position: "relative", left: "-8px", top: "-7px"}}
      viewBox="0 0 24 24"
      fill="none"
    >
     <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>
  );
};

export default HomeIcon;
