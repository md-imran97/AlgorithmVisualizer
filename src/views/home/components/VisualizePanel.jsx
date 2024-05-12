import React from "react";
import { Panel } from "primereact/panel";
import { Slider } from "primereact/slider";
import VisualNode from "./VisualNode";
import {
  defaultNodeStyle,
  primaryNodeStyle,
  secondaryNodeStyle,
  fixedNodeStyle,
} from "../../../nodeStyle";

const VisualizePanel = (props) => {
  const { nodeList, speed, speedChangeHandler, isRunning } = props;

  return (
    <Panel
      header="Visualize"
      icons={
        <>
          <div className="flex flex-wrap">
            <div className="flex align-items-center justify-content-center   m-2 border-round">
              Speed
            </div>
            <div className="flex align-items-center justify-content-center   m-2 border-round">
              <Slider
                value={speed}
                onChange={(e) => speedChangeHandler(e)}
                className="w-9rem"
                disabled={isRunning}
              />
            </div>
          </div>
        </>
      }
      className="overflow-auto h-full w-full"
      pt={{
        content: {
          style: { border: "0px" },
          title: { style: { color: "red" } },
        },
      }}
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
