import { useEffect } from "react";
import { useDebounce } from "./hooks/useDebounce";

const Home = () => {
  const print = () => {
    console.log("hello");
  };
  const debounced = useDebounce(print, 500);

  useEffect(() => {
    window.addEventListener("mousemove", debounced, false);
    return () => {
      window.removeEventListener("mousemove", debounced, false);
    };
  }, []);
  return <div >Home</div>;
};

export default Home;
