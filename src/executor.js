import ExecutionQueue from "./executionQueue";
import {
  defaultNodeStyle,
  primaryNodeStyle,
  secondaryNodeStyle,
  fixedNodeStyle,
} from "./nodeStyle";

export default function executor() {
  const queue = new ExecutionQueue();
  const speedConstant = 10;
  const totalSpeed = 100;
  let visualNodeList = [];

  let setNodeList = null;
  let setParseError = null;
  let setIsRunning = null;
  let setLog = null;

  let isCodeParsing = false;
  let isParseFailed = false;
  let isCodeRunning = false;
  let isCodePause = false;

  // execution functions
  function executeDrawList(nodeList) {
    visualNodeList = nodeList.map((node) => {
      return { id: node.id, value: node.value, style: defaultNodeStyle };
    });
    setNodeList([...visualNodeList]);
  }
  function executePointPrimaryNode(node) {
    visualNodeList = visualNodeList.map((vn) => {
      if (vn.id == node.id) {
        vn = { ...vn, style: primaryNodeStyle };
      }
      return vn;
    });
    setNodeList([...visualNodeList]);
  }
  function executePointSecondaryNode(node) {
    visualNodeList = visualNodeList.map((vn) => {
      if (vn.id == node.id) {
        vn = { ...vn, style: secondaryNodeStyle };
      }
      return vn;
    });
    setNodeList([...visualNodeList]);
  }
  function executeFixedNode(node) {
    visualNodeList = visualNodeList.map((vn) => {
      if (vn.id == node.id) {
        vn = { ...vn, style: fixedNodeStyle };
      }
      return vn;
    });
    setNodeList([...visualNodeList]);
  }
  function executeResetNode(node) {
    visualNodeList = visualNodeList.map((vn) => {
      if (vn.id == node.id) {
        vn = { ...vn, style: defaultNodeStyle };
      }
      return vn;
    });
    setNodeList([...visualNodeList]);
  }
  function executeSwapNode(firstNode, secondNode) {
    let node1 = null;
    let posNode1 = -1;
    let node2 = null;
    let posNode2 = -1;
    visualNodeList = visualNodeList.map((vn, i) => {
      if (vn.id == firstNode.id) {
        node1 = { ...vn };
        posNode1 = i;
      }
      if (vn.id == secondNode.id) {
        node2 = { ...vn };
        posNode2 = i;
      }
      return vn;
    });
    visualNodeList[posNode1] = node2;
    visualNodeList[posNode2] = node1;
    setNodeList([...visualNodeList]);
  }
  function executeLog(logText) {
    console.log(logText);
    setLog((pv) => `${pv}\n` + logText.toString());
  }

  // visual function
  function drawList(nodeList) {
    queue.enqueue(() => executeDrawList(nodeList));
  }
  function pointPrimaryNode(node) {
    queue.enqueue(() => executePointPrimaryNode(node));
  }
  function pointSecondaryNode(node) {
    queue.enqueue(() => executePointSecondaryNode(node));
  }
  function swapNode(firstNode, secondNode) {
    queue.enqueue(() => executeSwapNode(firstNode, secondNode));
  }
  function fixedNode(node) {
    queue.enqueue(() => executeFixedNode(node));
  }
  function resetNode(node) {
    queue.enqueue(() => executeResetNode(node));
  }
  function log(logText) {
    queue.enqueue(() => executeLog(logText));
  }

  // execution command function
  this.startExecution = function (speed, sourceCode) {
    run(speed, sourceCode);
  };
  this.stopExecution = function () {
    isCodeRunning = false;
  };
  this.pauseExecution = function () {
    isCodePause = true;
  };
  this.unPauseExecution = function () {
    isCodePause = false;
  };
  this.setup = function (
    setNodeListFunction,
    setParseErrorFunction,
    setIsRunningFunction,
    setLogFunction
  ) {
    setNodeList = setNodeListFunction;
    setParseError = setParseErrorFunction;
    setIsRunning = setIsRunningFunction;
    setLog = setLogFunction;
  };

  function run(speed, sourceCode) {
    queue.reset();
    visualNodeList = [];
    isCodeParsing = false;
    isParseFailed = false;
    isCodeRunning = false;
    isCodePause = false;

    parseSourceCode(sourceCode);
    // if (isParseFailed) {
    //   isParseFailed = false;
    //   return;
    // }
    isCodeRunning = true;
    const intervalId = setInterval(() => {
      if (isCodePause) return;
      let currentStatment = queue.dequeue();

      if (!currentStatment || !isCodeRunning) {
        isCodeRunning = false;
        isCodePause = false;
        setIsRunning(false);
        clearInterval(intervalId);
        return;
      }
      currentStatment();
    }, (totalSpeed - speed) * speedConstant);
  }
  function parseSourceCode(sourceCode) {
    isCodeParsing = true;

    try {
      const dynamicFunction = new Function(
        `return (drawList,pointPrimaryNode,pointSecondaryNode,swapNode,fixedNode,resetNode,log )=>{${sourceCode}}`
      );
      console.log("drawList", drawList);
      dynamicFunction()(
        drawList,
        pointPrimaryNode,
        pointSecondaryNode,
        swapNode,
        fixedNode,
        resetNode,
        log
      );
      isCodeParsing = false;
    } catch (error) {
      isCodeParsing = false;
      isParseFailed = true;
      setParseError(error);
      queue.reset();
      queue.enqueue(() => executeLog(error));
    }
  }
}
