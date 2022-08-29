import { Button } from "antd";
import { useImperativeHandle, forwardRef, useState } from "react";
import { useInterval } from "ahooks";

const CountDownButton = forwardRef((props, ref) => {
  const { children, onClick, second } = props;

  // hooks

  const [state, setState] = useState({
    second: second ?? 30,
    interval: undefined,
  });

  useInterval(() => {
    if (state.second <= 0) {
      stop();
      return;
    }
    setState({ ...state, second: state.second - 1 });
  }, state.interval);

  useImperativeHandle(ref, () => ({
    countDown,stop
  }));

  // functions

  function countDown() {
    setState({ ...state, interval: 1000, second: second ?? 30 });
  }
  function stop() {
    setState({ ...state, interval: undefined });
  }

  return (
    <Button
      type="link"
      onClick={() => {
        if (onClick === undefined) return;
        onClick(countDown);
      }}
      disabled={state.interval}
    >
      {state.interval ? `${state.second}秒后重试` : children}
    </Button>
  );
});

export default CountDownButton;

