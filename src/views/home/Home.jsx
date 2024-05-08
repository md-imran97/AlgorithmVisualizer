import React from "react";
import { Splitter, SplitterPanel } from "primereact/splitter";
import { Panel } from "primereact/panel";
import { InputTextarea } from "primereact/inputtextarea";

const Home = () => {
  return (
    <div className="mx-2 my-4 bg-primary">
      <Splitter style={{ height: "420px", borderRadius: "0px" }}>
        <SplitterPanel className=" " size={65} minSize={50}>
          <Panel
            header="Visualize"
            className="overflow-auto h-full w-full"
            pt={{ content: { style: { border: "0px" } } }}
          >
            <div className=" flex flex-row flex-wrap  ">
              <div className="flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round m-2">
                1
              </div>

              <div className="flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round m-2">
                3
              </div>
              <div className="flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round m-2">
                3
              </div>
              <div className="flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round m-2">
                3
              </div>

              <div className="flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round m-2">
                3
              </div>
            </div>
          </Panel>
        </SplitterPanel>
        <SplitterPanel className="" size={35} minSize={10}>
          <Panel
            header="Code"
            className="overflow-auto h-full w-full"
            pt={{ content: { style: { border: "0px" } } }}
          >
            <InputTextarea
              autoResize
              className="w-full"
              //onChange={(e) => setValue(e.target.value)}
              rows={15}
            />
          </Panel>
        </SplitterPanel>
      </Splitter>
    </div>
  );
};

export default Home;
