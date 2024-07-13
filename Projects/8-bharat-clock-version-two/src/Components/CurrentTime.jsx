import { useEffect, useState } from "react";

let CurrentTime = () => {
  const [time, setTime] = useState(new Date());
  const controller = new AbortController();
  const signal = controller.signal;

  useEffect(() => {
    console.log("Set Up");
    const intervalId = setInterval(() => {
      setTime(new Date());
    });

    return () => {
      clearInterval(intervalId);
      console.log("Canceled");
    };
  }, []);
  return (
    <p className="lead">
      This is the current time : {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
};
export default CurrentTime;
