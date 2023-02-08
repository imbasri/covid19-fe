import React from "react";

function Button(props) {
  return (
    <button
      type={props.type}
      className={`${
        props.styles || "rounded-full border border-red-400 px-4 py-2"
      }`}
    >
      {props.title}
    </button>
  );
}

export default Button;
