import React from "react";
import { Panel } from "primereact/panel";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";

const CodePanel = ({
  isRunning,
  isPause,
  runClickHandler,
  pauseClickHandler,
  stopClickHandler,
  sourceCode,
  setSourceCode,
}) => {
  return (
    <Panel
      header="Code"
      icons={
        <>
          <div className="flex flex-wrap">
            <div className="flex align-items-center justify-content-center    border-round">
              <Button
                icon={
                  <i
                    className="pi pi-play-circle"
                    style={{ fontSize: "1.3rem" }}
                  ></i>
                }
                rounded
                text
                severity={isRunning ? "secondary" : "success"}
                aria-label="Bookmark"
                disabled={isRunning}
                onClick={runClickHandler}
              />
            </div>
            <div className="flex align-items-center justify-content-center    border-round">
              <Button
                icon={
                  <i
                    className="pi pi-pause-circle"
                    style={{ fontSize: "1.3rem" }}
                  ></i>
                }
                rounded
                text
                severity={isPause ? "info" : "secondary"}
                aria-label="Bookmark"
                disabled={!isRunning}
                onClick={pauseClickHandler}
              />
            </div>
            <div className="flex align-items-center justify-content-center    border-round">
              <Button
                icon={
                  <i
                    className="pi pi-stop-circle"
                    style={{ fontSize: "1.3rem" }}
                  ></i>
                }
                rounded
                text
                severity={isRunning ? "danger" : "secondary"}
                aria-label="Bookmark"
                disabled={!isRunning}
                onClick={stopClickHandler}
              />
            </div>
          </div>
        </>
      }
      className="overflow-auto h-full w-full"
      pt={{ content: { style: { border: "0px" } } }}
    >
      <InputTextarea
        value={sourceCode}
        autoResize
        className="w-full"
        //onChange={(e) => setValue(e.target.value)}
        rows={16}
        onChange={(e) => {
          setSourceCode(e.target.value);
        }}
      />
    </Panel>
  );
};

export default CodePanel;
