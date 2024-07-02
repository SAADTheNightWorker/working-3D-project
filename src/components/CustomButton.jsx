import React from "react";
import state from "../store";
import { useSnapshot } from "valtio";

const CustomButton = ({ title, type, handleClick, customStyle }) => {
  const genrateStyle = (type) => {
    const snap = useSnapshot(state);
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: "#fff",
      };
    }
  };

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyle}`}
      style={genrateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
