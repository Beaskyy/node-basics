import {setTimeout as sleep} from "node:timers/promises"

const setTimeOutExample = (): void => {
  console.log("1. set timeout example");

  setTimeout(() => {
    console.log("2. this runs after 1 seconds");
  }, 1000);

  console.log("3. this runs immediately after the setTimeout is called");
};

const clearTimeoutExample = (): void => {
  let timerId = setTimeout(() => {
    console.log("This will not run because the timeout is cleared");
  }, 2000);

  clearTimeout(timerId);
};

function runSetIntervalExample(): void {
  let count = 0;

  const intervalId = setInterval(() => {
    count++;

    console.log(`5. setInterval tick: ${count}`);

    if (count === 3) {
      clearInterval(intervalId);
      console.log("6. setInterval stopped");
    }
  }, 1000);
}

function setImmediateExample(): void {
  setImmediate(() => {
    console.log("7. set immediate callback");
  });
  console.log("8. synchronous code is run");
}

const runPromiseTimerExample = async (): Promise<void> => {
  console.log("9. waiting for promise based timer");

  await sleep(5500)

  console.log("10. promise based timer finishes after 1.5 seconds")
}

function runTimeDemo(): void {
  setTimeOutExample();
  clearTimeoutExample();
  runSetIntervalExample();
  setImmediateExample();
}

runTimeDemo();

runPromiseTimerExample().catch((error: unknown) => {
  console.error("Error in promise timer example:", error);
})
