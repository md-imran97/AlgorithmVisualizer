import { InputTextarea } from "primereact/inputtextarea";
import { Panel } from "primereact/panel";
import React from "react";

const LogView = (props) => {
  const { header = "Log view", logText = "" } = props;
  return (
    <div className="mx-2 my-4 ">
      <div className="grid">
        <div className="col-2"></div>
        <div className="col">
          <Panel header={header}>
            <InputTextarea
              value={logText}
              className="w-full"
              rows={7}
              readOnly
            />
          </Panel>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};

export default LogView;
