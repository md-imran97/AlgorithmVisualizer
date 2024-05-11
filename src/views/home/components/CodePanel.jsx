import React from "react";
import { Panel } from "primereact/panel";
import { InputTextarea } from "primereact/inputtextarea";

const CodePanel = () => {
  return (
    <Panel
      header={
        <>
          <button>run</button>
        </>
      }
      className="overflow-auto h-full w-full"
      pt={{ content: { style: { border: "0px" } } }}
    >
      <InputTextarea
        autoResize
        className="w-full"
        //onChange={(e) => setValue(e.target.value)}
        rows={16}
      />
    </Panel>
  );
};

export default CodePanel;
