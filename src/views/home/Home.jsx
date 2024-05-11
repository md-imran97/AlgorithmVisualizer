import React, { useRef, useState } from "react";
import { Splitter, SplitterPanel } from "primereact/splitter";
import VisualizePanel from "./components/VisualizePanel";
import CodePanel from "./components/CodePanel";
import Executor from "../../executor";

const Home = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const [speed, setSpeed] = useState(50);
  const [sourceCode, setSourceCode] = useState("");
  const [nodeList, setNodeList] = useState([]);
  const [parseError, setParseError] = useState("");
  const executor = useRef(
    new Executor({ setNodeList, setParseError, setIsRunning })
  );

  const runButtonClickHandler = (e) => {};
  const stopButtonClickHandler = (e) => {};
  const pauseButtonClickHandler = (e) => {};
  const speedButtonChangeHandler = (e) => {};
  return (
    <div className="mx-2 my-4 bg-primary">
      <Splitter style={{ height: "420px", borderRadius: "0px" }}>
        <SplitterPanel className=" " size={65} minSize={50}>
          <VisualizePanel
            speedChangeHandler={speedButtonChangeHandler}
            speed={speed}
            //nodeList={}
          />
        </SplitterPanel>
        <SplitterPanel className="" size={35} minSize={10}>
          <CodePanel
            isRunning={isRunning}
            isPause={isPause}
            runClickHandler={runButtonClickHandler}
            pauseClickHandler={pauseButtonClickHandler}
            stopClickHandler={stopButtonClickHandler}
            sourceCode={sourceCode}
            setSourceCode={setSourceCode}
          />
        </SplitterPanel>
      </Splitter>
    </div>
  );
};

export default Home;
