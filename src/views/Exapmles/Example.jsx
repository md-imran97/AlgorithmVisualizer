import React from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { Panel } from "primereact/panel";
import exampleCode from "../../exampleCode";

const Example = () => {
  return (
    <div className="mx-2 my-4 ">
      {exampleCode.map((ec, i) => {
        return (
          <div key={i} className="grid">
            <div className="col-2"></div>
            <div className="col">
              <Panel header={ec.header}>
                <InputTextarea
                  value={ec.code}
                  className="w-full"
                  rows={16}
                  readOnly
                />
              </Panel>
            </div>
            <div className="col-2"></div>
          </div>
        );
      })}
    </div>
  );
};

export default Example;
