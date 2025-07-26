import { useEffect, useRef, useState } from "react";

export const useIdle = (delay: number) => {
  const [isIdle, setIsIdle] = useState(false);
  // create a new reference to track timer
  const timeoutId = useRef<number>(null);
  useEffect(() => {
    setup();

    return () => {
      cleanUp();
    };
  }, []);

  const startTimer = () => {
    timeoutId.current = setTimeout(goInactive, delay);
  };

  const resetTimer = () => {
    console.log("reset timer");
    if (!timeoutId.current) return;
    clearTimeout(timeoutId.current);
    goActive();
  };

  const goInactive = () => {
    setIsIdle(true);
  };

  const goActive = () => {
    setIsIdle(false);

    startTimer();
  };
  const setup = () => {
    document.addEventListener("mousemove", resetTimer, false);
    document.addEventListener("mousedown", resetTimer, false);
    document.addEventListener("keypress", resetTimer, false);
    document.addEventListener("DOMMouseScroll", resetTimer, false);
    document.addEventListener("mousewheel", resetTimer, false);
    document.addEventListener("touchmove", resetTimer, false);
    document.addEventListener("MSPointerMove", resetTimer, false);

    //edge case
    //if tab is changed or is out of focus
    window.addEventListener("blur", startTimer, false);
    window.addEventListener("focus", resetTimer, false);
  };
  const cleanUp = () => {
    document.removeEventListener("mousemove", resetTimer);
    document.removeEventListener("mousedown", resetTimer);
    document.removeEventListener("keypress", resetTimer);
    document.removeEventListener("DOMMouseScroll", resetTimer);
    document.removeEventListener("mousewheel", resetTimer);
    document.removeEventListener("touchmove", resetTimer);
    document.removeEventListener("MSPointerMove", resetTimer);

    //edge case
    //if tab is changed or is out of focus
    window.removeEventListener("blur", startTimer);
    window.removeEventListener("focus", resetTimer);

    // memory leak
    if (!timeoutId.current) return;
    clearTimeout(timeoutId.current);
  };

  return isIdle;
};
