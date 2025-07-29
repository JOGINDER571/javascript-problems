import { useCallback, useRef } from "react";

type CallbackFunction = (...args: any[]) => void;

export const useDebounce = (
  fn: CallbackFunction,
  delay: number,
  immediate: boolean = false
): ((...args: any[]) => void) => {
  const timerId = useRef<ReturnType<typeof setTimeout> | null>(null);

  const debounce = useCallback(
    (...args: any[]) => {
      const context = this;
      const callNow = immediate && !timerId.current;

      if (timerId.current) {
        clearTimeout(timerId.current);
      }

      timerId.current = setTimeout(() => {
        timerId.current = null;
        if (!immediate) {
          fn.apply(context, args);
        }
      }, delay);

      if (callNow) {
        fn.apply(context, args);
      }
    },
    [fn, delay, immediate]
  );

  return debounce;
};
