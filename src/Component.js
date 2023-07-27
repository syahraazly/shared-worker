import React, { useEffect, useState } from "react";

const Component = () => {
  const [counter, setCounter] = useState(0);
  const worker = new SharedWorker("sharedWorker.js");

  useEffect(() => {
    if ("Notification" in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          console.log("Notification permission granted.");
        }
      });
    }
    worker.port.onmessage = (event) => {
      setCounter(event.data);
    };
  }, []);

  const handleIncrement = () => {
    worker.port.postMessage(counter + 1); // Send the incremented value directly
  };

  const showNotification = () => {
    if ("Notification" in window) {
      new Notification("Counter Updated", {
        body: `Counter is now ${counter}`,
      });
    }
  };

  return (
    <div>
      <p> Counter: {counter} </p>
      <button onClick={handleIncrement}> Increment Counter </button>
      <button onClick={showNotification}> Show Notification </button>
    </div>
  );
};

export default Component;
