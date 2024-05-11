import React from "react";

const VisualNode = (props) => {
  const { id, value, style } = props;
  return (
    <div
      key={id}
      style={style}
      className="flex align-items-center justify-content-center w-4rem h-4rem  font-bold border-round m-2"
    >
      {value}
    </div>
  );
};

export default VisualNode;
