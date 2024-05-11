import React from "react";
import { Panel } from "primereact/panel";
import VisualNode from "./VisualNode";
import {
  defaultNodeStyle,
  primaryNodeStyle,
  seconderyNodeStyle,
  fixedNodeStyle,
} from "../../../nodeStyle";

const VisualizePanel = (props) => {
  const {
    nodeList = [
      {
        id: 1,
        value: 5,
        style: seconderyNodeStyle,
      },
      {
        id: 2,
        value: 7,
        style: primaryNodeStyle,
      },
    ],
  } = props;
  return (
    <Panel
      header="Visualize"
      className="overflow-auto h-full w-full"
      pt={{ content: { style: { border: "0px" } } }}
    >
      <div className=" flex flex-row flex-wrap  ">
        {nodeList.map((node) => {
          return (
            <VisualNode id={node.id} value={node.value} style={node.style} />
          );
        })}
      </div>
    </Panel>
  );
};

export default VisualizePanel;
