import React from "react";

const MenuIcon = ({
  color = "#2B2B2B",
  width = "100%",
  height = "100%"
}) => {

  return (
    <svg
      className="icon menuIcon"
      width={width}
      height={height}
      viewBox="0 0 13 12"
      fill="none"
    >
      <g
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <path
          d="M11.5,9.6 C12.0522847,9.6 12.5,10.0477153 12.5,10.6 L12.5,11 C12.5,11.5522847 12.0522847,12 11.5,12 L1.5,12 C0.94771525,12 0.5,11.5522847 0.5,11 L0.5,10.6 C0.5,10.0477153 0.94771525,9.6 1.5,9.6 L11.5,9.6 Z M11.5,4.8 C12.0522847,4.8 12.5,5.24771525 12.5,5.8 L12.5,6.2 C12.5,6.75228475 12.0522847,7.2 11.5,7.2 L1.5,7.2 C0.94771525,7.2 0.5,6.75228475 0.5,6.2 L0.5,5.8 C0.5,5.24771525 0.94771525,4.8 1.5,4.8 L11.5,4.8 Z M11.5,0 C12.0522847,-1.01453063e-16 12.5,0.44771525 12.5,1 L12.5,1.4 C12.5,1.95228475 12.0522847,2.4 11.5,2.4 L1.5,2.4 C0.94771525,2.4 0.5,1.95228475 0.5,1.4 L0.5,1 C0.5,0.44771525 0.94771525,1.01453063e-16 1.5,0 L11.5,0 Z"
          fill={color}
        >
        </path>
      </g>
    </svg>
  );
};

export default MenuIcon;