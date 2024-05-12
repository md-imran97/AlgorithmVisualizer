import React, { useRef, useState } from "react";
import { Splitter, SplitterPanel } from "primereact/splitter";
import VisualizePanel from "./components/VisualizePanel";
import CodePanel from "./components/CodePanel";
import Executor from "../../executor";
import LogView from "./components/LogView";
const executor = new Executor();
const Home = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const [speed, setSpeed] = useState(80);
  const [sourceCode, setSourceCode] = useState(`

  // All the methods to visualize algorithm

  // array element must be an object and must have id and value property
  // let arr = [{id:1,value:5}] 

  // Paint the node (element of an array) to red
  // pointPrimaryNode(node)

  // Paint the node to orrange
  // pointSecondaryNode(node)

  // Swap two node in visualize window
  // swapNode(firstNode, secondNode)

  // Paint the node to default blue
  // resetNode(node)

  // Paint the node to green
  //  fixedNode(node)

  // Write log to Log view window
  // log(logText)
  `);
  const [nodeList, setNodeList] = useState([]);
  const [parseError, setParseError] = useState("");
  const [log, setLog] = useState("");

  const runButtonClickHandler = (e) => {
    if (!sourceCode.trim()) {
      return;
    }
    executor.setup(setNodeList, setParseError, setIsRunning, setLog);
    executor.startExecution(speed, sourceCode);
    setLog("");
    setIsRunning(true);
  };
  const stopButtonClickHandler = (e) => {
    setIsRunning(false);
    executor.stopExecution();
  };
  const pauseButtonClickHandler = (e) => {
    setIsPause((previousValue) => {
      if (previousValue) {
        executor.unPauseExecution();
      } else {
        executor.pauseExecution();
      }
      return !isPause;
    });
  };
  const speedButtonChangeHandler = (e) => {
    setSpeed(e.value);
  };
  return (
    <div className="mx-2 my-4 ">
      <Splitter style={{ height: "420px", borderRadius: "0px" }}>
        <SplitterPanel className=" " size={65} minSize={50}>
          <VisualizePanel
            speedChangeHandler={speedButtonChangeHandler}
            speed={speed}
            nodeList={nodeList}
            isRunning={isRunning}
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
      <LogView logText={log} header="Log view" />
    </div>
  );
};

export default Home;
