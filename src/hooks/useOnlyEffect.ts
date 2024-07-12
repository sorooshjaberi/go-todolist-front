import { useEffect, useRef } from "react";

export default function useOnlyEffect(...props: Parameters<typeof useEffect>) {
  const [cb, deps] = props;
  const initialCalled = useRef(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (initialCalled.current) {
      const onUnmount = cb();
      if (typeof onUnmount === "function") return onUnmount;
    } else {
      initialCalled.current = true;
    }
  }, [...(deps || [])]);
}
