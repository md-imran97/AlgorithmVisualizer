import React, { useRef, useState } from "react";
import { Splitter, SplitterPanel } from "primereact/splitter";
import VisualizePanel from "./components/VisualizePanel";
import CodePanel from "./components/CodePanel";
import Executor from "../../executor";

const Home = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const [speed, setSpeed] = useState(80);
  const [sourceCode, setSourceCode] = useState(`
  // Language support: Javascript (only)
  // All the methods to visualize algorithm

  // array element must be an object and must have id and value property
  // let arr = [{id:1,value:5}] 

  // Draw the full array
  // drawList(array)

  // Draw the node (element of an array) to red
  // pointPrimaryNode(node)

  // Draw the node to orrange
  // pointSecondaryNode(node)

  // Swap two node in visualize window
  // swapNode(firstNode, secondNode)

  // Draw the node to default blue
  // resetNode(node)

  // Draw the node to green
  //  fixedNode(node)

  // Write log to Log view window
  // log(logText)
  `);
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
